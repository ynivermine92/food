 let btn = document.querySelector('.btn');
 function myAnimation () {
    let elem = document.querySelector('.box');
    let post = 0;
    let sum = 500;
    let id = setInterval(frame,more, 10);
  
    
     function frame () {
        if(post == 500){
            clearInterval(id);
        }else{
            post++
            elem.style.marginTop = post + 'px';
            elem.style.marginLeft = post + 'px';
        }   
    } 
    function more () {
        sum = 0;
        if(sum == 0){
        }else{
            sum--
            elem.style.marginTop = sum + 'px';
            elem.style.marginLeft = sum + 'px';
        }
    }   
 }
    btn.addEventListener('click', myAnimation);