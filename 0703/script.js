const quiz = [
    '日本の首都はどこでしょう',
    '１　大阪',
    '２　東京',
    '３　広島',
    '４　奈良',
    '正解は東京です',
]
const scre = document.querySelector('#scre');
for (let i = 0; i < quiz.length; i++) {
    if(i<quiz.length-1){
        if(i===0){
             const content = `<p class="Q">${quiz[i]}</p>`
            scre.insertAdjacentHTML("beforeend", content)
        }else{
           const content = `<button class="T">${quiz[i]}</button>`
       scre.insertAdjacentHTML("beforeend", content) 
        }
           
    console.log(quiz[i])
    }
   
}


let x = true;
scre.addEventListener('click', () => {
    if (x) {
        body.insertAdjacentHTML("beforeend", `<div id="ans">${quiz[5]}</div>`)
        x = false
    }
    console.log(quiz[5])
    console.log('😉')

})