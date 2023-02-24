let time = 6000,
    Indexdiv = 0,
    divs = document.querySelectorAll('.carrocel div'),
    max = divs.length;
    /* console.log(divs + max) */

    function nextdiv(){
        console.log(Indexdiv)
        divs[Indexdiv].classList.remove('container-carrocel');
        divs[Indexdiv].classList.add('hidecarrocel');
        
        Indexdiv++;

        
        if(Indexdiv >= max) {
            Indexdiv = 0;}
            divs[Indexdiv].classList.remove('hidecarrocel');
            divs[Indexdiv].classList.add('container-carrocel');
        
        
    }



    function start(){
       setInterval(() => {
        nextdiv()
       }, time  )
    }

    window.addEventListener('load', start)