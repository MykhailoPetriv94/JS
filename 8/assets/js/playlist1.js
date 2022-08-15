//#1
var playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

let head = document.createElement('h1')
console.log(head)
head.innerText = 'PLAYLIST'
head.style.fontFamily = 'Franklin Gothic Medium'
head.style.letterSpacing = '10px'
head.style.textAlign = 'left'
head.style.margin = '60px'
 
document.body.appendChild(head)

let list = document.createElement('ol')

playList.forEach(element => {
    let number = document.createElement('li')
    number.style.margin = '30px'

    let song = document.createElement('span')
    song.innerText = `${element.song}`
    song.style.fontStyle = 'bold'
    song.style.fontWeight = '300'
    song.style.marginRight = '15px'

    let author = document.createElement('span')
    author.innerText = `(${element.author})`
    author.style.fontStyle = 'serif'
    author.style.fontWeight = '600'

    number.appendChild(song)
    number.appendChild(author)
    list.appendChild(number)
})

document.body.appendChild(list)