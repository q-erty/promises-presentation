const fs = require('fs')
const levenshtein = require('levenshtein')
const app = require('express')()

const words = fs.readFileSync('./words.txt').toString().split('\n')

const randomWord = () => {
    return words[(Math.random() * words.length) | 0]
}

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send(randomWord())
    }, 3000)
})

app.get('/dist', (req, res) =>{
    l = new levenshtein(req.query.word, req.query.word2)
    setTimeout(() => {
        res.send(l.distance.toString())
    }, 3000)
})

app.listen(5050, () => {
    console.log("http://localhost:5050/")
})
