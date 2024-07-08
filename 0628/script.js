let count=0;
const btn=document.querySelector('#btn')
const counting=document.querySelector('#count')
const content=document.querySelector('#content')

btn.addEventListener('click',()=>{
    count++;
    console.log(count);
counting.textContent=(count)
content.classList.toggle('odd')

})
btn.addEventListener('keydown',()=>{
    count++;
    console.log(count);
counting.textContent=(count)
content.classList.toggle('odd')

})