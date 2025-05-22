window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const lista = document.getElementById("lista-navegacio-header");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    lista.style.padding = "30px 10px";
  } else {
    lista.style.padding = "80px 10px";
  }
}



