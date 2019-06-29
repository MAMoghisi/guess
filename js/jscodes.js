function howplay() {
    alert("با شروع بازی یک عدد سه رقمی توسط ما انتخاب میشود و شما باید حدس بزنید این عدد چند است.شما 100 امتیاز دارید و برای هر حدس غلط 10 امتیاز از شما کسر میشود...موفق باشید...")
}
function start() {
    var randomnumber = 100 + Math.floor(Math.random() * 900);
    document.getElementById("number").value = randomnumber;
    document.getElementById("score").value = 100;
    document.getElementById("start").style.display = "none";
    document.getElementById("again").style.display = "block";
}
function again() {
    var randomnumber = 100 + Math.floor(Math.random() * 900);
    document.getElementById("number").value = randomnumber;
    document.getElementById("score").value = 100;
    document.getElementById("guess").value = "";
    document.getElementById("result").value = "";
}
function check() {
    var number = document.getElementById("number").value;
    if (number == ""){
        alert("ابتدا روی شروع بازی کلیک کنید")
    }else {
        var score = document.getElementById("score").value;
        var guessnum = parseInt(document.getElementById("guess").value);
        var number = document.getElementById("number").value;
        if (score <= 0) {
            alert("شما باختید");
            window.location = window.location;
        }
        if (guessnum > number) {
            document.getElementById("result").value = "برو پایین تر";
            var score = parseInt(document.getElementById("score").value);
            document.getElementById("score").value = score -= 10;

        } else if (number > guessnum) {
            document.getElementById("result").value = "برو بالا تر";
            var score = parseInt(document.getElementById("score").value);
            document.getElementById("score").value = score -= 10;
        } else if (guessnum == number) {
            var score = document.getElementById("score").value;
            alert("   شما با امتیاز   " + score + "    برنده شدید   ")
        } else {
            alert("لطفا یک عدد وارد کنید")
        }
    }
}
function help() {
    var number = document.getElementById("number").value;
    if (number == ""){
        alert("شما هنوز بازی را شروع نکرده اید")
    }else {
        document.getElementById("helper").style.display = "block";
        alert("زوج یا فرد = کسر 20 امتیاز .......مجموع ارقام =کسر 40 امتیاز .......رقم سمت راست = کسر 40 امتیاز");
    }
}
function rightnum() {
    var score = document.getElementById("score").value;
    if (score < 40){
        alert("امتیاز برای راهنمایی ندارید");
    }else {
        var number = parseInt(document.getElementById("number").value);
        var right = number%10 ;
        alert(right);
        var score = parseInt(document.getElementById("score").value);
        document.getElementById("score").value = score -= 40;
        document.getElementById("helper").style.display = "none";
    }
}
function plus() {
    var score = document.getElementById("score").value;
    if (score < 40){
        alert("امتیاز برای راهنمایی ندارید");
    }else {
        var number = document.getElementById("number").value;
        var first = parseInt(number.slice(0,1));
        var second = parseInt(number.slice(1,2));
        var third = parseInt(number.slice(2,3));
        alert(first + second + third)
        var score = document.getElementById("score").value;
        document.getElementById("score").value = score -= 40;
        document.getElementById("helper").style.display = "none";
    }
}
function evenodd() {
    var score = document.getElementById("score").value;
    if (score < 20){
        alert("امتیاز برای راهنمایی ندارید");
    }else {
        var number = parseInt(document.getElementById("number").value);
        if (number%2 == 0) {
            alert("عدد زوج است")
        }else {
            alert("عدد فرد است")
        }
        var score = parseInt(document.getElementById("score").value);
        document.getElementById("score").value = score -= 20;
        document.getElementById("helper").style.display = "none";
    }
}

