
const text = document.querySelector('#colorText')
const color = document.querySelector('#colorPicker')

// テンプレート文字
// text.textContent=`カラーコード：${color.value}`;


//アロー関数
const arrow = () => {
    //実行したい処理１
    //実行したい処理２
}
//function構文
function func() {
    //実行したい処理１
    //実行したい処理２
}
const colorBg = () => {
   
    document.body.style.backgroundColor = color.value

 //テンプレート文字列で繋げる

    if (color.value === '#ffffff') {
        text.textContent = `カラーコード： ${color.value} (white)`
    } else if (color.value === '#000000') {
        text.textContent = `カラーコード： ${color.value} (black)`
    }
    else {
        text.textContent = `カラーコード： ${color.value}`
    }
    // text.textContent = `カラーコード： ${color.value}`

}
color.addEventListener('input', colorBg)




const message = (name, weather) => {
    console.log(`${name}さんこんにちは今日は${weather}ですね。`)
}
message('ああ', 'どしゃ降り');
message('いい', 'いい天気');