
var nova = '<div class="w3-black w3-panel w3-container w3-border w3-large w3-padding-large"><menu> <span><a href="/" class="w3-bar-item w3-button w3-padding-large"><i class=" w3-xxlarge"></i><p>INICIO</p></a></span>'+'<span><a href="/#servicos" class="w3-bar-item w3-button w3-padding-large"><i class=" w3-xxlarge"></i><p>SERVIÇOS</p></a></span>'+'<span><a href="/#portfolio" class="w3-bar-item w3-button w3-padding-large"><i class=" w3-xxlarge"></i><p>PORTFOLIO</p></a></span>'+'<span><a href="/#contato" class="w3-bar-item w3-button w3-padding-large"><i class=" w3-xxlarge"></i><p>CONTATO</p></a></span>'+'<span><a href="/about" class="w3-bar-item w3-button w3-padding-large"><i class=" w3-xxlarge"></i><p>SOBRE</p></a></span>'+'</menu></div>'




var bar = document.getElementById("bar");
var menu = document.getElementById("menu_small_screens");

menu.onclick = function () { onClickMenu() };
bar.onclick = function () { onClickMenu() };

function onClickMenu() {

  if (bar.innerHTML == "") {
    return bar.innerHTML = nova
  } else if (bar.innerHTML == nova) {
    return bar.innerHTML = ""
    
  }
  
}

/**------------------------------------------------------------------------- */





   








