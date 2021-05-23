
/*     let grisVacio = document.querySelector('.Gris-parrafo-vacio')
 */
window.addEventListener("load",gris);

function gris() {
    let img = "<img src='/Game/Grissinfondo.png'>";
    for (let i= 1; i <= 3; i++) {
        img+=img;
    }
    document.querySelector(".Gris_parrafo").innerHTML = img;
}