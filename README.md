# SOON Corporation

React, TypeScript, Vite로 구성한 한국어·영어 회사 소개 사이트입니다.

## 설치 및 개발

```sh
npm ci
```

`.env.example`을 `.env`로 복사하고 `VITE_GOOGLE_MAPS_API_KEY`를 설정합니다.
배포에 사용할 Google Maps 키는 빌드 전에 설정해야 합니다.

```sh
npm run dev
```

## 검사

- `npm run typecheck`: 앱 코드와 Vite 설정의 TypeScript 검사
- `npm run lint`: TypeScript 및 React Hooks 규칙 검사. 경고도 실패로 처리합니다.
- `npm run check`: 타입 검사와 린트 순차 실행

## 빌드 및 수동 배포

```sh
npm ci
npm run build
npm run preview
```

`build`는 타입 검사와 린트가 모두 통과한 뒤 Vite로 `dist/`를 새로 생성합니다.
실패하면 업로드하지 마세요. 검사 단계에서 실패한 경우 이전 `dist/`가 남아 있을 수 있습니다.

미리보기에서 한국어·영어 페이지, 언어 전환, 지도, 공급사 아코디언을 확인한 뒤
새 `dist/`의 내용물을 현재 정적 호스팅 위치에 업로드합니다.
호스팅 서버는 `/kr` 및 `/App` 직접 접속 시에도 `index.html`을 제공하도록
SPA 경로 처리가 필요합니다.

`node_modules/`와 `dist/`는 Git에 저장하지 않습니다.
`package.json`과 `package-lock.json`은 함께 관리합니다.
Git 추적 제외만으로 기존 배포 사이트가 바뀌지는 않습니다.

## 추후 AWS 자동 배포

AWS 배포 서비스는 아직 연결하지 않았습니다. 연결할 때 사용할 기본 설정은 다음과 같습니다.

- 설치 명령: `npm ci` (빌드 도구가 필요하므로 개발 의존성도 설치)
- 빌드 명령: `npm run build`
- 배포할 산출물: `dist/`
- 빌드 환경 변수: `VITE_GOOGLE_MAPS_API_KEY`
- 빌드 실패 시 배포 중단
- SPA 경로를 `index.html`로 연결

실제 AWS 서비스와 배포 대상이 정해지면 업로드, 캐시 갱신, 자동 실행 조건을 추가합니다.
