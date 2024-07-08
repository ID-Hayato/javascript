const button = document.querySelector('#button')

const text=document.querySelector('#text')
const input=document.querySelector('input[type=text]')
console.log(button)
const color = () => {
    button.style.backgroundColor = '#ffffff';
    button.style.fontSize='300%'
    button.style.textAlign='center'
    button.style.margin='0 auto'
if(text.value==='black'){
    button.style.backgroundColor = '#000000';
    input.style.backgroundColor='#000000'
}
    
}

button.addEventListener('input', color)
const box = document.querySelector('#box')
const big =()=>{
    box.style.display='block'
    box.style.width='100%'
  
    box.style.height='500px'
}
box.addEventListener('click', big)