# The Report on Web Accessibility Survey

![3](https://user-images.githubusercontent.com/84780174/187067756-48bf0eec-1e6b-43bc-8c68-6e8d05329c5f.png)


### The Report on Web Accessibility Survey

정보 접근성 관련 정책을 위한 웹 접근성 조사 분석 보고서

🔗 [https://limhyejeong.github.io/accessibility-survey/](https://limhyejeong.github.io/accessibility-survey/)

(데스크톱 환경에서 보기 좋습니다!)
</br></br>

# ⛳️ 프로젝트 배경

웹 사이트 사용 빈도가 높은 사업체 사이트들이 기본적인 웹 접근성을 지켜 제작되었는지 파악하고, 향후 웹 정보 접근성 관련 정책을 도출하기 위해 기획하였다.

웹 사이트 74.3%의 접근성 수준이 미흡으로 나타났으며, 장애인에게 큰 영향을 미치는 요소를 고려하지 않고 설계된 웹 사이트가 대부분이었다.

필요성 인식 개선과, 접근성을 준수한 기업에 가산점을 부여하는 인센티브 제도, 업종 및 타겟에 따라 적절한 접근성을 제공하는 홈페이지 제작 솔루션 배포 등으로 수준 향상을 기대할 수 있을 것이다.

</br>

# 🧭 프로젝트 프로세스

<aside>
💡 빅데이터 수업에서는 R Studio를 사용하여 그래프를 그립니다

</aside>
</br></br>

## 1. 데이터 다운로드

원하는 주제에 대한 데이터 파일(csv)을 다운로드합니다.

참고 사이트 >

[data.seoul.go.kr](http://data.seoul.go.kr/)   [figshare.com](http://figshare.com/)     [mdis.kostat.go.kr](http://mdis.kostat.go.kr/)

[data.gov](http://data.gov/)    [data.gov.uk](http://data.gov.uk/)   [data.un.org](http://data.un.org/)

</br>

## 2. 데이터 전처리 (영문화 등)

### - 영문화</br>

[데이터 편집 전]</br>
<img width="551" alt="스크린샷 2022-06-29 오후 10 05 41" src="https://user-images.githubusercontent.com/84780174/187067801-8df4e641-53de-4de8-933e-990bdbcd25d7.png">

[데이터 전처리 후]</br>
<img width="550" alt="스크린샷 2022-06-29 오후 10 04 44" src="https://user-images.githubusercontent.com/84780174/187067803-dbffa277-9692-4334-9831-a7877c590d0c.png">


R에서 데이터를 원활히 사용하기 위해 컬럼명을 영문으로 바꿔줍니다.


</br>

### - 모든 항목 백분율로 통일</br>

![Group 48](https://user-images.githubusercontent.com/84780174/187067774-7e0c3d1f-886a-4012-8462-a97aa50509d5.png)

</br>

## 3. R Studio 를 사용하여 데이터 시각화

<img width="984" alt="스크린샷 2022-06-29 오후 10 14 35" src="https://user-images.githubusercontent.com/84780174/187067851-ead92f15-ede0-4c42-a1d9-b5c0822a9e26.png">
알고 싶은 내용에 대해

적절한 그래프 스타일로 시각화하여 결과를 확인합니다.
</br>

<aside>
💡 멋진 그래프를 그리기 위해 ggplot2 라이브러리를 사용했어요

</aside>

</br></br>

## 4. 웹에서 인터랙티브하게 볼 수 있도록 만들기

웹 포트폴리오에 넣고 싶어서

html에 추가하는 방법을 찾아보았습니다.

만든 그래프를, ggplotly 라이브러리로 덮어씌우면

<img width="836" alt="스크린샷 2022-06-29 오후 10 19 39" src="https://user-images.githubusercontent.com/84780174/187067853-9c2d8e61-cc34-44a6-bcbb-925638ef58b3.png">

이렇게 마우스 오버 시 라벨이 뜨는 인터랙티브한 그래프가 만들어집니다.

html 파일로 내보낸 후, 내 웹 프로젝트에 iframe을 사용하여 그래프를 불러오면 됩니다.

![화면 기록 2022-06-29 오후 10 24 51](https://user-images.githubusercontent.com/84780174/187067855-d82ee8fb-6e1f-4858-a60d-17c1a60e9025.gif)

</br>

# 인사이트

![Group 49](https://user-images.githubusercontent.com/84780174/187067857-292dee89-2d6d-40b8-8537-63a6973dc71d.png)

1,000개 사이트의 웹 접근성 조사 및 분석 결과로는

웹 사이트 74.3%의 접근성 수준이 미흡으로 나타났으며,

장애인에게 큰 영향을 미치는 요소를 고려하지 않고 설계된 웹 사이트가 대부분이었습니다.

</br>

# 🧩 인터랙션

- 메인화면 스크롤 애니메이션
- 마우스 오버 시 라벨이 표시되는 인터랙티브 플롯
- 탭 메뉴
