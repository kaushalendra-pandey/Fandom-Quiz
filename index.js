const readLineSync = require("readline-sync")

let score = 0

const questionsLevel1 = [
    {
        Question : "Where was Shahrukh born?",
        Answer: "Delhi"
    },
    {
        Question : "How many child does he have?",
        Answer: "3"
    },
    {
        Question : "IPL team owned by him? (Short-form will work!)",
        Answer: "KKR"
    },
    
]

const questionsLevel2 = [
    {
        Question : "Name of his bunglow?",
        Answer: "Mannat"
    },
    {
        Question : "On which film is he working now?",
        Answer: "Pathan"
    },
    {
        Question : "What is the name of his production house>",
        Answer: "Red chillies"
    }
]

const greet = () => {
    let name = readLineSync.question("HEY!, What is your name?  ")
    console.log(`Hey! ${name}. So glad you are here...Are you ready for a quiz on Shahrukh Khan?`)

    let response = readLineSync.question("Press Y for YES and N for definitely yes!   ")

    if(response === "N") {
        console.log("See! I am a big Shahrukh Khan Fan, and I wont leave without you taking the quiz.. So please, The quiz is starting 😎")
    }


    showQuestions()
}

const displaySingleQuestion = (questions,scoreToAdd) => {
    
    questions.map((quest) => {
        let ans = readLineSync.question(`${quest.Question}   `)
        if(ans.toLowerCase() === quest.Answer.toLowerCase()) {
            console.log("Whoa!")
            score += scoreToAdd
        }else{
            console.log("Nope!")
        }
        console.log("Your Score :",score)
    })

    return score
}

const showQuestions = () => {
    console.log("Welcome to Level-1 of the quiz. Each correct answer adds 1 to your score.")

    // score of the player!
    
    // display level-1 questions:
    score += displaySingleQuestion(questionsLevel1,1)

    // message before entering level-2
    console.log("Welcome to Level-2 of the quiz. Each correct answer adds 2 to your score.")

    // display level-2 questions:

    score += displaySingleQuestion(questionsLevel2,2)    

    showScore()
}

const showScore = () => {
    if(score == 0){
        console.log("Looks like we cant be freinds 😶")
    } else if(score === questionsLevel1.length  + questionsLevel2.length*2){
        console.log("Tum mere KARAN ho kya? 😯")
    }
}


greet()