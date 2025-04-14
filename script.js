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
//phần slide show
var KichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
var Img = ChuyenSlide.getElementsByTagName("img");
var Max = KichThuoc * Img.length;
Max -= KichThuoc;
var Chuyen = 0;
//chuyển sang phải
function Next() {
  if (Chuyen < Max) Chuyen += KichThuoc;
  else Chuyen = 0;

  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
}
//chuyển sang trái
function Back() {
  if (Chuyen == 0) Chuyen = Max;
  else Chuyen -= KichThuoc;
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
}
setInterval(function () {
  Next();
}, 4000);
