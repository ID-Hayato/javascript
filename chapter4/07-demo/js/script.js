const text=document.querySelector('#text');
const count=document.querySelector('#count');


text.addEventListener('keyup',()=>{
  

count.textContent=text.value.length;
if(text.value.length>100){
count.classList.add('alert');
console.log('😡')
}else{
    count.classList.remove('alert');
     console.log('😊')
}
});