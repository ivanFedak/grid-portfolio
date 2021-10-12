const btns = ()=>{
    

    const btns = document.querySelectorAll('.main__btn');

    btns[1].addEventListener('mouseenter', function(e){
        btns.forEach(item=>{
            item.style.background = 'none'
        })
        btns[1].style.background = 'orange'
    })
    btns[1].addEventListener('mouseenter', function(e){
        btns.forEach(item=>{
            item.style.background = 'none'
        })
        btns[1].style.background = 'orange'
    })
    btns[1].addEventListener('mouseleave', function(e){
        btns.forEach(item=>{
            item.style.background = 'none'
        })
        btns[0].style.background = 'orange'
    })

}
export default btns;