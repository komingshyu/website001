// 頁面互動邏輯
document.getElementById("cta-btn").addEventListener("click", function() {
  this.textContent = "太棒了！";
  this.style.background = "#00BFA5";
  this.style.transform = "scale(1.05)";
  setTimeout(function() {
    var btn = document.getElementById("cta-btn");
    btn.textContent = "開始探索";
    btn.style.background = "";
    btn.style.transform = "";
  }, 1500);
});

// 導航連結平滑滾動
document.querySelectorAll(".nav-links a").forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    var msg = document.createElement("div");
    msg.textContent = "導航到: " + this.textContent;
    msg.style.cssText = "position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#00E676;color:#0f172a;padding:8px 20px;border-radius:8px;font-weight:600;z-index:9999;animation:slideUp 0.3s ease";
    document.body.appendChild(msg);
    setTimeout(function() { msg.remove(); }, 2000);
  });
});