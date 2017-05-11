// JavaScript File
//Creates variables ans stores html
var bgColor = document.getElementById("bgColor");
var colorChangeBtn = document.getElementById("colorChangeBtn");


colorChangeBtn.addEventListener("click", function (){
    document.body.style.backgroundColor = bgColor.value;
});


