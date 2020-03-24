var choicePlayer1 = null;
var choicePlayer2 = null;

function theGame(choice) {
    if (choicePlayer1 === null) {
        choicePlayer1 = choice;
        document.getElementById("playerID").innerText = " 2";
    } else if (choicePlayer2 === null) {
        choicePlayer2 = choice;
        document.getElementById("game").style.display = "none";

        /*Outcome calc*/
        let won = null;
        switch (choicePlayer1) {
            case 'rock':
                switch (choicePlayer2) {
                    case 'rock':
                        won = 3;
                        break;
                    case 'paper':
                        won = 2;
                        break;
                    case 'scissors':
                        won = 1;
                        break;
                }
                break;
            case 'paper':
                switch (choicePlayer2) {
                    case 'rock':
                        won = 1;
                        break;
                    case 'paper':
                        won = 3;
                        break;
                    case 'scissors':
                        won = 2;
                        break;
                }
                break;
            case 'scissors':
                switch (choicePlayer2) {
                    case 'rock':
                        won = 2;
                        break;
                    case 'paper':
                        won = 1;
                        break;
                    case 'scissors':
                        won = 3;
                        break;
                }
                break;
        }

        switch (won) {
            case 1:
                /*Player 1 won*/
                document.getElementById("winner").innerText = "Player 1 won!";
                break;
            case 2:
                /*player 2 won*/
                document.getElementById("winner").innerText = "Player 2 won!";
                break;
            case 3:
                /*tie*/
                document.getElementById("winner").innerText = "It is a tie.";
                break;

        }
        document.getElementById("ending").style.display = "block";

    }
}