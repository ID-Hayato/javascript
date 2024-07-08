const correct=document.querySelector('#correct')
const incorrect=document.querySelectorAll
('.Incorrect')
const anstext=document.querySelector('#content')
const baka=document.querySelector('#baka')
const ans=()=>{
anstext.textContent='正解！！'
anstext.style.color='#ff0000'
}
const incorrectans=()=>{
    anstext.textContent='不正解！！'
anstext.style.color='#0000ff'
}
const bakaans=()=>{
    anstext.textContent='🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗😭不正解😭🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗'
    anstext.style.color='#0ff000'           
}
correct.addEventListener('click',ans)
incorrect[0].addEventListener('click',incorrectans)
incorrect[1].addEventListener('click',incorrectans)
baka.addEventListener('click',bakaans)
