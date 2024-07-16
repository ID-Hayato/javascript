const heading=document.querySelector('#heading')

//アニメーションの内容はオブジェクトで書く
const keyframes ={
// opacity:[0,1],
// translate:['0 50px',0],
// rotate:['x 360deg',0],
color:['#f66','#fc2','#0c6','#0bd']
};

const option={
  duration: 2000,
  direction:'alternate',
  iterations: Infinity
// easing:'ease'
};

heading.animate(keyframes, option);
const h2anime=document.querySelector('#h2anime')

const h2keyframes={
  translate:['0 50px',0],
rotate:['x 3600deg',0],
color:['#f66','#fc2','#0c6','#0bd']

}
h2anime.animate(h2keyframes,option)