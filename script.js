/* Mobile iOS — data/logic adapted from PC ../script.js */
(function () {
  'use strict';

  const CORE_AREAS = {
    hr: {
      title: '인적자원관리 (HR)',
      desc: '인재 채용·육성·평가와 노사관계를 설계해 조직 경쟁력을 높이는 분야입니다.',
      tags: ['인적자원관리', '고용관계', '글로벌인사시스템']
    },
    finance: {
      title: '재무관리 (Finance)',
      desc: '자금 조달, 재무제표 분석, 금융기관·파생상품 운용으로 기업 가치를 높입니다.',
      tags: ['회계와경영', '경영분석', '금융기관경영', '파생금융상품']
    },
    mis: {
      title: '경영정보 · 빅데이터 (MIS)',
      desc: '경영 데이터 처리와 빅데이터 분석으로 과학적 의사결정을 수행합니다.',
      tags: ['경영자료처리론', '경영빅데이터분석과활용', 'MCD 데이터·AI']
    },
    marketing: {
      title: '마케팅관리 (Marketing)',
      desc: '소비자·시장 분석으로 브랜드 전략과 상품기획(MD)을 설계합니다.',
      tags: ['마케팅(전필)', '마케팅조사론', '2026 상품혁신상']
    },
    strategy: {
      title: '전략 · 생산운영관리',
      desc: '글로벌 경쟁전략, 생산·공급망 최적화, 기술경영과 벤처창업을 배웁니다.',
      tags: ['생산운영관리(전필)', '글로벌전략경영', '기술경영', '벤처경영']
    }
  };

  const COURSES = [
    { grade: '1', type: '전공선택', name: '경영자료처리론', credit: '3학점', desc: '경영 기초 데이터 정리·분석 입문' },
    { grade: '1', type: '전공선택', name: '비즈니스매너', credit: '3학점', desc: '실무 커뮤니케이션·비즈니스 에티켓' },
    { grade: '1', type: '전공선택', name: '회계와경영', credit: '3학점', desc: '기업 회계 원리와 재무정보 이해' },
    { grade: '2', type: '전공필수', name: '마케팅', credit: '3학점', desc: '시장 분석, 브랜드·마케팅 핵심 전략' },
    { grade: '2', type: '전공선택', name: '경영분석', credit: '3학점', desc: '재무제표 기반 기업 수익·안정성 진단' },
    { grade: '2', type: '전공선택', name: '글로벌경영', credit: '3학점', desc: '다국적 기업 해외 진출·글로벌 전략' },
    { grade: '2', type: '전공선택', name: '인적자원관리', credit: '3학점', desc: '채용·평가·보상 등 인사관리 핵심' },
    { grade: '3', type: '전공필수', name: '생산운영관리', credit: '3학점', desc: '생산 프로세스·품질·공급망 최적화' },
    { grade: '3', type: '전공선택', name: '글로벌전략경영', credit: '3학점', desc: '글로벌 시장 장기 경쟁우위 수립' },
    { grade: '3', type: '전공선택', name: '금융기관경영', credit: '3학점', desc: '은행·증권·보험 리스크 관리 실무' },
    { grade: '3', type: '전공선택', name: '마케팅조사론', credit: '3학점', desc: '설문·통계 기반 소비자 인사이트 도출' },
    { grade: '3', type: '전공선택', name: '사회적경제실무', credit: '3학점', desc: 'ESG 경영·사회적기업 비즈니스 모델' },
    { grade: '3', type: '전공선택', name: '고용관계', credit: '3학점', desc: '노사관계·노동법 기초와 조직문화' },
    { grade: '3', type: '전공선택', name: '현장실습(2)', credit: '3학점', desc: '협약 기업 단기 실무 현장 경험' },
    { grade: '4', type: '전공선택', name: '경영빅데이터분석과활용', credit: '3학점', desc: '빅데이터 분석·시각화 경영 적용' },
    { grade: '4', type: '전공선택', name: '기술경영', credit: '3학점', desc: '첨단 기술 혁신과 비즈니스 모델 연계' },
    { grade: '4', type: '전공선택', name: '기업가정신과벤처경영', credit: '3학점', desc: '스타트업 기획·사업계획·투자 유치' },
    { grade: '4', type: '전공선택', name: '파생금융상품', credit: '3학점', desc: '선물·옵션 가격결정과 리스크 헤지' },
    { grade: '4', type: '전공선택', name: '원가관리회계', credit: '3학점', desc: '원가 계산 및 내부 경영 의사결정' },
    { grade: '4', type: '전공선택', name: '글로벌인사시스템', credit: '3학점', desc: '글로벌 기업 다문화 인력 관리' },
    { grade: '4', type: '전공선택', name: '현장종합실습(2)', credit: '15학점', desc: '한 학기 장기 기업 상주 실전 실습' }
  ];

  const CONVERGENCE = {
    mcd: {
      title: '모듈형 컨버전스 학사학위과정 (MCD)',
      desc: '직무 중심 소단위 모듈(9~15학점)을 자율 선택해 36학점 이상 이수하면 추가 학사학위를 취득합니다.',
      points: ['M형 15개 + MC형 14개', '스마트팩토리(경영 참여)', '데이터·AI 과정', '2개 이상 학위 가능']
    },
    pension: {
      title: '연금관리 공유전공 (연금관리학사)',
      desc: '국민연금공단 전주 이전에 특화된 융합과정으로 공공기관·금융권 진출에 최적화되어 있습니다.',
      points: ['국민연금공단·기금기관 특화', '전북 지역인재 채용 유리', 'CFP·AFPK·보험계리사 연계']
    },
    bigdata: {
      title: '빅데이터공학 · 글로벌재경 공유전공',
      desc: '경영학에 AI·데이터 사이언스(공학사) 또는 국제통상·금융(경제학사)을 결합합니다.',
      points: ['빅데이터공학(공학사)', '글로벌재경(경제학사)', '복수·부전공 자유 신청']
    }
  };

  const CAREERS = {
    corporate: {
      title: '대기업 · 중견 · 글로벌 기업',
      desc: '전략기획, 마케팅, 상품기획(MD), 인사, 재무 등 핵심 직무로 진출합니다.',
      roles: ['전략기획', '마케팅·홍보', '상품기획(MD)', '인사(HR)', '재무·회계', '해외영업'],
      certs: ['사회조사분석사 2급', 'ADsP', '컴퓨터활용능력', '전산세무·회계'],
      support: 'KSNU 우선채용지원제도(서류 가산점·면제), 15학점 현장종합실습, 새만금 산학협력'
    },
    public: {
      title: '금융기관 · 국민연금공단 및 공공기관',
      desc: '시중은행·증권·자산운용사와 전북 혁신도시 공공기관 지역인재 채용을 공략합니다.',
      roles: ['국민연금공단', '건강보험·근로복지공단', '기술·신용보증기금', '한국자산관리공사', '시중은행·증권사'],
      certs: ['CFP · AFPK', '전산세무 1급 · TAT 1급', '한국사·KBS한국어', '투자자산운용사'],
      support: '연금관리 공유전공(연금관리학사), 금융기관경영·파생금융상품 교과, 자격증 비교과'
    },
    license: {
      title: '전문자격사 및 행정·통계 공무원',
      desc: '회계·재무·고용관계 전공과 전문자격증 학사 운영을 바탕으로 전문직·공무원에 진출합니다.',
      roles: ['공인회계사(CPA)', '세무사(CTA)', '공인노무사', '보험계리사', '일반행정·세무·통계 공무원'],
      certs: ['CPA · 세무사 · 노무사', '보험계리사', '재경관리사', '정보처리기사'],
      support: '경영특성화대학 전문자격증 학사 운영, 전공 자격증 특강, 교수 1:1 멘토링'
    },
    startup: {
      title: '벤처창업 & 대학원 진학',
      desc: '스타트업·소셜벤처 창업부터 일반대학원(석·박사) 및 경영행정대학원 진학까지 지원합니다.',
      roles: ['스타트업 창업가', '소셜벤처·ESG 기업가', '경영컨설턴트', '일반·경영행정대학원'],
      certs: ['창업보육전문매니저', '경영지도사', '사업계획·IR 실무'],
      support: '창업지원단(2024~2026 전북형 창업패키지 연속 선정), 기업가정신과벤처경영 교과'
    }
  };

  const QUIZ_QUESTIONS = [
    {
      q: '평소 가장 흥미 있는 활동은?',
      options: [
        { text: '트렌드 분석 · 홍보/상품 기획', track: 'corporate' },
        { text: '경제 뉴스 · 금융/자산운용', track: 'public' },
        { text: '숫자·규칙 분석 · 자격증', track: 'license' },
        { text: '새 아이디어로 프로젝트 창업', track: 'startup' }
      ]
    },
    {
      q: '대학에서 꼭 해보고 싶은 경험은?',
      options: [
        { text: '기업 현장실습 · 상품기획 대회', track: 'corporate' },
        { text: '연금관리 공유전공으로 공공 준비', track: 'public' },
        { text: '전공 심화 + 전문자격증', track: 'license' },
        { text: '창업지원단으로 아이템 론칭', track: 'startup' }
      ]
    },
    {
      q: '졸업 후 가장 기대되는 모습은?',
      options: [
        { text: '글로벌 기업 마케팅·전략 리더', track: 'corporate' },
        { text: '국민연금공단·금융권 전문가', track: 'public' },
        { text: '회계사·세무사·노무사 등 전문직', track: 'license' },
        { text: '기술+경영 창업가·컨설턴트', track: 'startup' }
      ]
    }
  ];

  const QUIZ_RECOMMENDATIONS = {
    corporate: {
      title: '추천: 글로벌 기업 전략 · 마케팅 · 데이터',
      summary: '트렌드 감각과 데이터 분석력을 살리는 기업 직무가 잘 맞아요!',
      courses: '마케팅 · 마케팅조사론 · 경영빅데이터분석과활용 · 현장종합실습',
      extra: 'MCD "데이터 분석과 인공지능 과정" 추천'
    },
    public: {
      title: '추천: 국민연금공단 · 금융 · 공공기관',
      summary: '금융·자산운용과 안정적 공공 커리어에 강점이 있어요!',
      courses: '경영분석 · 금융기관경영 · 파생금융상품 · 회계와경영',
      extra: '연금관리 공유전공 병행 추천'
    },
    license: {
      title: '추천: 전문자격사 & 공무원',
      summary: '체계적 분석력으로 전문직·공직에서 빛나는 타입이에요!',
      courses: '회계와경영 · 원가관리회계 · 경영분석 · 고용관계',
      extra: '전문자격증 학사 + 비교과 특강 추천'
    },
    startup: {
      title: '추천: 벤처창업 · ESG 컨설턴트',
      summary: '도전정신과 실행력으로 새 가치를 만드는 창업가형이에요!',
      courses: '기업가정신과벤처경영 · 기술경영 · 사회적경제실무',
      extra: '전북형 창업패키지 + MCD 스마트팩토리 추천'
    }
  };

  const state = {
    activePillar: 'features',
    activeCoreArea: 'hr',
    selectedGrade: 'all',
    selectedConv: 'mcd',
    selectedCareer: 'corporate',
    quizStep: 0,
    quizScores: { corporate: 0, public: 0, license: 0, startup: 0 },
    chartInstance: null
  };

  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function setActivePillar(key) {
    state.activePillar = key;
    document.querySelectorAll('.panel').forEach((p) => {
      p.classList.toggle('active', p.id === 'panel-' + key);
    });
    document.querySelectorAll('[data-pillar-nav]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.pillarNav === key);
    });
    if (key === 'comparison') renderTuitionChart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderCoreArea() {
    const data = CORE_AREAS[state.activeCoreArea];
    if (!data) return;
    document.getElementById('coreDetailTitle').textContent = data.title;
    document.getElementById('coreDetailDesc').textContent = data.desc;
    document.getElementById('coreTagWrap').innerHTML =
      data.tags.map((t) => '<span>' + t + '</span>').join('');
    document.querySelectorAll('#coreAreaChips .seg-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.core === state.activeCoreArea);
    });
  }

  function renderCourses() {
    const grid = document.getElementById('courseGrid');
    if (!grid) return;
    const list = state.selectedGrade === 'all'
      ? COURSES
      : COURSES.filter((c) => c.grade === state.selectedGrade);
    grid.innerHTML = list.map((c) => {
      const badge = c.type === '전공필수' ? 'badge-req' : 'badge-elec';
      return (
        '<article class="course-card">' +
          '<div class="course-meta">' +
            '<span class="' + badge + '">' + c.type + '</span>' +
            '<span class="badge-grade">' + c.grade + '학년 · ' + c.credit + '</span>' +
          '</div>' +
          '<h4 class="course-name">' + c.name + '</h4>' +
          '<p class="course-desc">' + c.desc + '</p>' +
        '</article>'
      );
    }).join('');
    document.querySelectorAll('#gradeFilterBar .seg-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.grade === state.selectedGrade);
    });
  }

  function renderConvergence() {
    const data = CONVERGENCE[state.selectedConv];
    const el = document.getElementById('convDetail');
    if (!data || !el) return;
    el.innerHTML =
      '<h4>' + data.title + '</h4>' +
      '<p>' + data.desc + '</p>' +
      '<div class="conv-points">' +
        data.points.map((p) => '<span class="conv-pill">' + p + '</span>').join('') +
      '</div>';
    document.querySelectorAll('#convTabs .seg-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.conv === state.selectedConv);
    });
  }

  function renderCareer() {
    const data = CAREERS[state.selectedCareer];
    const card = document.getElementById('careerDetailCard');
    if (!data || !card) return;
    card.innerHTML =
      '<h3>' + data.title + '</h3>' +
      '<p>' + data.desc + '</p>' +
      '<div class="career-section-label">주요 진출 직무</div>' +
      '<div class="badge-group">' + data.roles.map((r) => '<span class="info-badge">' + r + '</span>').join('') + '</div>' +
      '<div class="career-section-label">추천 자격증</div>' +
      '<div class="badge-group">' + data.certs.map((c) => '<span class="info-badge">' + c + '</span>').join('') + '</div>' +
      '<div class="support-box"><strong>학부 지원:</strong> ' + data.support + '</div>';
    document.querySelectorAll('#careerTabs [data-career]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.career === state.selectedCareer);
    });
  }

  function renderQuiz() {
    const body = document.getElementById('quizBody');
    const badge = document.getElementById('quizProgressBadge');
    if (!body || !badge) return;

    if (state.quizStep < QUIZ_QUESTIONS.length) {
      const item = QUIZ_QUESTIONS[state.quizStep];
      badge.textContent = (state.quizStep + 1) + ' / ' + QUIZ_QUESTIONS.length;
      body.innerHTML =
        '<div class="quiz-question">' + item.q + '</div>' +
        '<div class="quiz-options">' +
          item.options.map((opt) =>
            '<button type="button" class="quiz-opt-btn" data-quiz-track="' + opt.track + '">' + opt.text + '</button>'
          ).join('') +
        '</div>';
      return;
    }

    badge.textContent = '완료';
    let best = 'corporate';
    let score = -1;
    Object.keys(state.quizScores).forEach((k) => {
      if (state.quizScores[k] > score) {
        score = state.quizScores[k];
        best = k;
      }
    });
    const rec = QUIZ_RECOMMENDATIONS[best];
    body.innerHTML =
      '<div class="quiz-result">' +
        '<h4>' + rec.title + '</h4>' +
        '<p>' + rec.summary + '</p>' +
        '<p><strong>추천 과목:</strong> ' + rec.courses + '</p>' +
        '<p><strong>추천 융합:</strong> ' + rec.extra + '</p>' +
        '<div class="quiz-actions">' +
          '<button type="button" class="btn-primary" id="applyQuizTrackBtn" data-apply-track="' + best + '">추천 트랙 보기</button>' +
          '<button type="button" class="chip-btn" id="resetQuizBtn">다시 하기</button>' +
        '</div>' +
      '</div>';
  }

  function renderTuitionChart() {
    const canvas = document.getElementById('tuitionChart');
    if (!canvas || typeof Chart === 'undefined') return;
    if (state.chartInstance) state.chartInstance.destroy();
    state.chartInstance = new Chart(canvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['군산대', '전북대', '우석대', '원광대', '전주대'],
        datasets: [{
          data: [331.8, 332.2, 635.7, 640.6, 653.4],
          backgroundColor: ['#c2ae8c', '#657691', '#b7c0cc', '#b7c0cc', '#b7c0cc'],
          borderRadius: 5,
          barThickness: 14
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            beginAtZero: true,
            max: 700,
            ticks: { font: { size: 10 }, callback: (v) => v + '만' },
            grid: { color: 'rgba(11,22,44,.07)' }
          },
          y: {
            grid: { display: false },
            ticks: { font: { size: 11, weight: '700' }, color: '#3f4d63' }
          }
        }
      }
    });
  }

  function bindEvents() {
    document.querySelectorAll('[data-pillar-nav]').forEach((btn) => {
      btn.addEventListener('click', () => setActivePillar(btn.dataset.pillarNav));
    });

    const careerToTrendsBtn = document.getElementById('careerToTrendsBtn');
    if (careerToTrendsBtn) {
      careerToTrendsBtn.addEventListener('click', () => setActivePillar('trends'));
    }

    const core = document.getElementById('coreAreaChips');
    if (core) {
      core.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-core]');
        if (!btn) return;
        state.activeCoreArea = btn.dataset.core;
        renderCoreArea();
      });
    }

    const grade = document.getElementById('gradeFilterBar');
    if (grade) {
      grade.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-grade]');
        if (!btn) return;
        state.selectedGrade = btn.dataset.grade;
        renderCourses();
      });
    }

    const conv = document.getElementById('convTabs');
    if (conv) {
      conv.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-conv]');
        if (!btn) return;
        state.selectedConv = btn.dataset.conv;
        renderConvergence();
      });
    }

    const career = document.getElementById('careerTabs');
    if (career) {
      career.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-career]');
        if (!btn) return;
        state.selectedCareer = btn.dataset.career;
        renderCareer();
      });
    }

    const quizBody = document.getElementById('quizBody');
    if (quizBody) {
      quizBody.addEventListener('click', (e) => {
        const opt = e.target.closest('[data-quiz-track]');
        if (opt) {
          const track = opt.dataset.quizTrack;
          if (state.quizScores[track] !== undefined) state.quizScores[track] += 1;
          state.quizStep += 1;
          renderQuiz();
          return;
        }
        const apply = e.target.closest('#applyQuizTrackBtn');
        if (apply) {
          state.selectedCareer = apply.dataset.applyTrack;
          renderCareer();
          document.getElementById('careerDetailCard')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
        if (e.target.closest('#resetQuizBtn')) {
          state.quizStep = 0;
          state.quizScores = { corporate: 0, public: 0, license: 0, startup: 0 };
          renderQuiz();
        }
      });
    }

    const copyBtn = document.getElementById('copyPhoneBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const phone = '063-469-4831';
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText(phone).then(() => showToast('전화번호가 복사되었습니다.')).catch(() => showToast(phone));
        } else {
          showToast(phone);
        }
      });
    }
  }

  function init() {
    renderCoreArea();
    renderCourses();
    renderConvergence();
    renderCareer();
    renderQuiz();
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
