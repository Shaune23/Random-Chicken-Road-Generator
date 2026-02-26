// arrays to infitive markers, verbs, prepositions, definitive articles, determinators and Nouns

const infitiveMarker = ['to']
const verbs = ['get','run','jump','build','eat','become','think','obliterate','discombobulate','swoop','transfigue','catapult']
const prepositions = ['in','on','a','at','from','under','over','between','through','with','before','after']
const definitiveArticle = ['the']

const nouns = ['city','side','computers','mountain','house','horse','homelander','side','idea','child','okavango','butcher','river','volcano','feather','pocket','storm','engine','shovel']


// word randomiser

const randomiser =(arr) =>{
    const randomindex =Math.floor(Math.random()* arr.length)

    let randomWord = arr[randomindex]
    return randomWord
}



// joke maker 



const makeJoke =()=>{
    console.log(`${randomiser(infitiveMarker)} ${randomiser(verbs)} ${randomiser(prepositions)} ${randomiser(definitiveArticle)}  ${randomiser(nouns)}`) 
}



// joke starter 


console.log('Why did the chicken cross the road ?, [type why to find out]')


const startJoke =(str)=>{

    if(str === 'why'){
        return makeJoke()


    }

}

startJoke('why')