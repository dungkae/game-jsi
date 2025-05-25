document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
  //Lấy thông tin người dùng đã đăng nhập từ localStorage. Thông tin này thường được lưu dưới dạng chuỗi JSON.

  if (loggedInUser) { //Nếu loggedInUser không phải null, nghĩa là có người dùng đã đăng nhập.
    const logoutItem = document.createElement("li");
    const logoutButton = document.createElement("button");
    logoutButton.textContent = "Đăng xuất";
    logoutButton.style.cursor = "pointer"; //thêm css
    logoutButton.style.padding = "10px 15px";
    logoutButton.style.border = "none";
    logoutButton.style.borderRadius = "5px";
    logoutButton.style.fontSize = "16px";
    logoutButton.style.fontWeight = "bold";
    logoutButton.style.background = "red";
    logoutButton.style.color = "white";
    logoutButton.style.transition = "background 0.3s"; //Khi đổi màu, hiệu ứng kéo dài 0.3 giây.

//Xử lý sự kiện khi nhấn nút "Đăng xuất"
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("loggedInUser"); // Xóa thông tin đăng nhập
      alert("Bạn đã đăng xuất thành công!");
      window.location.href = "login.html"; // Chuyển về trang đăng nhập
    });

    logoutButton.addEventListener("mouseover", function () {
      logoutButton.style.opacity = "0.8"; // Khi chuột di vào nút, độ trong suốt (opacity) giảm xuống 0.8
    });
    logoutButton.addEventListener("mouseout", function () {
      logoutButton.style.opacity = "1"; //Khi chuột rời khỏi nút, độ trong suốt trở lại 1
    });

    logoutItem.appendChild(logoutButton); // thêm nút đăng xuất vào li
    navbar.querySelector("ul").appendChild(logoutItem); // thêm li vào ul trong thanh nav
  }
});
