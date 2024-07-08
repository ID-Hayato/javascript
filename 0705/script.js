const lists = [
    {
        name: 'マリオ',
        img: 'マリオ.png',
        ans: 'マリオブラザーズ（１９８３年）',
    },
    {
        name: 'ドンキーコング',
        img: 'ドンキー.webp',
        ans: '初代ドンキーコング（１９８１年）',
    },
    {
        name: 'パックマン',
        img: 'パックマン.jpg',
        ans: 'マリオブラザーズ（１９８０年）',
    },
    {
        name: 'ボンバーマン',
        img: 'ボンバーマン.jpg',
        ans: 'ボンバーマン（１９８５年）',
    },
]
const quiz = document.querySelector('#quiz');
for (let i = 0; i < 4; i++) {
    if (i === 2) {
        const content = `
        <li class="" id="ans">
        <img src="images/${lists[i].img}" alt="ないよ！" class="img">
        <h2>${lists[i].name}</h2>
        </li>
        `
        quiz.insertAdjacentHTML('beforeend', content)

    }else{
        const content = `
<li class="num">
<img src="images/${lists[i].img}" alt="ないよ！" class="img">
<h2>${lists[i].name}</h2>
</li>`
quiz.insertAdjacentHTML('beforeend', content)
    }
    

   
}
const anser=document.querySelector('#ans')
const not=document.querySelector(".num")



