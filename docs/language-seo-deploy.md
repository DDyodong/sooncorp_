# 한국어·영어 검색 페이지 배포

## 변경 내용

| 공개 URL | 응답 |
|---|---|
| `/` | 한국어, S3 `index.html` |
| `/en/` | 영어, S3 `en/index.html` |
| `/kr`, `/kr/`, `/index.html` | `/`로 HTTP 301 |
| `/App`, `/App/`, `/en`, `/en/index.html` | `/en/`로 HTTP 301 |
| 그 외 존재하지 않는 페이지 경로 | HTTP 404 |

브라우저 언어로 자동 이동하지 않습니다. 각 페이지에서 언어 링크를 눌러 전환합니다.
각 언어의 본문, title, description, canonical, hreflang, 회사 구조화 데이터가
빌드된 HTML에 포함됩니다. 회사 표기는 순코퍼레이션 / SOON Corporation입니다.
기존 문구와 제품·실적·연락처를 유지하며, 공급사 목록은 기본 HTML details로 펼칩니다.

`npm run build`가 검사 → Vite 빌드 → 두 언어 HTML 생성 → SEO·경로 테스트를 실행합니다.
`npm run preview`에서 `/`와 `/en/`을 확인할 수 있습니다.
서버 프로그램이나 EC2를 배포하지 않습니다. 기존 GitHub Actions가 새 dist 전체를 올립니다.

## AWS 연결 순서

1. 소스 변경을 main에 push하고 GitHub Actions의 build와 deploy가 모두 성공하는지 확인합니다.
2. S3 `sooncorporation`에서 `index.html`, `en/index.html`, `sitemap.xml`, `robots.txt`가 있는지 확인합니다.
3. CloudFront → 함수(Functions) → 함수 생성. 이름 예: `sooncorp-language-routing`, 런타임 JavaScript 2.0.
4. `infra/cloudfront-language-routing.js`의 전체 코드를 붙여넣고 저장한 뒤 Publish(게시)합니다.
5. 배포 `E2CK3Z356DK5S8` → 동작 → 기본값(*) → 편집 → 함수 연결에서
   **뷰어 요청(Viewer request)** 에 이 함수를 연결합니다. 기존 뷰어 요청 함수가 있으면
   내용을 확인한 후 경로 규칙을 통합하거나, 경로 처리만 하던 함수이면 교체합니다.
6. 일반 → 기본 루트 객체는 `index.html`로 유지합니다.
7. 기존 403/404를 `/index.html`로 바꾸며 HTTP 200을 반환하는 오류 설정이 있다면 제거합니다.
8. 변경 배포 완료 후 무효화 → `/*`를 한 번 실행합니다.

함수 연결 전에는 `/en/`과 이전 언어 주소가 403일 수 있습니다.
`/en/index.html`로 직접 들어가면 클라이언트가 `/en/`로 이동하므로,
브라우저 화면만으로 함수 연결 여부를 판단하지 말고 아래 HTTP 응답을 확인하세요.
S3는 비공개로 유지하고 기존 OAC를 사용합니다. IAM 배포 역할의 권한 확대는 필요 없습니다.

## 완료 확인

```powershell
curl.exe -I https://sooncorp.kr/
curl.exe -I https://sooncorp.kr/en/
curl.exe -I https://sooncorp.kr/kr
curl.exe -I https://sooncorp.kr/App
curl.exe -I https://sooncorp.kr/does-not-exist
```

순서대로 200, 200, 301, 301, 404여야 합니다. 301의 Location도 표와 일치해야 합니다.
한국어와 영어 페이지에서 새로고침, 언어 전환, 공급사 목록 펼치기, 지도를 확인합니다.
페이지 소스에 각 언어의 회사명과 본문이 있는지도 확인합니다.

Search Console에서 `https://sooncorp.kr/sitemap.xml`을 제출하고,
`https://sooncorp.kr/`과 `https://sooncorp.kr/en/` 각각 실제 URL 테스트 후 색인 생성을 요청합니다.
기존 `/kr`와 `/App`은 리디렉션으로 남겨 기존 링크를 유지합니다.
Google의 재크롤링과 검색 순위 반영 시점은 보장할 수 없습니다.

## 배포 범위

이 변경은 기존 React 사이트의 언어·검색 구조를 수정합니다.
앞서 승인한 별도 디자인 샘플을 적용하는 변경은 포함하지 않습니다.

참고: [Google 다국어 사이트 안내](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites),
[CloudFront Function 연결](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-tutorial.html).
