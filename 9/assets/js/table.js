//#2
class tableCountries {
    constructor() {
        this.bindListeners()
    }
    bindListeners() {
        let table = document.getElementById('countries');
        let titles = table.getElementsByTagName('th');

        titles[0].addEventListener('click', () => {
            this.sortById();
        });
        titles[1].addEventListener('click', () => {
            this.sortByName();
        });
        titles[2].addEventListener('click', () => {
            this.sortByLastName();

        });
    }
    createTable(table) {
        let data = document.getElementById('countries').getElementsByTagName('tbody')[0];
        data.innerHTML = '';
        for (let el of table) {
            data.append(el);
        }
        console.log('finish sort')
    }
    sortById() {
        let data = document.getElementById('countries').getElementsByTagName('tbody')[0];
        let arr = data.getElementsByTagName('tr')
        arr = Array.from(arr).sort((rowA, rowB) => {
            return (parseInt(rowA.cells[0].innerText) > parseInt(rowB.cells[0].innerText) ? 1 : -1);

        })
        this.createTable(arr);
    }
    sortByName() {
        let data = document.getElementById('countries').getElementsByTagName('tbody')[0];
        let arr = data.getElementsByTagName('tr')
        arr = Array.from(arr).sort((rowA, rowB) => {
            return (rowA.cells[1].innerText > rowB.cells[1].innerText ? 1 : -1);
        })
        this.createTable(arr);
    }
    sortByLastName() {
        let data = document.getElementById('countries').getElementsByTagName('tbody')[0];
        let arr = data.getElementsByTagName('tr')
        arr = Array.from(arr).sort((rowA, rowB) => {
            return (rowA.cells[2].innerText > rowB.cells[2].innerText ? 1 : -1);
        })
        this.createTable(arr);
    }
}
let table = new tableCountries();