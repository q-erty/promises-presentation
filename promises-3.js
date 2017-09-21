const axios = require('axios')

const getWord = () => {
   return axios.get('http://localhost:5050/')
}

const getDistance = (word, word2) => {
    return axios
        .get('http://localhost:5050/dist', {params: { word, word2 }})
}

const main = async () => {
    word = (await getWord()).data
    console.log(word)

    word2 = (await getWord()).data
    console.log(word2)

    distance = (await getDistance(word, word2)).data
    console.log(distance)
}

main()
