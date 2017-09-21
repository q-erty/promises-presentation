const axios = require('axios')

const getWord = () => {
   return axios.get('http://localhost:5050/')
}

const main = async () => {
    word = (await getWord()).data
    console.log(word)
}

main()
