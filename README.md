# coTree
![111 (1)](https://github.com/user-attachments/assets/8ba9a856-0e46-4cc1-a28a-386d536320e7)
<br><br><br>

## 🖥️ 프로젝트 개요
- 기간 : 2025.03.19 ~ 2025.04.16
- 이 프로젝트는 TypeScript와 React, 국가유산청 OPEN API와 카카오지도 API를 사용하여 개발되었습니다.
- 감투: 감춰진 역사 투어는 국가유산 정보를 쉽고 직관적으로 탐색할 수 있도록 다양한 기능을 제공합니다. 국가유산 카테고리별 검색을 통해 원하는 정보를 빠르게 찾을 수 있으며, 상세 정보 페이지에서 해당 국가유산의 역사적 의미와 특징을 확인할 수 있습니다. 또한, 퀴즈 기능을 통해 사용자들이 재미있게 학습할 수 있도록 유도하였고, 문화행사 일정 조회 기능을 추가하여 국가유산과 관련된 행사 정보를 한눈에 확인할 수 있습니다. 또한 길찾기 기능을 통해 직접 방문을 계획할 수 있습니다.
<br><br><br>

## 🎯 프로젝트 목표
- TypeScript, React, Next.js를 활용하여 효율적이고 확장 가능한 SPA(Single Page Application) 설계 및 구현
- Next.js의 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 활용하여 성능 최적화
- 비동기 통신(Axios, Fetch API)를 활용하여 외부 API(XML → JSON 변환) 데이터를 효율적으로 가져오고 상태 관리
- React Router 대신 Next.js의 내장 라우팅 시스템을 활용하여 페이지 전환 및 상태 관리 최적화
- 사용자 경험(UX)을 고려한 직관적인 UI/UX 설계 및 구현
- Git, Notion, Zoom 등의 협업 툴을 활용하여 원활한 팀 협업 진행
<br><br><br>

## 팀원 소개 및 역할
<center>
<table>
  <tbody>
    <tr></tr><tr>
      <td><a href="https://github.com/dony0720">신중석</a></td>
    </tr>
    <tr>
      <td>FE | 팀장</td>
    </tr>
    <tr></tr><tr>
      <td>
        <a>· 팀 리드 및 협업 관리</a><br>
        <a>· 메인, 채용 전체, 프로젝트 전체 퍼블리싱</a><br>
        <a>· 채용 전체, 이력서 조회 및 작성 기능 개발</a><br>
        <a>· HomeMain, LoginView, SignupView, TravelPlanner 페이지</a><br>
        <a>· TravelMain 페이지 확장하는 메뉴 컴포넌트, MyPage 입양 신청서 표시 컴포넌트, TravelDetail 페이지 커뮤니티 반응 컴포넌트</a><br>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/dony0720">신중석</a></td>
    </tr>
    <tr>
      <td>FE | 팀원</td>
    </tr>
    <tr></tr><tr>
      <td>
        <a>· 여행 전체 조회 페이지, 커뮤니티 메인, 마이페이지 퍼블리싱</a><br>
        <a>· 카테고리별 검색, 키워드 검색 기능, Tour API 조회 기능</a><br>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/cj2174">최윤서</a></td>
    </tr>
    <tr>
      <td>FE | 팀원</td>
    </tr>
    <tr></tr><tr>
      <td>
        <a>· 유기동물 조회 및 상세 페이지, 입양 신청서 페이지 퍼블리싱, 자유게시판 커뮤니티 CRUD</a><br>
      </td>
    </tr>
  </tbody>
</table>
</center>

## 👥 팀원 소개 및 역할
<center>
<table>
  <tbody>
    <tr>
    </tr>
    <center>
    <tr>
      <td><a href="https://github.com/dony0720">신중석</a></td>
      <td><a href="">홍종희</a></td>
      <td><a href="">김지우</a></td>
   
    </tr>
      <tr>
      <td><a>· 팀 리드 및 협업 관리<br>· 메인, 채용 전체, 프로젝트 전체 퍼블리싱 <br>. 채용 전체, 이력서 조회 및 작성 기능 개발 </a></td>
      <td><a>· 국가유산 이름 및 카테고리별 검색 기능<br>. 국가유산 상세정보 제공 및 위치 마커</a></td>
      <td><a>· Q&A 등록/수정/삭제/좋아요/댓글기능<br>·지도 길찾기,지도마커,인포윈도우기능,지도 재설정</a></td>
      <td><a>· 국가유산 퀴즈 관련 기능 전체</a></td>
      <td><a>· 국가유산 메인페이지 제작</a></td>
    </tr>
  </tbody>
</table>
</center>
<br><br><br>

## ⚙️ 주요 기능
- 국가유산 퀴즈
  - 퀴즈 페이지
    - 문제 제작 및 화면에 표시 기능
    - 퀴즈 체점 및 세션 스토리지에 결과 저장 (가장 최근 문화재 퀴즈 결과만 저장)
    - 오답률 및 점수 정보를 계산해서 서버에 보낸다
  - 퀴즈 결과 페이지
    - 세션 스토리지에서 퀴즈 결과 불러오기 및 화면에 표시
    - 정답과 연관이 되는 문화재의 상세 정보 페이지로 이동 할 수 있는 링크 제공
    - 유저의 랭크(최대 점수 백분율 통계에서 유저의 위치)를 나타내는 아이콘 표시
  - 퀴즈 통계 페이지
    - 랭킹 테이블 제작 및 지정된 평가 기준에서 가장 높은 점수를 획득한 유저를 찾는 기능
    - 위의 데이터를 제작한 표 컴포넌트로 표시하는 기능
    - 전체 유저 및 로그인 된 사용자의 문화재 분류별 퀴즈 오답률 데이터를 계산하는 기능
    - 전체 유저의 최고 점수 분포도 및 로그인 된 사용자의 분포에서의 위치를 계산하는 기능
    - 위의 데이터를 Chart.js, react-chart-2로 표시하는 기능
  - 퀴즈 유저 상세 페이지
    - 특정 유저의 퀴즈 랭크, 가입 정보, 댓글 및 좋아요 수를 표시하는 기능
    - 전체 유저 및 특정 유저의 문화재 분류별 퀴즈 오답률 데이터를 계산하는 기능
    - 특정 유저의 1주일 내의 퀴즈 결과 정보를 표시하는 기능
    - 특정 유저의 1주일 동안 일별 최고 점수를 라인 차트로 표시하는 기능
    - 특정 유저가 작성한 댓글을 표시하는 기능

- **문화재 지도 기능**
  - 지도에 국가유산 위치 마커 표시
  - 마커 클릭 시 해당 문화재의 상세 정보 페이지로 이동 가능
  - 길찾기 기능 제공 (사용자 위치 기반 경로 탐색)
  - 예상 택시 요금 및 톨게이트 비용 계산 기능 제공

<br><br><br>

## 🛠️ 기술 스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Vercel-%23000000?style=for-the-badge&logo=vercel&logoColor=white"/>
 <img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/> ![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
<br><br><br>


## 📁 폴더 구조
```bash
├── src
│   ├── app
│   │   ├── culture
│   │   │   ├── components
│   │   │   │   ├── components.tex
│   │   │   │   ├── ...
│   │   │   ├── detail
│   │   │   │   ├── page.tex
│   │   │   ├── videoPlayer
│   │   │   │   ├── page.tex
│   │   │   ├── page.tex
│   │   ├── festival
│   │   │   ├── page.tex
│   │   ├── login
│   │   │   ├── page.tex
│   │   ├── map
│   │   │   ├── components
│   │   │   │   ├── ...
│   │   │   ├── config
│   │   │   │   ├── ...
│   │   │   ├── page.tex
│   │   ├── qna
│   │   │   ├── page.tex
│   │   ├── quiz
│   │   │   ├── page.tex
│   │   ├── quizRanking
│   │   │   ├── components
│   │   │   │   ├── ...
│   │   │   ├── page.tex
│   │   ├── quizResults
│   │   │   ├── components
│   │   │   │   ├── ...
│   │   │   ├── page.tex
│   │   ├── rankingDetail
│   │   │   ├── components
│   │   │   │   ├── ...
│   │   │   ├── page.tex
│   │   ├── user
│   │   │   ├── page.tex
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── components
│   │   ├── main
│   │   │   ├── buttonGroup.tex
│   │   │   ├── ...
│   │   ├── quiz
│   │   │   ├── svg
│   │   │   │   ├── ArrowRightIcon.tsx
│   │   │   │   ├── ...
│   │   │   ├── CHCategories.te
│   │   │   ├── ...
│   │   ├── CalcCreateTimeToLocalTime.ts
│   │   ├── ...
│   ├── lib
│   │   ├── redux
│   │   │   ├── slice
│   │   │   │   ├── authSlice.ts
│   │   │   │   ├── createSlice.ts
│   │   │   ├── store.ts
│   │   │   ├── provider.tsx
│   ├── types
│   │   ├── AuthStateInterface.ts
│   │   ├── ...
``` 
