//#3
class resizeBlock {
    constructor() {
        this.buildHtml()
        this.isDown = false;
    }
    buildHtml() {
        let container = document.createElement('div');
        container.className = 'container';
        let div = document.createElement('div');
        div.className = 'text__area'
        div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem nulla pharetra diam. Sem nulla pharetra diam sit amet. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Facilisis gravida neque convallis a cras semper. Interdum velit euismod in pellentesque massa placerat duis ultricies. Scelerisque viverra mauris in aliquam. Sed adipiscing diam donec adipiscing tristique risus nec. Turpis tincidunt id aliquet risus feugiat in ante. Vitae semper quis lectus nulla. Eleifend mi in nulla posuere sollicitudin. Etiam erat velit scelerisque in dictum non consectetur. At lectus urna duis convallis convallis tellus. Ut eu sem integer vitae justo eget magna fermentum. Feugiat pretium nibh ipsum consequat nisl.'
        container.append(div);

        let button = document.createElement('div');
        button.className = 'button'
        button.id = 'resize'
        button.addEventListener('mousedown', (e) => {
            e.preventDefault()
            this.isDown = true;

        })
        document.addEventListener('mouseup', (e) => {
            e.preventDefault()
            this.isDown = false;
        })

        document.addEventListener('mousemove', (e) => {
            e.preventDefault()
            if (this.isDown) {
                this.resizeBlock(e)
            }
        })
        container.append(button);
        document.body.append(container);
    }

    resizeBlock(e) {
        let btn = document.getElementById('resize')
        let width = btn.parentElement.offsetWidth;
        let height = btn.parentElement.offsetHeight;

        btn.parentElement.style.width = width + e.movementX + 'px';
        btn.parentElement.style.height = height + e.movementY + 'px';
    }
}
let block = new resizeBlock();