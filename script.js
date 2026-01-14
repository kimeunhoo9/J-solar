let hideTimer;

document.querySelectorAll(".menu-item").forEach(item => {
  
  const submenu = item.querySelector(".submenu");

  item.addEventListener("mouseenter", () => {
    clearTimeout(hideTimer);
    submenu.classList.add("show");
  });

  item.addEventListener("mouseleave", () => {
    hideTimer = setTimeout(() => {
      submenu.classList.remove("show");
    }, 300); // ← 커서 떼고 0.3초 뒤에 사라짐
  });

  submenu.addEventListener("mouseenter", () => {
    clearTimeout(hideTimer); // 서브메뉴에 들어오면 닫히지 않음
  });

  submenu.addEventListener("mouseleave", () => {
    hideTimer = setTimeout(() => {
      submenu.classList.remove("show");
    }, 300);
  });

});
