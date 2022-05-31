newFunction();

function newFunction() {
    window.sr = ScrollReveal();

    sr.reveal('anime-left', {
        origin: 'left',
        duration: 1000,
        distance: '25ren',
        delay: 300
    });

    sr.reveal('anime-right', {
        origin: 'right',
        duration: 1000,
        distance: '25ren',
        delay: 300
    });
    sr.reveal('anime-left', {
        origin: 'left',
        duration: 1000,
        distance: '25ren',
        delay: 300
    });

    sr.reveal('anime-right', {
        origin: 'right',
        duration: 1000,
        distance: '25ren',
        delay: 300
    });
    
    sr.reveal('anime-up', {
        origin: 'up',
        duration: 1000,
        distance: '25ren',
        delay: 600
    });

    sr.reveal('anime-top', {
        origin: 'top',
        duration: 1000,
        distance: '25ren',
        delay: 600
    });
    sr.reveal('anime-up', {
        origin: 'up',
        duration: 1000,
        distance: '25ren',
        delay: 600
    }); 
}

var menuItems=document.getElementById('menuItems');
menuItems.style.maxHeight="0px";
 
function menuToggle(){
    if(menuItems.style.maxHeight=="0px"){
        menuItems.style.maxHeight="200px";
    }else{
        menuItems.style.maxHeight="0px"
    }
}
