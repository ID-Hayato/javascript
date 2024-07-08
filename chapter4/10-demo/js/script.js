//disabledを外す

//使うタグの取得

const isAgreed=document.querySelector('#check');

const btn =document.querySelector('#btn');

isAgreed.addEventListener('change',()=>{
console.log(isAgreed.checked)

//もしチェックボックスにチェックが入っているなら
// if(isAgreed.checked===true){
//   //送信するボタンの無効化を解除する
//   btn.disabled=false;
 
//  console.log(btn.disabled)
// }else{
//   btn.disabled=true;
 
//   console.log(btn.disabled)
// }
btn.disabled=!isAgreed.checked
})
