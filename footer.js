// === FOOTER ACCORDION ===

// Mốc mobile / desktop
const breakpoint = 768;

const triggers = document.querySelectorAll('.footer-accordion-trigger');

// Mở/đóng accordion
triggers.forEach(function(trigger) {

  trigger.addEventListener('click', function () {

    // Nếu là desktop thì không kích hoạt
    if (window.innerWidth >= breakpoint) return;

    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    // Lấy phần nội dung tương ứng
    const contentId = trigger.getAttribute('aria-controls');
    const content = document.getElementById(contentId);

    // Đổi trạng thái button
    trigger.setAttribute('aria-expanded', !isOpen);

    // Mở/đóng nội dung
    if (content) {
      if (isOpen) {
        content.classList.remove('is-open');
      } 
      else {
        content.classList.add('is-open');
      }
    }
  });
});


// Reset trạng thái khi bị thay đổi kích thước màn hình
window.addEventListener('resize', function () {

  const isDesktop = window.innerWidth >= breakpoint;

  triggers.forEach(function(trigger) {

    const contentId = trigger.getAttribute('aria-controls');
    const content = document.getElementById(contentId);

    if (isDesktop) {
      trigger.setAttribute('aria-expanded', 'true');
      if (content)
        content.classList.add('is-open');
    } 
    else {
      trigger.setAttribute('aria-expanded', 'false');
      if (content)
        content.classList.remove('is-open');
    }
  });
});


// Khởi chạy
window.dispatchEvent(new Event('resize'));
