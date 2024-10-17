document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // 检查账号密码是否正确
    if (username === "root" && password === "123456") {
      // 跳转到系统主页
      window.location.href = "XITONG.html";
    } else {
      // 提示账号密码不正确
      document.getElementById("errorMessage").textContent = "用户名或密码错误。";
    }
  });