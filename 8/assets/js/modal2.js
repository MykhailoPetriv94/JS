//#2
class modalWindow {
    constructor(text){
        this.text = text;
        this.content = document.getElementById('container');
        this.id = 'main_window';
        this.htmlPage();
    }

    htmlPage() {
        let modal = document.createElement('div');
        modal.setAttribute('style', 'display: none; opasity: 0;');
        modal.setAttribute('id', this.id);
        modal.innerText = this.text;
        this.content.appendChild(modal);

        let openBtt = document.createElement('button');
        openBtt.innerText = 'OPEN'
        this.content.appendChild(openBtt);
        openBtt.onclick = () => this.openWindow();

        let closeBtt = document.createElement('button');
        closeBtt.innerText = 'X'
        modal.appendChild(closeBtt);
        closeBtt.setAttribute('class', 'close_button');
        closeBtt.onclick = () => this.closeWindow();
    }

    openWindow(){
        let modal = document.getElementById(this.id);
        this.open(modal);
    }

    closeWindow(){
        let modal = document.getElementById(this.id);
        this.close(modal);
    }
    close(element) {
        var op = 1;
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 5);
    }
    open(element) {
        console.log(element);
        var op = 0.1;
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 5);
    }
}
let modal = new modalWindow('Modal Window');