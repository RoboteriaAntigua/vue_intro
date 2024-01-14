
	/* vue no estaria compilando este script o firebase, probar ponerlo aparte y luego subir a firebase:
	vue build
	firebase deploy */
    //$(document).ready(function() {
      
    $(function() { 
    $('#camera_wrap').camera({
            //thumbnails: true
            //alignment			: 'centerRight', 
            autoAdvance			: true,		
            mobileAutoAdvance	: true,
            //fx					: 'simpleFade',
            height: '51%',
            hover: false,
            loader: 'none',
            navigation: false,
            navigationHover: false,
            mobileNavHover: false,
            playPause: false,
            pauseOnClick: false,
            pagination			: true,
            time: 3000,
            transPeriod: 1000,
            minHeight: '200px'
        });
    
        //	carouFredSel
        $('#slider3 .carousel.main ul').carouFredSel({
            auto: {
                timeoutDuration: 8000					
            },
            responsive: true,
            prev: '.prev3',
            next: '.next3',
            width: '100%',
            scroll: {
                items: 1,
                duration: 1000,
                easing: "easeOutExpo"
            },			
            items: {
                width: '350',
                height: 'variable',	//	optionally resize item-height			  
                visible: {
                    min: 1,
                    max: 4
                }
            },
            mousewheel: false,
            swipe: {
                onMouse: true,
                onTouch: true
                }
        }); 
    
    
    
        $(window).bind("resize",updateSizes_vat).bind("load",updateSizes_vat);
        function updateSizes_vat(){		
            $('#slider3 .carousel.main ul').trigger("updateSizes");
        }
        updateSizes_vat();
    
    
    }); //
    /*$(window).load(function() {
        //
    
    }); //*/

    $(window).on("load", function (e) {});