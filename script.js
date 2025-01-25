// Get the computer choce
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

// Get the human choice
function getHumanChoice() {
    while (true) {
        const choice = prompt("Your choice: ").toLowerCase();

        // Input validation
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            alert("Error! Invalid choice.");
        }
    }
}

// Play an entire game
function playGame() {
    // Declare score variables
    let humanScore = 0;
    let computerScore = 0;

    // Play a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats rock!");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log("You Win! Rock beats scissors!");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("You Win! Paper beats rock!");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("You Lose! Scissors beats paper!");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log("You Lose! Rock beats scissors!");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("You Win! Scissors beats paper!");
        } else {
            console.log("It's tie!");
        }
        
        console.log(`Human: ${humanScore}\t|\tComputer: ${computerScore}`);
    }

    // Play five rounds 
    for (let i = 0; i < 5; i++) {
        // Declare selection variables
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // Check final score
    if (humanScore > computerScore) {
        console.log("Congratulations! You won!");
    } else if (humanScore < computerScore) {
        console.log("You lose! Better luck next time!");
    } else {
        console.log("It's tie!");
    }
}

playGame();