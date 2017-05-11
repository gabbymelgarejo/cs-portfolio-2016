var sk8 = document.getElementById("sk8");
var ub = document.getElementById("ub");
var blk = document.getElementById("blk");
var con = document.getElementById("con");
var shoename = document.getElementById("shoename");
var shoeprice = document.getElementById("shoeprice");
var shoebrand = document.getElementById("shoebrand");
var overview = document.getElementById("overview");

sk8.addEventListener("click", function(){
    shoename.innerHTML = "Sk8 Hi";
    shoeprice.innerHTML = "$65";
    shoebrand.innerHTML = "Vans";
    overview.innerHTML = "The Sk8-Hi, Vans Legendary lace-up high top inspired by the classic Old Skool, has a durable canvas and suede upper, asupportive padded ankle, and Vans vulcanized signature Waffle Outsole.";
});

ub.addEventListener("click",function(){
    shoename.innerHTML = "Ultra Boost";
    shoeprice.innerHTML = "$300-$375";
    shoebrand.innerHTML = "Adidas";
    overview.innerHTML = "The adidas Ultra Boost 3.0 “Triple Black” features a full blackprimeknit upper with new upgraded striped detailing, as well as a black boost midsole. Black laces, a black cage, black lining and a black outsole.";
});

blk.addEventListener("click",function(){
    shoename.innerHTML = "Air Jordan 1's";
    shoeprice.innerHTML = "$60-$400";
    shoebrand.innerHTML = "Nike Air Jordan";
    overview.innerHTML = "The Air Jordan I was the first shoe to be worn in the NBA with multiple colors. Peter Moore was the man behind the Air Jordan 1 (and alsohelped design the Air Jordan II). When Michael Jordan first looked at the AJ I, his response was “I’m not wearing that shoe. I’ll look like a clown”.With time, the shoe slowly grew on him. The original Air Jordan 1 retailed at $65.00.";
});

con.addEventListener("click",function(){
   shoename.innerHTML = "Chuck Taylor"
   shoeprice.innerHTML = "$35-$75";
   shoebrand.innerHTML = "Converse";
   overview.innerHTML = "The Converse Chuck Taylor All Star is the one that started it allfor Converse. When it comes to sneakers, there’s nothing more pure than a canvas upper and a vulcanized rubber sole. This is the sneaker that spawned countless imitators, with its star-centered patch, rubber toe cap, toe bumper and striping.";
});