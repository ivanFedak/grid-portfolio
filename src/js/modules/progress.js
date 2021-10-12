const progress = ()=>{
    
    const procents = document.querySelectorAll('.item-progress__procent'),
          lines = document.querySelectorAll('.item-progress__line span');



    procents.forEach( (item, i)=>{

        console.log(item.textContent)
        lines[i].style.width = item.textContent;
    })




    // line.forEach(item=>{
    //     item.style.width = 20 + '%'
    // })

}
export default progress;