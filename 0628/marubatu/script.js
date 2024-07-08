let x=0;
const mas = document.querySelectorAll('.mas')
const mark = document.querySelectorAll('.mark')
const text=document.querySelector('#text')


for (let i = 0; i < mas.length; i++) {
   
    mas[i].addEventListener('click', () => {
        console.log(i)
        if (x % 2 === 0) {
            mark[i].classList.add('maru')
         text.textContent='後攻×のターン'
        } else {
            mark[i].classList.add('batu')
            text.textContent='先攻○のターン'
        }
        x++;
    })


}



