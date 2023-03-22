var institucional = ' <div class="w3-panel w3-black"><p style="font-size: 12px;">Um site institucional é o tipo mais comum encontrado pela web. O objetivo dele é apresentar a empresa e fazer marketing de conteúdo.</p></div>';
var blog = '<div class="w3-panel w3-black"><p style="font-size: 12px;">Blog é um site informativo, também chamado de diário online, onde os conteúdos são apresentados em ordem cronológica inversa, ou seja, com destaque para as publicações mais recentes. Diferente de um site institucional de uma empresa, onde os conteúdos são sempre os mesmos, o blog é uma página atualizada frequentemente.</p></div>';
var e_commerce = '<div class="w3-panel w3-black"><p style="font-size: 12px;">E-commerce, ou comércio eletrônico, refere-se às vendas pela internet de produtos e serviços. Assim, todas as transações comerciais são realizadas por meio de ferramentas online.</p></div>';
var lading_page = '<div class="w3-panel w3-black"><p style="font-size: 12px;">  Landing Page é uma página que tem como objetivo gerar conversão dos visitantes em leads, oportunidades, clientes ou vendas. Por isso é tão importante criar uma que traga, de fato, resultados.  </p></div>';
var portfolio = '<div class="w3-panel w3-black"><p style="font-size: 12px;">Um site de portfólio é uma forma única de mostrar seu trabalho e permitir que outras pessoas saibam mais sobre você. Um portfólio pode ser usado para atrair clientes, fechar negócios, candidatar a empregos e outros fins. </p></div>';
var pwa = '<div class="w3-panel w3-black"><p style="font-size: 12px;">Da forma mais simples, um PWA é uma página criada com o uso de tecnologias da web mas direcionada aos aplicativos móveis.</p></div>';
var catalago = '<div class="w3-panel w3-black"><p style="font-size: 12px;">Para quem deseja ter um site com seus produtos e mostrá-los a seus clientes, como um catálogo digital.</p></div>';


 

/**---------------------------API-------------------------------------------- */

var API = document.getElementById("1");
API.onclick = function () { onClickApi() };

function onClickApi() {
  if (API.innerHTML == "INSTITUCIONAL") {
    return API.innerHTML = institucional;
  } else if (API.innerHTML == institucional) {
    return API.innerHTML = "INSTITUCIONAL";
  }
}

/**--------------------------BLOG----------------------------------------------- */


var BLOG = document.getElementById("2");
BLOG.onclick = function () { onClickBlog() };

function onClickBlog() {
  if (BLOG.innerHTML == "BLOG") {
    return BLOG.innerHTML = blog
  } else if (BLOG.innerHTML == blog) {
    return BLOG.innerHTML = "BLOG"
  }
}

/**------------------------- E-COMMERCE ----------------------------------------------- */

var E_COMMERCE = document.getElementById("3");
E_COMMERCE.onclick = function () { onClickE_Commerce() };

function onClickE_Commerce() {
  if (E_COMMERCE.innerHTML == "LOJA VIRTUAL") {
    E_COMMERCE.innerHTML = e_commerce;
  } else if (E_COMMERCE.innerHTML == e_commerce) {
    return E_COMMERCE.innerHTML = "LOJA VIRTUAL"
  }
}

/**-------------------------- Portfolio ----------------------------------------------- */

var PORFOLIO = document.getElementById("4");
PORFOLIO.onclick = function () { onClickPortfolio() };

function onClickPortfolio() {
  if (PORFOLIO.innerHTML == "PORTFÓLIO") {
    return PORFOLIO.innerHTML = portfolio;
  } else if (PORFOLIO.innerHTML == portfolio) {
    return PORFOLIO.innerHTML = "PORTFÓLIO"
  }
}

/**-------------------------LADING PAGE----------------------------------------------- */


var LADING_PAGE = document.getElementById("5");
LADING_PAGE.onclick = function () { onClickLading_page() };

function onClickLading_page() {
  if (LADING_PAGE.innerHTML == "PAGINA UNICA") {
    return LADING_PAGE.innerHTML = lading_page;
  } else if (LADING_PAGE.innerHTML == lading_page) {
    return LADING_PAGE.innerHTML = "PAGINA UNICA"

  }
}


/**--------------------------SITE--------------------------------------------- */

var SITE = document.getElementById("6");
SITE.onclick = function () { onClickPwa() };

function onClickPwa() {
  if (SITE.innerHTML == "PWA") {
    return SITE.innerHTML = pwa
  } else if (SITE.innerHTML == pwa) {
    return SITE.innerHTML = "PWA"
  }
}



/**-------------------------- catalágo --------------------------------------------- */

var CATALAGO = document.getElementById("7");
CATALAGO.onclick = function () { onClickCatalago() };

function onClickCatalago() {
  if (CATALAGO.innerHTML == "CATÁLAGO DIGITAL") {
    return CATALAGO.innerHTML = catalago
  } else if (CATALAGO.innerHTML == catalago) {
    return CATALAGO.innerHTML = "CATÁLAGO DIGITAL"
  }
}



