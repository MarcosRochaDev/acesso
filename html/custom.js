let time = 4000,
    Indexdiv = 0,
    divs = document.getElementsByClassName('container-main'),
    max = divs.length;

    function nextdiv(){
        let divas = document.getElementsByClassName('container-main');
        
        
    }



    function start(){
       setInterval(() => {
        nextdiv()
       }, time  )
    }

    window.addEventListener('load', start)