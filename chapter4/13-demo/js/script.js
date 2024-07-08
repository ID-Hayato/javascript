const getScrollPercent=()=>{
  // console.log('スクロールされました。')
  const scrolled=window.scrollY;
  // console.log(scrolled+'スクロールされました')
  //ページ全体の高さ
  const pageheight=document.documentElement.scrollHeight;
//表示領域の高さ
const viewHeight=document.documentElement.clientHeight;
// console.log('ページ全体の高さ'+pageheight)
// console.log('表示領域の高さ'+viewHeight)

const percentage=scrolled/(pageheight-viewHeight)*100;
console.log(percentage+'%')

//バーに幅を指定
document.querySelector('#bar').style.width=percentage+'%';

}
//イベントの設定
//画面全体(window)に対して、スクロールイベントを設定
window.addEventListener('scroll',getScrollPercent)