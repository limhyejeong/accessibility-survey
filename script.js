const loading = document.querySelector('.loading');
const cir = document.querySelector('.cover-graphic');
const cirs = document.querySelectorAll('.cover-graphic div');
const codes = document.querySelectorAll('.codeSelect span');
const codeAnalysis = document.querySelector('.code-analysis');
const graphInfo = codeAnalysis.querySelector('.graphInfo');
const codeInfo = codeAnalysis.querySelector('p');
const code_array = [
    {
        code: 'G',
        name: 'G.도매 및 소매업',
        count: '110',
        score: '62.9',
        level: '미흡',
        info: `23개 조사 항목 에서는 '적절한 대체 텍스트 제공', '키보드 사용 보장', '반복 영역 건너뛰기', '레이블 제공' 항목이 낮은 점수를 받았다.<br/>쇼핑몰 사이트 특성상 이미지를 사용하다 보니 적절한 대체 텍스트나 제목, 레이블 제공 등의 항목이 낮게 평가된 걸로 판단된다.<br/>장애인 등이 보다 쉽게 접근할 수 있도록 ‘반복 영역 건너뛰기’, ‘키보드 사용 보장’ 등 키보드 사용 접근성 개선이 요구된다.`
    }, {
        code: 'I',
        name: 'I.숙박 및 음식점업',
        count: '20',
        score: '65.2',
        level: '미흡',
        info: `23개 조사 항목 에서는 '반복 영역 건너뛰기', '키보드 사용 보장', '표의 구성', '초점 이동'  항목이 낮은 점수를 받았다.<br/> 숙박 및 음식업 분야도 이미지 요소를 많이 사용하고 있으나 적절한 대체 텍스트 제공이 미흡하며, 도표등의 콘텐츠 관련 항목도 미흡한 것으로 나타났다.<br/>고령자 및 장애인의 이용률이 높을 것으로 예상되는 분야임에도 불구하고 접근성 수준이 미흡하여 접근성 보장이 요구된다.`
    }, {
        code: 'J',
        name: 'J.출판, 영상, 방송통신 및 정보서비스업',
        count: '547',
        score: '66.2',
        level: '미흡',
        info: `23개 조사 항목 대부분이 평균값과 비슷했으며 '제목 제공', '레이블 제공' 등이 미흡한 것으로 나타났다.<br/>
        동영상 콘텐츠가 많을거라 예상되는 정보서비스업 분야에서 시각적 콘텐츠에 설명을 제공하지 않는 것으로 분석되어 접근성이 보장된 콘텐츠 보장이 필요하다.<br/>
        이미 제작된 콘텐츠에 자막 제공이 어려운 경우 원고와 같은 대체 수단을 제공하는 것이 약자를 위한 웹 접근성을 높일 수 있는 방법이라고 한다.`
    }, {
        code: 'K',
        name: 'K.금융 및 보험업',
        count: '60',
        score: '79.9',
        level: '보통',
        info: `23개 조사 항목 중 평균보다 미세하게 낮은 점수를 받은 항목은 '명확한 지시사항 제공', '마크업 오류 방지'이다.<br/>
        한꺼번에 다양한 서비스를 제공하는 금융 사이트의 복잡한 UI 때문에 해당 항목에서 낮은 점수를 받은 것으로 예상된다.<br/>
        금융 및 보험업은 타 업종에 비해 장애인과 노인의 생활에 밀접한 서비스이기 때문에 웹 접근성이 상대적으로 양호한 것으로 분석된다.<br/>
        금융거래에서 중시하는 보안 툴 설치, 공인인증서 등에 대해서도 웹 접근성을 확보할 수 있다면 사용성을 더욱 개선할 수 있을 것이다.`
    }, {
        code: 'L',
        name: 'L.부동산 및 임대업',
        count: '19',
        score: '62.1',
        level: '미흡',
        info: `23개 조사 항목 에서는 '표의 구성', '텍스트 콘텐츠 명도 대비', '키보드 사용 보장', '반복 영역 건너뛰기'  항목이 낮은 점수를 받았다.<br/>
        부동산 및 임대업 업종 특성상 웹사이트가 소규모이며, 사용도 및 관심이 적어 웹 접근성이 미흡한 것으로 판단된다.<br/>
        주요 사이트를 대상으로 웹 접근성 인식을 높이는 노력이 필요하다.`
    }, {
        code: 'P',
        name: 'P.교육 서비스업',
        count: '95',
        score: '66.4',
        level: '미흡',
        info: `23개 조사 항목 에서는 '표의 구성', '키보드 사용 보장', '마크업 오류방지' 항목이 낮은 점수를 받았다.<br/>
        온라인 교육 사이트의 경우 도표 콘텐츠의 구성이나, 코드의 마크업 관련 웹 접근성이 부족한 걸로 나타났다.<br/>
        교육 서비스업 사이트는 젊은 연령대의 사용도가 높으며, 접근성 보장을 위한 꾸준한 유지관리가 필요한 것으로 보인다.`
    }, {
        code: 'Q',
        name: 'Q.보건업 및 사회복지 서비스업',
        count: '75',
        score: '64.8',
        level: '미흡',
        info: `23개 조사 항목 에서는 '키보드 사용보장', '반복 영역 건너뛰기' 항목이 낮은 점수를 받았다.<br/>
        보건업 및 사회복지 서비스업은 노인 및 장애인 등 약자들이 주요 사용자층이므로 웹 접근성 보완이 필요한 것으로 판단된다.<br/>
        정보 전달이 주 목적으로 타 업종에 비하여 사이트 콘텐츠 업데이트 빈도가 낮으므로 웹 접근성 관리시 개선 효과가 클 것으로 판단된다.`
    }, {
        code: 'R',
        name: 'R.예술, 스포츠 및 여가관련 서비스업',
        count: '74',
        score: '65.6',
        level: '미흡',
        info: `23개 조사 항목 에서는 '키보드 사용 보장', '반복 영역 건너뛰기', '표의 구성', '적절한 대체 텍스트 제공' 항목이 낮은 점수를 받았다.<br/>
        스포츠 및 여가관련 서비스업의 사이트에서는 시각적 콘텐츠에 대한 설명과 도표에 대한 정보 제공 등이 미흡한 것으로 나타났다.<br/>
        여가관련 서비스업은 노인과 장애인의 이용 빈도가 낮을 것으로 예상되어 웹 접근성 개선 의지 또한 낮을 것으로 판단된다.`
    },
];
const viewStyles = document.querySelectorAll('.cor-analysis.byScore ul li')
const iframes = document.querySelectorAll('.code-analysis iframe');

