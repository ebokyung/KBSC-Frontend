# Hanwul_Project(FE part)
<img width="1394" alt="스크린샷 2023-09-12 오후 12 53 42" src="https://github.com/ebokyung/KBSC-Frontend/assets/90684277/fbf55cef-7210-4abc-b7a4-7052b41f03f6">
back-end : https://github.com/seokhwan-an/KBSC-Backend
<br>
<br>

## 목차
- [소개](#Intro)
- [기술스택](#Tech)
- [서비스](#Service)

<br>
<br>

## <span id="Intro">소개</span>
학교폭력 피해학생 상담 서비스는 많이 존재하지만, 해당 피해학생이 원활하게 일상으로 복귀하는 것을 돕는 프로그램은 현저히 부족한 상황입니다.
이러한 부분을 해결하고자 개발된 **"학교 폭력 피해학생의 일상 복귀 및 후유증 치유를 지원하는 서비스 한울"**을 소개합니다.

한울은 ‘큰 울타리처럼 사람들을 포근하게 안아주어라‘의 순 우리말로
피해자들이 포근히 안겨 의지할 수 있는, 피해자들을 보듬는 서비스가 되겠다는 뜻입니다.

<br>
<br>

## <span id="Tech">기술스택</span>
### 기술 구조도 :
![image](https://github.com/ebokyung/KBSC-Frontend/assets/90684277/10763f9b-c7e8-446e-911d-1f7e2b893b9a)

### front-end : 
<table>
<tr>
<td align="center">사용 기술</td>
<td>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>&nbsp
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>&nbsp
    <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>&nbsp
</td>
</tr>
<tr>
<td align="center">협업</td>
<td>
    <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Notion-5a5d69?style=flat-square&logo=Notion&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Figma-d90f42?style=flat-square&logo=Figma&logoColor=white"/>&nbsp  
</td>
</tr>
<tr>
<td align="center">IDE</td>
<td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
</table>
<br>
<br>

## <span id="Service">서비스</span>
<img width="1254" alt="스크린샷 2023-09-12 오후 1 32 14" src="https://github.com/ebokyung/KBSC-Frontend/assets/90684277/5dbccd6e-1a13-476b-8d05-14c92543b0dd">

### 1. 감정 비우기
: 해소되지 못한 내면의 감정들을 밖으로 적어내고 울타리 밖으로 던져 삭제하여 비워내기
감정을 작성한 뒤 마우스로 드래그 시 감정 카드가 구겨지고,
울타리 밖으로 던지는 행위를 통해 밖으로 비우는, 실제 행위와 유사한 사용자 경험을 제공합니다.
![감정비우기](https://github.com/ebokyung/KBSC-Frontend/assets/90684277/afff8209-8349-47bf-b813-27e9df22b2e3)

### 2. 감정 나누기
: ‘감정 비우기‘ 페이지에서 공개로 설정하여 작성한 감정 카드를 모아볼 수 있습니다. 롤링페이퍼에서 영감을 받아 디자인하여 타인과 감정을 보며 공감하고 위안을 얻을 수 있습니다.
매주 가장 많은 ‘공감하기’를 얻은 감정카드 3개를 뽑아 ‘이번 주 공감 TOP 3’로 고정합니다.
![감정나누기](https://github.com/ebokyung/KBSC-Frontend/assets/90684277/d22b4ff8-a1c9-41e9-8994-66b77671ca1c)

### 3. 질문 일기
: 매 달 같은 날에 같은 질문을 제공하고 답변을 입력할 수 있습니다.
질문은 실제 전문 상담사들이 중시하는 ‘왜?’와 ‘어떻게 되었으면 하는지‘에 초점을 둬 감정 성찰을 유도하며 심리치료에 자주 사용되는 심리치료 보드게임을 참고하여
부정적 감정을 긍정적 감정보다 더 많이 경험하였을 피해자들의 긍정적 자아상 정립을 돕습니다.
매 달의 마지막 날은 스스로에게 영상 편지를 보내 동기 부여와 위로를 전할 수 있습니다.
![질문일기](https://github.com/ebokyung/KBSC-Frontend/assets/90684277/06883c87-16cd-4da1-b736-5f96a8018021)

### 4. 일일 미션
: 불면증, 자신감 회복, 불안감, 식욕부진, 무력감, 반복적 회상, 분노 중 자신의 후유증에 해당하는 키워드를 선택하고 키워드 당 하나의 미션을 매일 받아볼 수 있습니다. 미션 완료 성과를 그래프로 한 눈에 확인할 수 있고 달성율에 따른 격려와 칭찬 문구를 제공합니다.
![일일미션](https://github.com/ebokyung/KBSC-Frontend/assets/90684277/2d8044c9-3e2d-4bb9-a70c-ac3d4822422c)

### 5. 친구 상담
: 통계청에서 2020년 13~18세를 대상으로 ‘청소년 고민 상담 대상’을 조사한 결과,
36.7%가 또래인 친구, 동료, 선후배를 선택하여 1위를 차지하였습니다. 친구 상담을 통해 ‘상담해주세요’와 ‘상담해드려요‘로 나뉜 소통방을 개설하고 사용자간 소통할 수 있습니다.<br>(욕설 입력 시 자동으로 블라인드 처리되며 신고하기와 평가하기를 통해 신고하기 3회 누적 시 소통방 개설을 제한하여 2차 피해를 막기 위해 노력하고 있습니다.)
![친구상담](https://github.com/ebokyung/KBSC-Frontend/assets/90684277/c4880e12-c8c5-49a4-99a2-a1f56c683141)

### 6. 상담소 정보 (& 테마 변경)
: 상담 자격증에는 국가자격증과 민간자격증이 있습니다. 전문가와의 추가 상담이 필요한 경우 국가자격증을 보유한 상담사가 상주하는 상담소를 필터링하여 위치 및 지역 기반 검색이 가능합니다.
![상담소정보](https://github.com/ebokyung/KBSC-Frontend/assets/90684277/a498c384-246b-4d20-88e7-78c36cbd22d7)