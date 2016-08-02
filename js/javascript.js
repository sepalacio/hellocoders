
var $menu  = $('#vernav');
var $showM = $('#showme');

function mostrarMenu () {
    $menu.slideToggle();
    tito.preventDefault();
}

$showM.click ( mostrarMenu );


$('#icon1').hover(function(){
    $( "#icon11" ).addClass( "turnaround" );
    $("#icon11").css({ color: "#00b6ff" });
},
function(){
    $( "#icon11" ).removeClass( "turnaround" );
    $( "#icon11" ).css({ color: "#fff" });
});

$('#icon2').hover(function(){
    $( "#icon12" ).addClass( "turnaround" );
    $("#icon12").css({ color: "#00b6ff" });
},
function(){
    $( "#icon12" ).removeClass( "turnaround" );
    $( "#icon12" ).css({ color: "#fff" });
});


$('#icon3').hover(function(){
    $( "#icon13" ).addClass( "turnaround" );
    $("#icon13").css({ color: "#00b6ff" });
},
function(){
    $( "#icon13" ).removeClass( "turnaround" );
    $( "#icon13" ).css({ color: "#fff" });
});


$('#icon4').hover(function(){
    $( "#icon14" ).addClass( "turnaround" );
    $("#icon14").css({ color: "#00b6ff" });
},
function(){
    $( "#icon14" ).removeClass( "turnaround" );
    $( "#icon14" ).css({ color: "#fff" });
});




function goServices () {
    $('#services').animatescroll({
        scrollSpeed:1500,
        easing:'easeInOutCirc'
    });
}
function goAboutus (){
    $('#aboutus').animatescroll({
        scrollSpeed:2000,
        easing:'easeInOutCirc'
    });
}
function goPortafolio () {
    $('#portafolio').animatescroll({
        scrollSpeed:2500,
        easing:'easeInOutCirc'
    });
}
function goHireus () {
    $('#hireus').animatescroll({
        scrollSpeed:3000,
        easing:'easeInOutCirc'
    });
}


var count = $('#c1').val();
var state = "off";

var count2 = $('#c2').val();
var state2 = "off";

var count3 = $('#c3').val();
var state3 = "off";

var count4 = $('#c4').val();
var state4 = "off";

function oneLike () {

    if (state == "off")
    {
        count++;
        $("#like").css({ color: "#f75151"});
        $( "#c1" ).fadeOut(function() { // Fade out field, and when finished
            $(this).val(count).fadeIn(); // Change the value and fade back in
        });
        state ="on";
    }
}
function oneLike2 () {
    if (state2 == "off")
    {
        count2++;
        $("#like2").css({ color: "#f75151"});
        $( "#c2" ).fadeOut(function() { // Fade out field, and when finished
            $(this).val(count2).fadeIn(); // Change the value and fade back in
        });
        state2 ="on";
    }
}
function oneLike3 () {
    if (state3 == "off")
    {
        count3++;
        $("#like3").css({ color: "#f75151"});
        $( "#c3" ).fadeOut(function() { // Fade out field, and when finished
            $(this).val(count3).fadeIn(); // Change the value and fade back in
        });
        state3 ="on";
    }
}
function oneLike4 () {
    if (state4 == "off")
    {
        count4++;
        $("#like4").css({ color: "#f75151"});
        $( "#c4" ).fadeOut(function() { // Fade out field, and when finished
            $(this).val(count4).fadeIn(); // Change the value and fade back in
        });
        state4 ="on";
    }
}





$('#img1').hover(function(){
    $( ".divlink1" ).addClass( "link" );
    $( ".img1" ).addClass( "img-port" );
    $(".n1").css({ color: "#008fd5"});
},
function(){
    $( ".divlink1" ).removeClass( "link" );
    $( ".img1" ).removeClass( "img-port" );
    $(".n1").css({ color: "#73848e" });
});

$('#img2').hover(function(){
    $( ".divlink2" ).addClass( "link" );
    $( ".img2" ).addClass( "img-port" );
    $(".n2").css({ color: "#008fd5"});
},
function(){
    $( ".divlink2" ).removeClass( "link" );
    $( ".img2" ).removeClass( "img-port" );
    $(".n2").css({ color: "#73848e" });
});

$('#img3').hover(function(){
    $( ".divlink3" ).addClass( "link" );
    $( ".img3" ).addClass( "img-port" );
    $(".n3").css({ color: "#008fd5"});
},
function(){
    $( ".divlink3" ).removeClass( "link" );
    $( ".img3" ).removeClass( "img-port" );
    $(".n3").css({ color: "#73848e" });
});

$('#img4').hover(function(){
    $( ".divlink4" ).addClass( "link" );
    $( ".img4" ).addClass( "img-port" );
    $(".n4").css({ color: "#008fd5"});
},
function(){
    $( ".divlink4" ).removeClass( "link" );
    $( ".img4" ).removeClass( "img-port" );
    $(".n4").css({ color: "#73848e" });
});