window.addEventListener('load', () => {

    // loading page
    loading.style.display = 'none';

    // cover interaction
    window.addEventListener('scroll', (e) => {
        let val = window.scrollY;
        cirs[0].style.top = 150 + val * -0.5 + 'px';
        cirs[1].style.bottom = 100 + val * -0.08 + 'px';
        cirs[2].style.top = 200 + val * -0.2 + 'px';
        cirs[3].style.top = 100 + val * -0.2 + 'px';
    })

    // 업종 분석 결과
    codes.forEach((elem, idx) => {
        elem.addEventListener('click', (e) => {
            let code = code_array[idx];

            graphInfo.querySelector('h5').innerHTML = `<span style="color: var(--code-${code.code})">${code.name}</span>의 조사된 사이트는 총 ${code.count}개이며, 평균점수는 ${code.score}점으로 ${code.level}하다.`;

            iframes[0].src = `./charts/${code.code}_result_plot.html`;
            iframes[1].src = `./charts/${code.code}_score_plot.html`;
            iframes[2].src = `./charts/${code.code}_prin_plot.html`;

            codeInfo.innerHTML = code.info;
        })
    });

    let style = 1;
    // 업종 별 점수 분포 보기 방법
    viewStyles.forEach((elem, idx) => {
        elem.addEventListener('click', (e) => {
            elem.classList.add('active');
            viewStyles[style].classList.remove('active');
            style = idx;
            document.querySelector('.cor-analysis.byScore iframe').src = `./charts/code_plot_${idx + 1}.html`;
        })
    });

});
