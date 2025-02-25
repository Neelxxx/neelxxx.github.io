const output = document.getElementById('output');
const input = document.getElementById('input');

// Maze setup
const maze = [
    ['#', '#', '#', '#', '#', '#', '#'],
    ['#', ' ', ' ', ' ', '#', ' ', '#'],
    ['#', ' ', '#', ' ', '#', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', '#', '#', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', '#', '#', '#', '#', '#', '#'],
];

let playerPosition = { x: 1, y: 1 }; // Starting position
const exitPosition = { x: 5, y: 5 }; // Exit position

// Display initial maze
displayMaze();

// Handle user input
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        input.value = '';
        handleCommand(command);
    }
});

function handleCommand(command) {
    const directions = ['up', 'down', 'left', 'right'];
    if (command.startsWith('move ')) {
        const direction = command.split(' ')[1];
        if (directions.includes(direction)) {
            movePlayer(direction);
        } else {
            output.innerHTML += `Invalid direction. Use: ${directions.join(', ')}.<br>`;
        }
    } else {
        output.innerHTML += `Unknown command. Try "move [direction]".<br>`;
    }
    output.scrollTop = output.scrollHeight; // Auto-scroll
}

function movePlayer(direction) {
    let newX = playerPosition.x;
    let newY = playerPosition.y;

    switch (direction) {
        case 'up': newY--; break;
        case 'down': newY++; break;
        case 'left': newX--; break;
        case 'right': newX++; break;
    }

    if (maze[newY][newX] === '#') {
        output.innerHTML += `You hit a wall!<br>`;
    } else {
        playerPosition.x = newX;
        playerPosition.y = newY;
        output.innerHTML += `Moved ${direction}.<br>`;
        displayMaze();
        checkWin();
    }
}

function displayMaze() {
    let mazeString = '';
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (x === playerPosition.x && y === playerPosition.y) {
                mazeString += 'P '; // Player
            } else if (x === exitPosition.x && y === exitPosition.y) {
                mazeString += 'E '; // Exit
            } else {
                mazeString += `${maze[y][x]} `;
            }
        }
        mazeString += '<br>';
    }
    output.innerHTML = mazeString;
}

function checkWin() {
    if (playerPosition.x === exitPosition.x && playerPosition.y === exitPosition.y) {
        output.innerHTML += 'Congratulations! You escaped the maze!<br>';
        input.disabled = true;
    }
}