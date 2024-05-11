const vander1 = document.getElementById('vander1');
const vander2 = document.getElementById('vander2');
const btn1player1 = document.getElementById('btn1player1');
const btn2player1 = document.getElementById('btn2player1');
const btn1player2 = document.getElementById('btn1player2');
const btn2player2 = document.getElementById('btn2player2');
const finish = document.getElementById('finish');

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let playerName1 = "";
let playerName2 = "";

function getPlayersNames() {
    playerName1 = prompt("Digite o nome do Lutador 1:");
    playerName2 = prompt("Digite o nome do Lutador 2:");
    
    if (!playerName1) {
        playerName1 = "Lutador 1";
    }
    if (!playerName2) {
        playerName2 = "Lutador 2";
    }

    updateScore();
}

window.addEventListener('load', getPlayersNames);

btn1player1.addEventListener('click', () => {
    scorePlayer1 += 1;
    updateScore();
});

btn2player1.addEventListener('click', () => {
    scorePlayer1 += 2;
    updateScore();
});

btn1player2.addEventListener('click', () => {
    scorePlayer2 += 1;
    updateScore();
});

btn2player2.addEventListener('click', () => {
    scorePlayer2 += 2;
    updateScore();
});

finish.addEventListener('click', () => {
    if (scorePlayer1 > scorePlayer2) {
        vander1.classList.add('winner');
        vander2.classList.remove('winner');
        alert(`O Vanderley falou que o vencedor foi ${playerName1} com ${scorePlayer1} pontos!`);
    } else if (scorePlayer2 > scorePlayer1) {
        vander2.classList.add('winner');
        vander1.classList.remove('winner');
        alert(`O Vanderley falou que o vencedor foi ${playerName2} com ${scorePlayer2} pontos!`);
    } else {
        vander1.classList.remove('winner');
        vander2.classList.remove('winner');
        alert("O Vanderley determinou que deu empate!");
    }
});

function updateScore() {
    vander1.textContent = `${playerName1}: ${scorePlayer1} pontos`;
    vander2.textContent = `${playerName2}: ${scorePlayer2} pontos`;
}
