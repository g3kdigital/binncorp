// VARIABLES GLOBALES
var web = $(document);
var btn_burger = "<button class='fa fa-bars btn_movil'></button>";  
var menu_movil = $(".menu .menu.enlace");
var anclas = $('.inicio a[href*="#"]');  
var website = $('html, body');
var modal_container = $(".ventanas-emergentes");
var clase_on = "activo";
var altura_vieport = $(window).innerHeight();
var altura_despliega = altura_vieport - (altura_vieport / 10);
var altura_pliega = altura_vieport - (altura_vieport / 8);
var web = $(document);
var clase_animar = "animar";
var animar_hijos = $(".animar_hijos>*");

function iniciarModal(){
  changingClass(modal_container, clase_on);
}

function changingClass(target,clase){
  target.toggleClass(clase);
}

function addingProperty(target,atributo,valor){
  target.attr(atributo, valor);
}

function anclando_A () {
  anclas.on("click", scroll_A);  
};

function scroll_A (){
  event.preventDefault();
  var _href = $(this).attr('href');
  website.animate({ scrollTop : $( _href ).offset().top - 100 }, 'slow');
};

function checkScroll()
{
    $(".animar").each(
        function(i,evento)
        {
            var posicion_elemento = $(evento).offset().top - web.scrollTop();
            $(evento).toggleClass("anima_entrada",posicion_elemento<=altura_despliega);
            $(evento).toggleClass("anima_salida",posicion_elemento>=altura_pliega);
        }
    );
}

/*=====================================
 * EVENTOS
 =====================================*/

$(window).resize(function() {
   altura_vieport = $(window).innerHeight();
});  

$(window).scroll(function(){
  checkScroll();
});

// document ready
web.ready(function(){

  menu_movil.addClass("menu_movil").before(btn_burger);    

  animar_hijos.addClass(clase_animar);  

  web.on('click', '.btn_movil', function(){      
    $(this).toggleClass(clase_on);
    changingClass(menu_movil, clase_on);
  });

  anclando_A();  
  checkScroll();  
      
}); 
