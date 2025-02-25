document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  let isDragging = false;
  let startX;
  let currentPosition = 0;

  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 340}px)`;
  }

  slider.addEventListener('mousedown', e => {
    if (window.innerWidth >= 1280) return;
    isDragging = true;
    startX = e.clientX;
    currentPosition = slider.offsetLeft;
  });

  slider.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const x = e.clientX;
    const diffX = x - startX;
    slider.style.transform = `translateX(${currentPosition + diffX}px)`;
  });

  slider.addEventListener('mouseup', () => {
    if (window.innerWidth >= 1280) return;
    isDragging = false;
    const threshold = slider.offsetWidth / 4;
    const draggedDistance = Math.abs(startX - slider.offsetLeft);

    if (draggedDistance > threshold) {
      if (startX > slider.offsetLeft) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      } else {
        currentIndex = (currentIndex + 1) % slides.length;
      }
      showSlide(currentIndex);
    } else {
      showSlide(currentIndex);
    }
  });

  slider.addEventListener('mouseleave', () => {
    if (window.innerWidth >= 1280) return;
    if (isDragging) {
      isDragging = false;
      showSlide(currentIndex);
    }
  });

  // Touch events for mobile
  slider.addEventListener('touchstart', e => {
    if (window.innerWidth >= 1280) return;
    isDragging = true;
    startX = e.touches[0].clientX;
    currentPosition = slider.offsetLeft;
  });

  slider.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const diffX = x - startX;
    slider.style.transform = `translateX(${currentPosition + diffX}px)`;
  });

  slider.addEventListener('touchend', () => {
    if (window.innerWidth >= 1280) return;
    isDragging = false;
    const threshold = slider.offsetWidth / 4;
    const draggedDistance = Math.abs(startX - slider.offsetLeft);

    if (draggedDistance > threshold) {
      if (startX > slider.offsetLeft) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      } else {
        currentIndex = (currentIndex + 1) % slides.length;
      }
      showSlide(currentIndex);
    } else {
      showSlide(currentIndex);
    }
  });

  function handleResize() {
    if (window.innerWidth < 768) {
      showSlide(currentIndex);
    } else if (window.innerWidth < 1280) {
      showSlide(currentIndex);
    } else {
      showSlide(currentIndex);
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});
