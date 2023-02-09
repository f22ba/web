
function push_c_btn() {
//     music = new Audio("se/jyumon.wav");
//     music.play();
    let idText = document.getElementById("id").value;
    let pwText = document.getElementById("pass").value;
    location.href = "https://f22ba.github.io/web/" + idText + "/" + pwText + ".html";
}
function se_play1() {
    // idText = document.getElementById("id").value;
    // pwText = document.getElementById("pass").value;
    music = new Audio("se/komento.mp3");
    music.play();
    setTimeout(se_play2,2000);
}
function se_play2() {
    music = new Audio("se/jyumon.wav");
    music.play();
    // idText = document.getElementById("id").value;
    // pwText = document.getElementById("pass").value;
    setTimeout(push_c_btn,2000);
} 
