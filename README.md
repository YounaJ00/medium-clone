## Introduce

React 학습을 위한 Medium Clone Project

## Design + API Spec

Creatie 디자인 파일 링크: [Creatie](https://creatie.ai/goto/KoKTBmcL?page_id=5:48&file=154034192374011)

## How to start

- **BACKEND**: root 폴더에서 **env** 작성

```console
JWT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

```console
cd backend
docker compose up -d 
./gradlew bootRun
```

## Frontend

- lang: TypeScript, React,
- route: Tanstack-Router,
- state: Tanstack-Query, Zustand,
- style: Vanilla Extract,
- lint: ESLint, Prettier, commitlint, lint-staged, lefthook
- CI/CD: test, build, deploy(Vercel/CloudFlares Pages / or 직접하면 AWS CloudFront)

## Backend

- lang: Kotlin
- framework: Spring Boot
- database: MySQL
- ORM: JPA

## Requirements

- 시작 페이지

<img src="./img/index.png" width="75%">

- login 페이지 / 회원 가입 페이지

<div style="display: flex; justify-content: space-between;">
  <img src="./img/login.png" width="45%">
  <img src="./img/sign-up.png" width="45%">
</div>

- 메인 페이지

<img src="./img/main.png" width="75%">

- 상세 페이지

<div style="display: flex; justify-content: space-between;">
    <img src="./img/post-detail.png" width="45%">
    <img src="./img/post-detail2.png" width="45%">
</div>

- 게시물 작성 페이지

<div style="display: flex; justify-content: space-between;">
    <img src="./img/write.png" width="45%">
    <img src="./img/write2.png" width="45%">
</div>
