var api = ' <div class="w3-panel w3-black"><p style="font-size: 12px;">APIs são mecanismos que permitem que dois componentes de software se comuniquem usando um conjunto de definições e protocolos. </p></div>';
var blog = '<div class="w3-panel w3-black"><p style="font-size: 12px;">Blog é um site informativo, também chamado de diário online, onde os conteúdos são apresentados em ordem cronológica inversa, ou seja, com destaque para as publicações mais recentes. Diferente de um site institucional de uma empresa, onde os conteúdos são sempre os mesmos, o blog é uma página atualizada frequentemente.</p></div>';
var e_commerce = '<div class="w3-panel w3-black"><p style="font-size: 12px;">E-commerce, ou comércio eletrônico, refere-se às vendas pela internet de produtos e serviços. Assim, todas as transações comerciais são realizadas por meio de ferramentas online.</p></div>';
var lading_page = '<div class="w3-panel w3-black"><p style="font-size: 12px;">  Landing Page é uma página que tem como objetivo gerar conversão dos visitantes em leads, oportunidades, clientes ou vendas. Por isso é tão importante criar uma que traga, de fato, resultados.  </p></div>';
var portfolio = '<div class="w3-panel w3-black"><p style="font-size: 12px;">Um conjunto de páginas web, por conseguinte, forma um site da web. As páginas costumam estar reunidas sob um domínio comum para que o sítio em questão seja acessível a partir de uma mesma direção na Internet.</p></div>';
var site = '<div class="w3-panel w3-black"><p style="font-size: 12px;">Atualmente o site é a mídia digital mais barata para fazer marketing. Além de seu baixo custo de confecção, manter ele ativo é muito barato.</p></div>';



/**---------------------------API-------------------------------------------- */

var API = document.getElementById("1");
API.onclick = function () { onClickApi() };

function onClickApi() {
  if (API.innerHTML == "API") {
    return API.innerHTML = api;
  } else if (API.innerHTML == api) {
    return API.innerHTML = "API";
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
  if (E_COMMERCE.innerHTML == "E-COMMERCE") {
    E_COMMERCE.innerHTML = e_commerce;
  } else if (E_COMMERCE.innerHTML == e_commerce) {
    return E_COMMERCE.innerHTML = "E-COMMERCE"
  }
}

/**-------------------------- Portfolio ----------------------------------------------- */

var PORFOLIO = document.getElementById("4");
PORFOLIO.onclick = function () { onClickPortfolio() };

function onClickPortfolio() {
  if (PORFOLIO.innerHTML == "PORTFOLIO") {
    return PORFOLIO.innerHTML = portfolio;
  } else if (PORFOLIO.innerHTML == portfolio) {
    return PORFOLIO.innerHTML = "PORTFOLIO"
  }
}

/**-------------------------LADING PAGE----------------------------------------------- */


var LADING_PAGE = document.getElementById("5");
LADING_PAGE.onclick = function () { onClickLading_page() };

function onClickLading_page() {
  if (LADING_PAGE.innerHTML == "LADING PAGE") {
    return LADING_PAGE.innerHTML = lading_page;
  } else if (LADING_PAGE.innerHTML == lading_page) {
    return LADING_PAGE.innerHTML = "LADING PAGE"

  }
}


/**--------------------------SITE--------------------------------------------- */

var SITE = document.getElementById("6");
SITE.onclick = function () { onClickSite() };

function onClickSite() {
  if (SITE.innerHTML == "SITE") {
    return SITE.innerHTML = site
  } else if (SITE.innerHTML == site) {
    return SITE.innerHTML = "SITE"
  }
}



