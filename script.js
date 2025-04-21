// js phần account
//js khi click vào icon sẽ hiện menu
const accountIcon = document.querySelector(".accountIcon");
const accountMenu = document.querySelector(".accountMenu");
accountIcon.addEventListener("click", function () {
  accountMenu.style.display =
    accountIcon.style.display === "block" ? "none" : "block";
});
//js để khi click ra ngoài icon menu sẽ mất
document.addEventListener("click", function (event) {
  if (
    !accountIcon.contains(event.target) &&
    !accountMenu.contains(event.target)
  ) {
    accountMenu.style.display = "none";
  }
});
// hết phần account icon
// Slide tự động
var slide = document.getElementsByClassName("slide")[0];
var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
var Img = ChuyenSlide.getElementsByTagName("img");
var Chuyen = 0;

function capNhatKichThuoc() {
  return slide.clientWidth;
}

function Next() {
  var KichThuoc = capNhatKichThuoc();
  var Max = KichThuoc * Img.length;

  if (Chuyen < Max - KichThuoc) {
    Chuyen += KichThuoc;
  } else {
    Chuyen = 0;
  }
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
}

function Back() {
  var KichThuoc = capNhatKichThuoc();
  var Max = KichThuoc * Img.length;

  if (Chuyen === 0) {
    Chuyen = Max - KichThuoc;
  } else {
    Chuyen -= KichThuoc;
  }
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
}

// Tự động chuyển slide sau mỗi 10 giây
setInterval(Next, 10000);

// Khi thay đổi kích thước cửa sổ, cập nhật lại slide
window.addEventListener("resize", function () {
  var KichThuoc = capNhatKichThuoc();
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
});

//hamburger menu
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".inner-menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
//thanh tìm kiếm
function toggleSearch() {
  const box = document.getElementById("searchBox");
  box.classList.toggle("active");
}
