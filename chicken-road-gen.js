// arrays to infitive markers, verbs, prepositions, definitive articles, determinators and Nouns

const infitiveMarker = ['to']
const verbs = ['get','run','jump','build','eat','become','think']
const prepositions = ['in','on','a','at','from','under','over','between','through','with','before','after']
const definitiveArticle = ['the']
const determinators = ['the','an','a']
const nouns = ['city','side','computers','mountain','house','horse','homelander','side','idea','child','okavango','butcher','river']


// word randomiser

const randomiser =(arr) =>{
    randomindex =Math.floor(Math.random()* arr.length)

    let randomWord = arr[randomindex]
    return randomWord
}





