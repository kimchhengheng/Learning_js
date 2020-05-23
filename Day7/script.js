let userScore = 0
let computerScore =0
// const is constant canot change the value after
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('comp-score')
// recommend to _ for dom var and span it the tage
//query selector return the first one meet , can select by id class tag data etc
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result > p ") // get the p inside the result class
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
// cast the dom mean we store all the variable that we are need
// when we click on the r p s it gonna compare with computer that have the random value of that then output the score and result
// we can call div of choices and add eventlistener by array or add indidual since we get one by one already
// when you click we should call the function to compute the click and computer then update the score than result
// we gonna change the background of the function that call 
/* 
<p id="test">    This element    contains <span>an inner span</span>. </p>
document of p
innerText: "This element contains an inner span." :point_left: Just the text, trimmed and space-collapsed.
innerHtml: " This element     contains <span>an inner span</span>. " :point_left: All spacing and inner element tags.
textContent: " This element     contains an inner span. " :point_left: Spacing, but no tags.
*/
function main(){
    rock_div.addEventListener('click', function() {
        // console.log("hey clicked on rock")
        // () => game("r")
        game("r")
    })
    paper_div.addEventListener('click', function() {
        // console.log("hey clicked on paper")
        game("p")
    })
    scissors_div.addEventListener('click', function() {
        // console.log("hey clicked on scissors")
        game("s")
    })

}
function win(user, comp){
    userScore++
    // console.log("win")
    // console.log(userScore)
    userScore_span.innerHTML = userScore
    computerScore_span.innerText = computerScore
    // console.log(user + ": " +comp)
    const smallUserWord = "user".fontsize(3).sub()
    const smallCompWord = "comp".fontsize(3).sub()
    result_div.innerHTML =`${convertToword(user)}${smallUserWord} beats ${convertToword(comp)}${smallCompWord} . You Win!`
    // ``templete string for ES 6
    // in case of win r p s we have to change the back ground of it as well as in lose and draw 
    document.getElementById(user).classList.add('green-glow')
    setTimeout(function() {document.getElementById(user).classList.remove('green-glow')}, 500)
    //set time out time in ms how long you wait before  perform the first argument 3000 mean 3ms
    // so it mean add the class then after 1 ms remove that class
    // ES 6 setTimeout( ()=> document.getElementById(user).classList.remove('green-glow'), 300)
    // make it back to white by set time up in js
    // we gonna add class when it win ? should we remove the old or not
}


function convertToword(letter){
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    return "Scissors"
}

function lose(user, comp){
    computerScore++
    // console.log("lose")
    // console.log(computerScore)
    userScore_span.innerHTML = userScore
    computerScore_span.innerText = computerScore
    const smallUserWord = "user".fontsize(3).sub()
    const smallCompWord = "comp".fontsize(3).sub()
    result_div.innerHTML =`${convertToword(user)}${smallUserWord} lose to ${convertToword(comp)}${smallCompWord} . You lose!`
    document.getElementById(user).classList.add('red-glow')
    setTimeout(function() {document.getElementById(user).classList.remove('red-glow')}, 500)
}
function draw(user, comp){
    // console.log("draw")
    // console.log("user "+ userScore+ "comp" + computerScore)
    const smallUserWord = "user".fontsize(3).sub()
    const smallCompWord = "comp".fontsize(3).sub()
    result_div.innerHTML =`${convertToword(user)}${smallUserWord} equals ${convertToword(comp)}${smallCompWord} . It's a draw!`
    document.getElementById(user).classList.add('yellow-glow')
    setTimeout(function() {document.getElementById(user).classList.remove('yellow-glow')}, 500)

}
function game(userChoice){
    // console.log(userChoice)
    const computerChoice = getComputerChoice()
    // console.log(userChoice + computerChoice)
    switch( userChoice + computerChoice) {
        //switch case is compare one by one so we can keep all the win together since if one is execute it continue but the other two canot be true
        //so it just gonna skip until we can break
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break

    }

}
function getComputerChoice() {
    const choices = ['r','p','s']
    // random number from 0 to n just *n because randome get the maximum 0.9999 then if 0.9999*n is less than n
    // console.log(parseInt(Math.random()*3))
    const randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber]
}

main()

