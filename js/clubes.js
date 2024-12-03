// imagens das caixas
var box_clube_1= window.document.getElementById("clube_g")
var box_clube_2=window.document.getElementById("clube_a")
var box_clube_3=window.document.getElementById("clube_o")
var box_clube_4=window.document.getElementById("clube_j")
var box_clube_5=window.document.getElementById("clube_c")
var box_clube_6=window.document.getElementById("clube_l")
var box_clube_7=window.document.getElementById("clube_t")

// Textos nas caixas dos clubes
var nome_1 = window.document.getElementById("nome_1")
var nome_2 = window.document.getElementById("nome_2")
var nome_3 = window.document.getElementById("nome_3")
var nome_4 = window.document.getElementById("nome_4")
var nome_5 = window.document.getElementById("nome_5")
var nome_6 = window.document.getElementById("nome_6")
var nome_7 = window.document.getElementById("nome_7")


function clube_1(){
     box_clube_1.style.filter="brightness(34%)"
     nome_1.style.position="relative"
     nome_1.style.fontSize="16px"
     nome_1.style.color="white"
     nome_1.style.marginTop="-115px"
     nome_1.innerHTML="CULTURA GEEK"
}

function clube_2(){
    box_clube_2.style.filter="brightness(34%)"
    nome_2.style.position="relative"
    nome_2.style.fontSize="16px"
    nome_2.style.color="white"
    nome_2.style.marginTop="-115px"
    nome_2.innerHTML=" ARTE e CRAFT "
}

function clube_3(){
    box_clube_3.style.filter="brightness(34%)"
    nome_3.style.position="relative"
    nome_3.style.fontSize="16px"
    nome_3.style.color="white"
    nome_3.style.marginTop="-115px"
    nome_3.innerText="ARTE e ORATÓRIA "
}

function clube_4(){
    box_clube_4.style.filter="brightness(34%)"
    nome_4.style.position="relative"
    nome_4.style.fontSize="16px"
    nome_4.style.color="white"
    nome_4.style.marginTop="-115px"
    nome_4.innerText="JOGOS EDUCACIONAIS "
}

function clube_5(){
    box_clube_5.style.filter="brightness(34%)"
    nome_5.style.position="relative"
    nome_5.style.fontSize="16px"
    nome_5.style.color="white"
    nome_5.style.marginTop="-115px"
    nome_5.innerText="A LEGISLAÇÃO PARA CRIMES"
}

function clube_6(){
    box_clube_6.style.filter="brightness(34%)"
    nome_6.style.position="relative"
    nome_6.style.fontSize="16px"
    nome_6.style.color="white"
    nome_6.style.marginTop="-115px"
    nome_6.innerText="ARTE E LITERATURA"
}

function clube_7(){
    box_clube_7.style.filter="brightness(34%)"
    nome_7.style.position="relative"
    nome_7.style.fontSize="16px"
    nome_7.style.color="white"
    nome_7.style.marginTop="-115px"
    nome_7.innerText="TOMADA 2 "
}

function revercao(){
    box_clube_1.style.filter=""
    box_clube_2.style.filter=""
    box_clube_3.style.filter=""
    box_clube_4.style.filter=""
    box_clube_5.style.filter=""
    box_clube_6.style.filter=""
    box_clube_7.style.filter=""

// texto
   nome_1.innerHTML=""
   nome_2.innerText=""
   nome_3.innerText=""
   nome_4.innerText=""
   nome_5.innerText=""
   nome_6.innerText=""
   nome_7.innerText=""
   nome_7.color=""
}

