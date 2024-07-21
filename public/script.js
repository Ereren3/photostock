var ctg,flw='';
var likeID = '';
var srch=0;

function category(ctg) {
    if (ctg==1) {
        document.getElementById("baslik-enler").style.display = "none";
        document.getElementById("baslik-oyun").style.display = "block";
        document.getElementById("baslik-grafik").style.display = "none";
        document.getElementById("baslik-moda").style.display = "none";
        document.getElementById("baslik-mimari").style.display = "none";
        document.getElementById("baslik-xd").style.display = "none";
        document.getElementById("enler").style.display = "none";
        document.getElementById("oyun").style.display = "block";
        document.getElementById("grafik").style.display = "none";
        document.getElementById("moda").style.display = "none";
        document.getElementById("mimari").style.display = "none";
        document.getElementById("xd").style.display = "none";
    }
    else if (ctg==2) {
        document.getElementById("baslik-enler").style.display = "none";
        document.getElementById("baslik-oyun").style.display = "none";
        document.getElementById("baslik-grafik").style.display = "block";
        document.getElementById("baslik-moda").style.display = "none";
        document.getElementById("baslik-mimari").style.display = "none";
        document.getElementById("baslik-xd").style.display = "none";
        document.getElementById("enler").style.display = "none";
        document.getElementById("oyun").style.display = "none";
        document.getElementById("grafik").style.display = "block";
        document.getElementById("moda").style.display = "none";
        document.getElementById("mimari").style.display = "none";
        document.getElementById("xd").style.display = "none";
    }
    else if (ctg==3) {
        document.getElementById("baslik-enler").style.display = "none";
        document.getElementById("baslik-oyun").style.display = "none";
        document.getElementById("baslik-grafik").style.display = "none";
        document.getElementById("baslik-moda").style.display = "block";
        document.getElementById("baslik-mimari").style.display = "none";
        document.getElementById("baslik-xd").style.display = "none";
        document.getElementById("enler").style.display = "none";
        document.getElementById("oyun").style.display = "none";
        document.getElementById("grafik").style.display = "none";
        document.getElementById("moda").style.display = "block";
        document.getElementById("mimari").style.display = "none";
        document.getElementById("xd").style.display = "none";
    }
    else if (ctg==4) {
        document.getElementById("baslik-enler").style.display = "none";
        document.getElementById("baslik-oyun").style.display = "none";
        document.getElementById("baslik-grafik").style.display = "none";
        document.getElementById("baslik-moda").style.display = "none";
        document.getElementById("baslik-mimari").style.display = "block";
        document.getElementById("baslik-xd").style.display = "none";
        document.getElementById("enler").style.display = "none";
        document.getElementById("oyun").style.display = "none";
        document.getElementById("grafik").style.display = "none";
        document.getElementById("moda").style.display = "none";
        document.getElementById("mimari").style.display = "block";
        document.getElementById("xd").style.display = "none";
    }
    else if (ctg==5) {
        document.getElementById("baslik-enler").style.display = "none";
        document.getElementById("baslik-oyun").style.display = "none";
        document.getElementById("baslik-grafik").style.display = "none";
        document.getElementById("baslik-moda").style.display = "none";
        document.getElementById("baslik-mimari").style.display = "none";
        document.getElementById("baslik-xd").style.display = "block";
        document.getElementById("enler").style.display = "none";
        document.getElementById("oyun").style.display = "none";
        document.getElementById("grafik").style.display = "none";
        document.getElementById("moda").style.display = "none";
        document.getElementById("mimari").style.display = "none";
        document.getElementById("xd").style.display = "block";
    }
}

function sign() {
    window.location.href = "/login"
}

function follow(flw) {

    alert(flw + " konusunu takip ettiniz.");
}

function like(likeID) {
    document.getElementById(likeID).style.backgroundImage = "url('heart+.png')";
}

var flscrn='';
function fullscreen(flscrn) {
    document.getElementById("fullscreen-img").src = "/article/"+flscrn+".jpg";
    document.getElementById("fullscreen").style.display = "block";
}

function flscrn_close() {
    document.getElementById("fullscreen").style.display = "none";
}