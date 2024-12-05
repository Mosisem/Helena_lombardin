var animacao_humanas = window.document.getElementById("humanas")
var texto_int_huma = window.document.getElementById("texto_int_huma")
var animacao_exatas = window.document.getElementById("exatas")
var texto_int_exatas = window.document.getElementById("texto_int_exatas")
var animacao_h = window.document.getElementById("button_h")
var animacao_x = window.document.getElementById("button_x")
var text_b = window.document.getElementById("tx_bb")
var txt_b = window.document.getElementById("txt_bb")


function humanas_clique(){
      if (animacao_humanas.style.height == "300px"){
            
            animacao_humanas.style.height="190px"
            texto_int_huma.innerText="Os itinerários de Humanas são voltados para o estudo das ciências sociais,linguagens e comportamentos humanos, oferecendo uma abordagem mais crítica, reflexiva e interpretativa da sociedade."
            text_b.innerText="Saiba mais"
            animacao_h.style.backgroundColor="black"
            animacao_h.style.marginTop="40px"

      }else{
             animacao_humanas.style.height="300px"
             texto_int_huma.innerText=
             "Os itinerários formativos de Humanas são uma proposta curricular que visa o estudo aprofundado das ciências sociais, linguagens e comportamentos humanos, com foco em uma compreensão crítica e reflexiva da sociedade. Os alunos têm a oportunidade de explorar disciplinas como história, filosofia, sociologia, psicologia, geografia e antropologia, que oferecem diferentes perspectivas sobre o comportamento humano e as interações sociais. Essa abordagem permite que os estudantes analisem as dinâmicas sociais, culturais e históricas que influenciam tanto o indivíduo quanto o coletivo, desenvolvendo habilidades para entender e questionar as complexidades da sociedade."
             text_b.innerText="Ver menos"
             animacao_h.style.backgroundColor="blue"
             animacao_h.style.marginTop="140px"
            }

}

function exatas_clique(){
      if (animacao_exatas.style.height == "300px"){

            animacao_exatas.style.height="190px"
            texto_int_exatas.innerText=" Os itinerários de Exatas são voltados para o desenvolvimento de habilidades analíticas e lógicas,com foco em ciências, matemática e tecnologias. "
            txt_b.innerText="Saiba mais"
            animacao_x.style.backgroundColor="black"
            animacao_x.style.marginTop="40px"
            
      }else{
            texto_int_exatas.innerText=" Os itinerários de Exatas no ensino médio visam o desenvolvimento de habilidades lógicas e analíticas, com foco em disciplinas como Matemática, Física, Química, Biologia e Tecnologias. Eles capacitam os estudantes a compreender fenômenos naturais e resolver problemas complexos, promovendo o raciocínio crítico e a solução estruturada de questões. Além de preparar para áreas como engenharia, tecnologia e pesquisa científica, esses itinerários formam cidadãos capazes de lidar com os avanços tecnológicos e se adaptar às rápidas mudanças do mercado de trabalho."
            txt_b.innerText="Ver menos"
            animacao_x.style.backgroundColor="blue"
            animacao_x.style.marginTop="140px"
             animacao_exatas.style.height="300px"
      }
}


