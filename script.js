let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let keyImg = document.getElementsByClassName("key-metrics-img");
let keyLine = document.getElementsByClassName("key-line");
let keyCount = document.getElementsByClassName("key-count");

btn1.addEventListener("click", () => {
  keyLine[0].style.alignItems = "flex-start";
  btn1.style.border = "2px solid #b40eba";
  btn2.style.border = "none";
  btn3.style.border = "none";
  keyImg[0].innerHTML =
    "&nbsp;&nbsp;&nbsp;<i class='fa-solid fa-cart-shopping key-img'></i>&nbsp;&nbsp;&nbsp;";
  keyCount[0].innerHTML = "<h1><b>85</b> %</h1><h3>Reduction in out of stock</h3>";
    
});
btn2.addEventListener("click", function () {
  keyLine[0].style.alignItems = "center";
  btn1.style.border = "none";
  btn2.style.border = "2px solid #b40eba";
  btn3.style.border = "none";
  keyImg[0].innerHTML =
    "&nbsp;&nbsp;&nbsp;<i class='fa-solid fa-money-bill'></i>&nbsp;&nbsp;&nbsp;";
    keyCount[0].innerHTML =
      "<h1><b>25</b> Days</h1><h3>Reduction in cash recovery time</h3>";
});
btn3.addEventListener("click",function(){
    keyLine[0].style.alignItems = "flex-end";
    btn1.style.border = "none";
      btn2.style.border = "none";
  btn3.style.border = "2px solid #b40eba";
  keyImg[0].innerHTML =
    "&nbsp;&nbsp;&nbsp;<i class='fa-solid fa-sack-dollar'></i>&nbsp;&nbsp;&nbsp;";
    keyCount[0].innerHTML =
    "<h1><b>15</b> %</h1><h3>Growth in Revenue</h3>";
})