// 헬스 페이지 js 코드

// 스크롤 애니메이션 함수
function initScrollAnimation() {
  // 애니메이션을 적용할 요소들 선택
  const animateElements = document.querySelectorAll(
    ".scroll_animate, .banner_animate"
  );

  // Intersection Observer 옵션 설정
  const observerOptions = {
    threshold: 0.1, // 요소가 10% 보일 때 트리거
    rootMargin: "0px 0px -50px 0px", // 아래쪽 50px 여유를 두고 트리거
  };

  // Intersection Observer 생성
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 요소가 화면에 보이면 애니메이션 클래스 추가
        entry.target.classList.add("animate_in");
      }
    });
  }, observerOptions);

  // 모든 애니메이션 요소에 observer 적용
  animateElements.forEach((element) => {
    observer.observe(element);
  });
}

// DOM이 로드되면 스크롤 애니메이션 초기화
document.addEventListener("DOMContentLoaded", function () {
  initScrollAnimation();
});
