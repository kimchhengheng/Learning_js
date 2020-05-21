const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement= document.getElementById('answer-buttons')

let shuffledQuestios, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestios = questions.sort(() =>Math.random()-.5)
    currentQuestionIndex =0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
// set next question will remove the state first then call the show question
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestios[currentQuestionIndex])
}
// show question would show the question by access the list with key question
// then loop through the answer create the button and show the answer
// if the answer is true set the button attribute of correct to true
function showQuestion(question) {
    questionElement.innerText =question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    // if there is a first child remove the first child 
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct 
    //change the body back ground depend on the correct if it true or false 
    // then change the button by that too 
    // if the true the body and the button will have correct class 
    // if is does not have the dataset correct 
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestios.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide')
    }
    else {
        // change the start button to restart and make it visible 
        // Every time show question first we hide the next then 
        // then it could change if the select Answer is remove hide or not 
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

    
}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// it is the key value pair list 
// key is quesiont value is answers which is anther list
const questions = [
    {
        question: 'what is 2 +2 ',
        answers: [
            {text: '4' , correct: true},
            {text: '22', correct: false}
        ]
    },
    {
        question: 'what is 2 * 6 ',
        answers: [
            {text: '12' , correct: true},
            {text: '20', correct: false}
        ]
    },
    {
        question: 'Am i stupid?',
        answers: [
            {text: 'Yes' , correct: true},
            {text: 'No', correct: true}
        ]
    },
    {
        question: 'what is 6 /2  ',
        answers: [
            {text: '3' , correct: true},
            {text: '20', correct: false}
        ]
    },
    {
        question: 'what is 6 -2  ',
        answers: [
            {text: '4' , correct: true},
            {text: '20', correct: false}
        ]
    }

]
