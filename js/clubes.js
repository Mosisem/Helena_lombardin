// imagens das caixas
var box_clube_1= window.document.getElementById("clube_g")
var box_clube_2=window.document.getElementById("clube_a")
var box_clube_3=window.document.getElementById("clube_o")
var box_clube_4=window.document.getElementById("clube_j")
var box_clube_5=window.document.getElementsById("clubes_c")
var box_clube_6=window.document.getElementById("clube_l")
var box_clube_7=window.document.getElementById("clube_t")

// Textos nas caixas dos clubes
var nome_1 = window.document.getElementById("nome_1")
var nome_2 = window.document.getElementById("nome_2")
var nome_3 = window.document.getElementById("nome_3")
var nome_4 = window.document.getElementById("nome_4")
var nome_5 = window.document.getElementById("nome_5")
var nome_6 = window.document.getElementById("nome_6")

function teste_clube(){
     box_clube_1.innerHTML="<p> CULTURA GEEK</p>"
     box_clube_1.style.filter="brightness(34%)"
     nome_1.style.position="absolute"
     nome_1.style.fontSize="16px"
     nome_1.style.color="white"
     nome_1.innerText=`CULTURA GEEK`
}

function revercao(){
    box_clube_1.style.filter=""
}