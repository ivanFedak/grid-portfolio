const burger = ()=>{
    

    const btnOpen = document.querySelector('.icon-menu'),
          btnClose = document.querySelector('.menu__close'),
          menu = document.querySelector('.menu__body'),
          bg = document.querySelector('.main');

    function menuClose(e){ //Close by click outside
        if(!e.target.closest('.menu__body') && !e.target.closest('.icon-menu')  ){
            menu.classList.remove('menu__body_active');
            bg.style.opacity = '1'
            document.body.style.overflow = '';
        }
    }


    btnOpen.addEventListener('click',function(e){
        menu.classList.add('menu__body_active');
        bg.style.opacity = '0.5'
        document.body.style.overflow = 'hidden';
    })

    btnClose.addEventListener('click',function(e){
        menu.classList.remove('menu__body_active');
        bg.style.opacity = '1'
        document.body.style.overflow = '';
    })

    document.addEventListener('click', menuClose)
  

}
export default burger;