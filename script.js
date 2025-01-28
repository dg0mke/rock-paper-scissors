// DOM Variables
const choices = document.querySelectorAll(".choice");
const humanChoice = document.querySelector(".human-choice");
const computerChoice = document.querySelector(".computer-choice");
const humanPoints = document.querySelector(".human-points");
const computerPoints = document.querySelector(".computer-points");
const roundNumber = document.querySelector(".round");
const restartButton = document.querySelector(".restart");

// Get the computer choice
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

// Play an entire game
function playGame() {
    // Declare initial values
    let round = 0;
    let humanScore = 0;
    let computerScore = 0;

    roundNumber.textContent = "Round: 0";
    restartButton.style.visibility = "hidden";

    // Play a single round
    function playRound(human, computer) {
        humanPoints.textContent = "Your points: 0";
        computerPoints.textContent = "Computer's points: 0";

        if (human === "rock" && computer === "paper") {
            computerScore++;
            humanPoints.textContent = `Your points: ${humanScore}`;
            computerPoints.textContent = `Computer's points: ${computerScore}`;
        } else if (human === "rock" && computer === "scissors") {
            humanScore++;
            humanPoints.textContent = `Your points: ${humanScore}`;
            computerPoints.textContent = `Computer's points: ${computerScore}`;
        } else if (human === "paper" && computer === "rock") {
            humanScore++;
            humanPoints.textContent = `Your points: ${humanScore}`;
            computerPoints.textContent = `Computer's points: ${computerScore}`;
        } else if (human === "paper" && computer === "scissors") {
            computerScore++;
            humanPoints.textContent = `Your points: ${humanScore}`;
            computerPoints.textContent = `Computer's points: ${computerScore}`;
        } else if (human === "scissors" && computer === "rock") {
            computerScore++;
            humanPoints.textContent = `Your points: ${humanScore}`;
            computerPoints.textContent = `Computer's points: ${computerScore}`;
        } else if (human === "scissors" && computer === "paper") {
            humanScore++;
            humanPoints.textContent = `Your points: ${humanScore}`;
            computerPoints.textContent = `Computer's points: ${computerScore}`;
        } else {
            humanPoints.textContent = `Your points: ${humanScore}`;
            computerPoints.textContent = `Computer's points: ${computerScore}`;
        }
    }

    // Play five rounds
    function playMultipleRounds() {
        round++;
        roundNumber.textContent = `Round: ${round}`;
        
        if (round === 5) {
            choices.forEach((choice) => {
                choice.disabled = true;
            });

            restartButton.style.visibility = "visible";

            restartButton.addEventListener("click", () => {
                window.location.reload();
            });
        }
    }

    // Play game using corresponding buttons
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            humanChoice.textContent = "You choose: ";
            computerChoice.textContent = "Computer choose: ";

            const humanSelection = choice.id;
            const computerSelection = getComputerChoice();

            humanChoice.textContent += humanSelection;
            computerChoice.textContent += computerSelection;
        
            playRound(humanSelection, computerSelection);
            playMultipleRounds();
        });
    });
}

playGame();