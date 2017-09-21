const axios = require('axios')

const getWord = () => {
   return axios.get('http://localhost:5050/')
}

const getDistance = (word, word2) => {
    return axios
        .get('http://localhost:5050/dist', {params: { word, word2 }})
}

const main = async () => {
    responses = await Promise.all([getWord(), getWord()])

    word = responses[0].data
    word2 = responses[1].data

    console.log(word)
    console.log(word2)

    distance = (await getDistance(word, word2)).data
    console.log(distance)
}

main()
