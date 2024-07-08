const menu = document.querySelector('#menu')

const strawberry={
    name:'イチゴ',
    img:'straberry.jpg',
    price:450,
}
//ブラケット記法
console.log(strawberry['name'])
//ドット記法
console.log(strawberry.price)
// 変数に代入した値を使うときはブラケット記法
    

const lists = [

    {  name:'イチゴ',
        img:'strawberry.jpg',
        price:450,},
    {  name:'ライム',
        img:'lime.jpg',
        price:400,},
    {  name:'マンゴー',
        img:'mango.jpg',
        price:500,},
    {  name:'レモン',
        img:'lemon.jpg',
        price:400,},
    {  name:'イチジク',
        img:'fig.jpg',
        price:500,},
    {  name:'リンゴ',
        img:'apple.jpg',
        price:400,},
]



for (let i = 0; i <= 5; i++) {
    console.log(lists[i]['img'])
    const content = `
    <div>
    <img src="images/${lists[i].img}" alt="ないよ！">
    <h2>${lists[i].name}</h2>
    <p>${lists[i].price}円</p>

    </div>`
    // menu.textContent=content
    menu.insertAdjacentHTML('beforeend', content)
}
//飲食店でオブジェクトを作るなら…
// 店名
// （チェーン店なら）何号店か
// 開店時間
// 閉店時間
// 席数
// 喫煙
// レジ方式
// 先払いか後払いか
// テイクアウトの有無
// 創業日
// ポイントカードの有無
// クレジットカードが使えるか
// 駐車場の台数
// 休業日



