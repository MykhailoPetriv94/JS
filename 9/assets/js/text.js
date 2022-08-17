//#1
let title = document.createElement('h1')
    title.innerText = 'TEXT EDITOR'
    title.classList.add('title__h1')
    title.setAttribute
    document.body.appendChild(title);

let subtitle = document.createElement('span')
    subtitle.innerText = 'Ctrl + E - ENTER YOUR TEXT / Ctrl + S - SAVE YOUR TEXT'
    subtitle.classList.add('subtitle__h3')
    subtitle.setAttribute
    document.body.appendChild(subtitle);

let block = document.createElement('div')
    block.classList.toggle('block')
    block.setAttribute('style','width: 250px; height: 100px; border: 1px solid grey; margin-top: 20px; margin-left: 100px ;border-radius: 5px;position: relative;display: flex;box-sizing: border-box;')
    document.body.appendChild(block);

let block__text = document.createElement('span')
    block__text.classList.toggle('block__text')
    block__text.setAttribute('style', 'z-index:1; text-wrap:wrap; width: 100%; font-family: Arial, sans-serif; font-size: 20px; padding: 3px')
    block__text.innerText = 'ENTER YOUR TEXT' 
    block.appendChild(block__text)

let textArea = document.createElement('textarea')
    textArea.setAttribute('id', 'textArea');
    textArea.setAttribute('style','position: absolute; width:100%; height: 100%; z-index:-1;; border-radius: 5px; border: 0;display:none; font-family: Arial, sans-serif; font-size: 20px; padding: 3px ')
    block.appendChild(textArea);

document.addEventListener('keydown', function(event){
    if(event.code == 'KeyE' && (event.ctrlKey || event.metaKey)){
        let area = document.getElementById('textArea');
        area.value = block__text.innerText;
        area.classList.add('text__note')
        area.setAttribute('style','position: absolute; width:100%; height: 100%; z-index:2; border-radius: 5px; border: 0; outline: none ;font-family: Arial, sans-serif; font-size: 20px; padding: 3px ')
        area.focus()
        event.preventDefault()
        area.addEventListener('keydown', function(event){
            if(event.code == 'KeyS' && (event.ctrlKey || event.metaKey)){
                block__text.innerText = area.value
                area.style.display = 'none'
                event.preventDefault()
            }
        })
    }
}) 