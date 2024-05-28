# GitHub 유저를 검색하고 해당 유저를 북마크 하는 간단한 서비스

## 사용 기술

- next.js
- typescript
- chakra-ui
- octokit
- tanstack-query
- zustand

## 실행 전 셋팅

- 최상단 루트에 .env.local 파일을 만들어주세요.
- GITHUB_ACCESS_TOKEN 에 자신의 깃헙토큰을 넣어주세요.

```sh
NEXT_PUBLIC_TOKEN=<GITHUB_ACCESS_TOKEN>
```

## 실행 방법

```bash
yarn && yarn dev
```

## 사용법

- 입력창에 유저이름을 입력 후 검색 버튼을 클릭하거나 Enter키를 누르면 유저를 검색합니다.
- 별표 아이콘을 눌러 북마크를 누르면 유저가 북마크 목록에 추가됩니다.

## Deploy
```
https://github-users-weld.vercel.app/
```

## 구현 사항

- 유저리스트는 무한 스크롤 형식으로 화면에 표시됩니다.
- 무한 스크롤은 20개씩 화면에 표시됩니다.
- 유저 검색 결과가 존재할 시 무한 스크롤이 수행 됩니다.
- 로딩 중인 경우에는 로딩Indicator가 표시 됩니다.
- 유저 리스트를 클릭 하였을 때, 북마크 또는 북마크 해제가 되며, 리스트에 북마크 상태가 표시됩니다.
- username은 일부만 만족 되더라도 검색 결과에 표시 됩니다.
  - ex) 입력창에 kim 입력시, “kim”, “kimmking”, “kiminh” …. 등이 표시됩니다.
- 북마크 된 유저리스트를 모아서 볼 수 있습니다.
- 북마크의 상태는 브라우저에 다시 접속해도 유지될 수 있도록 LocalStorage를 사용했습니다.

## 추가/개선 해볼수 있는 사항

- 유저정보를 클릭할 시 해당 유저의 github repository로 이동할 수 있습니다.
- SSR에서 데이터를 로드하여 빠른 사용자 경험을 제공할 수 있습니다.
- web-storage 클래스를 추상화 합니다. ex) cookie, session 등 확장할 수 있도록
- 코드 린팅 포매팅 컨벤션 룰 적용