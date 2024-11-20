var animacao_humanas = window.document.getElementById("humanas")
var animacao_exatas = window.document.getElementById("exatas")
var animacao_botao = window.document.getElementById("button")
var text_b = window.document.getElementById("txt_bb")
function humanas_clique(){
      if (animacao_humanas.style.height == "300px"){
            animacao_humanas.style.height="190px"
      }else{
             animacao_humanas.style.height="300px"
             animacao_humanas.insertAdjacentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo libero voluptas repellendus sunt modi consequatur voluptatem, fuga incidunt, atque suscipit quos iure. Rem, sit laborum soluta saepe sed esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt nam commodi totam obcaecati laborum, deserunt quibusdam repellendus architecto ipsam ea excepturi aut amet odit quidem, accusamus autem, asperiores saepe."
      }

}

function exatas_clique(){
      if (animacao_exatas.style.height == "300px"){
            animacao_exatas.style.height="190px"
            text_b.innerText="Ver menos"
          
      }else{
             
             animacao_exatas.style.height="300px"
             animacao_exatas.insertAdjacentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo libero voluptas repellendus sunt modi consequatur voluptatem, fuga incidunt, atque suscipit quos iure. Rem, sit laborum soluta saepe sed esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt nam commodi totam obcaecati laborum, deserunt quibusdam repellendus architecto ipsam ea excepturi aut amet odit quidem, accusamus autem, asperiores saepe."
      }
}


