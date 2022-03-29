window.addEventListener('DOMContentLoaded',function() {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
       
        // Mousewheel Control Parameters

        mousewheel: {
          invert: true,
        },

        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
      })

      $( function() {
        $( "#accordion" ).accordion({
          collapsible: true,
        });
      } );

      $('#accordion') .accordion ({
        active:true,
      });

      $( "#accordion" ).accordion({
        icons: false,
      });
      
      
      

  document.querySelector ('#burger').addEventListener('click', function(){
        document.querySelector('#menu').classList.toggle('is-active')
  })

})
