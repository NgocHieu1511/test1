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
var KichThuoc = slide.clientWidth;
var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
var Img = ChuyenSlide.getElementsByTagName("img");
var Max = KichThuoc * Img.length;
var Chuyen = 0;

function Next() {
  if (Chuyen < Max - KichThuoc) {
    Chuyen += KichThuoc;
  } else {
    Chuyen = 0;
  }
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
}

function Back() {
  if (Chuyen === 0) {
    Chuyen = Max - KichThuoc;
  } else {
    Chuyen -= KichThuoc;
  }
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
}

setInterval(Next, 10000);
