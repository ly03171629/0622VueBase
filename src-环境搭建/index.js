import './public/css/index.css'
import imgSrc from './public/images/3.jpg'

let pp = document.createElement('p')
pp.innerText = '我爱你赵丽颖'
document.body.appendChild(pp)

const myFunc = () => {
  console.log('heihei')
}

let imgNode = new Image()
imgNode.src = imgSrc
document.body.appendChild(imgNode)

