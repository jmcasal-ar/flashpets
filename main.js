// PRELOADER        ---------------- Primer intento BUGS

//$(window).on('load', function(){
//    $('.preloader'.addClass('preloader.complete'))
//})

// PRELOADER Function para deshacerse del preloader 

window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
});



// -- TIPS rotate gallery start --

const tipsimgwrapper = document.querySelector(".tips-img-wrapper");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let a = 0;
let timeout;

prev.addEventListener("click", function() {
    a = a + 45;
    clearTimeout(timeout);
    updatefun();
});

next.addEventListener("click", function() {
    a = a - 45;
    clearTimeout(timeout);
    updatefun();
});

function updatefun() {
    tipsimgwrapper.style.transform = `perspective(1000px)rotateY(${a}
        deg)`;

    timeout = setTimeout(() => {
        a = a - 45;
        updatefun();
    }, 4000);
}

updatefun();

// -- TIPS rotate gallery end --

// -- NUEVA ANIMACION galeria filtrada por categorias start --

$( 'filter dogs' ).click(function() {
    var set = $(this).data('id');

    $("#photos a[data-filter='"+ set +"']").addClass('in');
    $("#photos a[data-filter='"+ set +"']").removeClass('out hidden');
    $("#photos a[data-filter!='"+ set +"']").addClass('out hidden');
    $("#photos a[data-filter!='"+ set +"']").removeClass('in');

   if($(this).data('id') === 'show-all') {
      $("#photos a[data-filter='"+ set +"']").addClass('out hidden');
      $('#photos a').addClass('in');
      $('#photos a').removeClass('hidden out');
   }
   $('filter cats').animate({
     'left': '0',
     'top':' 0'
   });
});

$( 'all' ).click(function() {
    var set = $(this).data('id');

    $("#photos b[data-filter='"+ set +"']").addClass('in');
    $("#photos b[data-filter='"+ set +"']").removeClass('out hidden');
    $("#photos b[data-filter!='"+ set +"']").addClass('out hidden');
    $("#photos b[data-filter!='"+ set +"']").removeClass('in');

   if($(this).data('id') === 'show-all') {
      $("#photos b[data-filter='"+ set +"']").addClass('out hidden');
      $('#photos b').addClass('in');
      $('#photos b').removeClass('hidden out');
   }
   $('#photos b').animate({
     'left': '0',
     'top':' 0'
   });
});

// -- NUEVA ANIMACION galeria filtrada por categorias end --

// Popup Form start //
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
// Popup Form end //