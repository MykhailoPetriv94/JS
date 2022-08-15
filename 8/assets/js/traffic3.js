//#3
document.title = 'TRAFFIC LIGHTS'
let appearance = document.createElement('div')
appearance.setAttribute('class', 'traffic')

let topColor = document.createElement('p')
topColor.setAttribute('class', 'lights')
topColor.setAttribute('id', 'top_color')

let centerColor = document.createElement('p')
centerColor.setAttribute('class', 'lights')
centerColor.setAttribute('id', 'center_color')

let bottomColor = document.createElement('p')
bottomColor.setAttribute('class', 'lights')
bottomColor.setAttribute('id', 'bottom_color')

appearance.appendChild(topColor)
appearance.appendChild(centerColor)
appearance.appendChild(bottomColor)
document.body.appendChild(appearance)

let btn = document.createElement('button')
btn.setAttribute('type', 'button')
btn.setAttribute('class', 'btn')
btn.innerText = 'SWITCHER'
document.body.appendChild(btn)

let countClick = 0

btn.onclick = () => {
    countClick++
    console.log(countClick)
    if (countClick === 1) {
        document.getElementById('top_color').setAttribute('id', 'red')
    }
    if (countClick === 2) {
        document.getElementById('red').setAttribute('id', 'top_color')
        document.getElementById('center_color').setAttribute('id', 'yellow')
    }
    if (countClick === 3) {
        document.getElementById('yellow').setAttribute('id', 'center_color')
        document.getElementById('bottom_color').setAttribute('id', 'green')
    }
    if (countClick>3) {
        countClick = 1
        document.getElementById('green').setAttribute('id', 'bottom_color')
        document.getElementById('top_color').setAttribute('id', 'red')
    }
}