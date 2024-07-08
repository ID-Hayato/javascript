const game=document.querySelector('#game')
const name=document.querySelector('#name')
const text=document.querySelector('#text')
const btn=document.querySelector('#btn')
const miss=document.querySelector('#miss')
const success=()=>{

if(text.value===name.textContent){
game.classList.add('success')
    name.style.color='#0000ff'
    name.textContent='☔やっぱり雨は降るんだね☔'
    miss.textContent='Cメロの切ないかんじマジで好き'
 
}else{
     miss.textContent='😭ちゃんと入力して…😭'
     text.value='ほらもっかいやって！😡'
 
}
   console.log(text.value)
}
text.addEventListener('keyup', ()=>console.log('入力を検知'))
btn.addEventListener('click',success)
