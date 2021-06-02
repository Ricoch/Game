window.addEventListener("load",gris);

function gris() {
    let img = "<img src='./Grissinfondo.png'>";
    for (let i= 0; i < 6; i++) {
        img+=img;
    }
    document.querySelector(".Gris").innerHTML = img;
}