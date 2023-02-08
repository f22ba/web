
/*world表示切替 textareaの文字を1-1に上書き*/
function worldMove1() {
    document.getElementById("world_text").value = "1-1";
}

/*world表示切替 textareaの文字を2-1に上書き*/
function worldMove2() {
    document.getElementById("world_text").value = "2-1";
}

/*world表示切替 textareaの文字を3-1に上書き*/
function worldMove3() {
    document.getElementById("world_text").value = "3-1";
}
/*1枚コイン textareaの文字を数値、1加算、数値を文字*/
function countCoin() {
    let num = document.getElementById("coin_text").value;
    num = parseInt(num,10) + 1;
    let numStr = num.toString(10)
    music = new Audio("se/coin.mp3");
    music.play();
    document.getElementById("coin_text").value = numStr;
}
/*10枚コイン textareaの文字を数値、10加算、数値を文字
効果音も10枚用のを使用*/
function countCoin10() {
    // let num = document.getElementById("coin_text").value;
    // num = parseInt(num,10) + 10;
    // let numStr = num.toString(10);
    // document.getElementById("coin_text").value = numStr;
    setTimeout(countCoin,100);
    setTimeout(countCoin,200);
    setTimeout(countCoin,300);
    setTimeout(countCoin,400);
    setTimeout(countCoin,500);
    setTimeout(countCoin,600);
    setTimeout(countCoin,700);
    setTimeout(countCoin,800);
    setTimeout(countCoin,900);
    setTimeout(countCoin,1000);
    music = new Audio("se/coins.mp3");
    music.play();
    
}

/*引数に要素のid指定してそのidの要素(coinのimg)をhiddenする*/
function hiddenCoin(id) {
    // document.getElementById("coinImg1").style.visibility = "hidden";
    document.getElementById(id).style.visibility = "hidden";
}