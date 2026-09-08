# GitHub Actions → S3 + CloudFront

대상 저장소: `DDyodong/sooncorp_`, 배포 브랜치: `main`.
확인된 S3 버킷: `sooncorporation`, CloudFront 배포 ID: `E2CK3Z356DK5S8`.
서울 리전(`ap-northeast-2`) S3에 빌드 결과를 업로드하고 CloudFront 캐시를 갱신합니다.
PR은 검사·빌드만 수행합니다. main 배포는 아래 설정을 끝낸 뒤 활성화합니다.

## 1. AWS 대상 확인

- S3 버킷 이름: S3 → 버킷 목록의 이름. 이 사이트 전용 버킷을 사용합니다.
- CloudFront 배포 ID: 배포 목록의 ID 열에 있는 `E`로 시작하는 값.
  `*.cloudfront.net`은 접속 주소이므로 ID 대신 입력하지 않습니다.
- 비공개 S3 일반 버킷 원본에 OAC와 버킷 정책을 연결합니다.
- CloudFront 기본 루트 객체: `index.html`.
- 현재 코드의 `/kr`, `/App` 직접 접속을 위해 CloudFront Function에서
  해당 경로만 `/index.html`로 내부 재작성하도록 설정해야 합니다.
  모든 403/404를 HTML 성공 응답으로 바꾸지 마세요.
  향후 `/`, `/en/` 언어별 HTML 빌드를 도입하면 이 규칙도 함께 변경합니다.

## 2. IAM OIDC 역할 만들기

IAM → 자격 증명 공급자 → 공급자 추가:

- 유형: OpenID Connect
- 공급자 URL: `https://token.actions.githubusercontent.com`
- 대상(Audience): `sts.amazonaws.com`

IAM 역할을 만들고 다음 신뢰 정책을 사용합니다.
`ACCOUNT_ID`는 자신의 AWS 계정 ID로 바꿉니다.
동일한 공급자가 이미 있다면 다시 만들지 않습니다.

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": {"Federated": "arn:aws:iam::ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"},
    "Action": "sts:AssumeRoleWithWebIdentity",
    "Condition": {"StringEquals": {
      "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
      "token.actions.githubusercontent.com:sub": "repo:DDyodong/sooncorp_:ref:refs/heads/main"
    }}
  }]
}
```

역할의 권한 정책에는 아래 JSON을 추가합니다.
`BUCKET_NAME`, `ACCOUNT_ID`, `DISTRIBUTION_ID`를 실제 값으로 바꿉니다.
기본 S3 암호화(SSE-S3)를 기준으로 하며, 고객 관리 KMS 키를 사용하면 해당 키 권한도 별도로 필요합니다.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::BUCKET_NAME"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject"],
      "Resource": "arn:aws:s3:::BUCKET_NAME/*"
    },
    {
      "Effect": "Allow",
      "Action": ["cloudfront:CreateInvalidation", "cloudfront:GetInvalidation"],
      "Resource": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID"
    }
  ]
}
```

## 3. GitHub 설정값 등록

저장소 → Settings → Secrets and variables → Actions에서 등록합니다.
아래 값은 **Repository variables / Repository secrets**에 넣습니다.
이 워크플로는 GitHub Environment를 사용하지 않습니다.

| 종류 | 이름 | 값 |
|---|---|---|
| Variable | `S3_BUCKET` | `sooncorporation` |
| Variable | `CLOUDFRONT_DISTRIBUTION_ID` | `E2CK3Z356DK5S8` |
| Variable | `AWS_ROLE_ARN` | 위에서 만든 IAM 역할의 ARN |
| Secret | `VITE_GOOGLE_MAPS_API_KEY` | 지도 API 키 |
| Variable | `AWS_DEPLOY_ENABLED` | 연결 완료 후 `true` |

Vite의 `VITE_` 변수는 빌드 결과에 포함되어 브라우저에 공개됩니다.
지도 키에는 Google Cloud에서 서비스 도메인에 대한 HTTP 리퍼러 제한과 API 제한을 설정합니다.
AWS 액세스 키/비밀 키를 GitHub에 저장할 필요는 없습니다.

## 4. 실행과 확인

워크플로 파일과 필요한 소스·package.json·lockfile 변경을 커밋해 main에 push합니다.
활성화 전에는 빌드만 실행되고 deploy 작업은 건너뜁니다.
설정값 변경만으로는 실행되지 않으므로 활성화 후 Actions → Check and deploy website →
Run workflow에서 main을 선택하거나 새 커밋을 push합니다.

빌드 실패 시 AWS 업로드는 실행되지 않습니다. 성공한 산출물만 다음 작업으로 전달합니다.
정적 파일을 먼저 올리고 HTML을 마지막에 올린 뒤 캐시 무효화 완료를 기다립니다.
이전 파일은 자동 삭제하지 않으므로 배포 중 기존 페이지가 참조하는 파일이 사라지지 않습니다.
오래된 파일은 보관 정책을 정해 별도로 정리합니다. 여러 파일 업로드는 원자적 배포가 아닙니다.

Actions 성공 뒤 `/`, `/kr`, `/App`의 직접 접속·새로고침, 언어 전환, 지도를 확인합니다.
실제 CloudFront/S3/OIDC 연결 검증은 첫 배포에서 수행해야 합니다.
이 자동화 자체는 디자인이나 검색엔진용 언어별 HTML 구조를 변경하지 않습니다.

공식 문서:
- [GitHub의 AWS OIDC 설정](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws)
- [CloudFront OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)
