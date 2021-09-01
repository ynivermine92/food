let tabs =  document.querySelector('.tabheader__items');
let tabsAtem =  document.querySelectorAll('.tabheader__item');
let tabsContent = document.querySelectorAll('.tabcontent');

let hideСontent = () => {
   tabsContent.forEach((item)=>{
       item.style.display = 'none'
   })
   tabsAtem.forEach((item)=>{
    item.classList.remove('tabheader__item_active')
})
}
let openСontent = (i = 0) => {
    tabsContent[i].style.display = 'block'
    tabsAtem[i].classList.add('tabheader__item_active')
}
hideСontent();
openСontent();

tabs.addEventListener('click',(e)=>{
    let target = e.target
     if(target && target.classList.contains('tabheader__item')){
         tabsAtem.forEach((item,i)=>{
             if(target == item){
                hideСontent();
                openСontent(i);
             }
         })
         
     }
})
/* /timer */
const deadline = '2021-09-20';

let getTimeRemaining=(time) => {
    const t = Date.parse(time) - Date.parse(new Date ()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((t % (1000 * 60)) / 1000);

          return {
              'total': t,
              'days' : days,
              'hours' : hours,
              'minutes' : minutes,
              'sedonds'  : seconds
          }
} 
function getZero (num){
    if(num >= 0 && num <= 10){
        return `0${num}`;
    }else{
        return num;
    }
}
let getClock = (time) => {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          sedonds = document.querySelector('#seconds');
          colbeck = setInterval(colbecFuctin, 1000);
    colbecFuctin();
    function colbecFuctin(){
       let t =  getTimeRemaining(time)
           days.innerHTML = getZero(t.days),
           hours.innerHTML = getZero(t.hours),
           minutes.innerHTML = getZero(t.minutes),
           sedonds.innerHTML = getZero(t.sedonds);

        if(t.total <= 0){
            clearInterval(colbeck);
        }
    }  
}
 getClock(deadline);

/* model */
const modelTriger  = document.querySelectorAll('[data-model]'),
      model = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal__close');
  
  let clouseModel = () => {
    model.style.display = 'none'
    document.body.style.overflow ='visible';
  }
  let showModel = () => {
       model.style.display = 'block'
    if(model.style.display = 'block'){
        document.body.style.overflow ='hidden';
    }
  }

  modelTriger.forEach((item) => {
    item.addEventListener('click', ()=>{
        model.style.display = 'block'
        if(model.style.display = 'block'){
            document.body.style.overflow ='hidden';
        }
    })
  });
  
  modalClose.addEventListener('click',clouseModel);

  document.addEventListener('keydown',(e)=>{
      if(e.code == 'Escape'){
         clouseModel();
      }
  })
 let modelBLock = setTimeout(showModel, 5000);

 let showModalByscoll = () =>{
    if(window.pageYOffset + document.documentElement.clientHeight 
        >= document.documentElement.scrollHeight){
          showModel();
          window.removeEventListener('scroll', showModalByscoll)
    }
 }
window.addEventListener('scroll',showModalByscoll);


