function adjustFontSize() {
  const width = window.innerWidth;
  if (width < 600) {
    document.body.style.fontSize = "12px";
  } else if (width >= 600 && width < 1024) {
    document.body.style.fontSize = "14px";
  } else {
    document.body.style.fontSize = "16px";
  }
}

// 初始化调整
adjustFontSize();

// 监听窗口大小变化
window.addEventListener("resize", adjustFontSize);