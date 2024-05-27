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

## 구현 사항

- 유저리스트는 무한 스크롤 형식으로 화면에 보여 집니다.
- 로딩 중인 경우에는 로딩Indicator가 표시 됩니다.
- 유저 리스트를 클릭 하였을 때, 북마크 또는 북마크 해제가 되며, 리스트에 북마크 상태가 표시됩니다.
- username은 일부만 만족 되더라도 검색 결과에 표시 됩니다.
  - ex) 입력창에 kim 입력시, “kim”, “kimmking”, “kiminh” …. 등이 표시됩니다.
- 북마크 된 유저리스트를 모아서 볼 수 있습니다.
