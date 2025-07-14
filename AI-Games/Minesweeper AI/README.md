# Minesweeper AI

A classic Minesweeper game with an AI solver. Place your own mines and watch the AI solve the board using logic and search algorithms.

## How to Run
1. Open `index.html` in your web browser (no server required).
2. All assets are included locally; just double-click the file or open with your browser.

## Requirements
- No installation required. Works in any modern web browser (Chrome, Firefox, Edge, Safari, etc.).
- No external libraries or frameworks needed.

## How to Play
- Click cells to place mines on the board (up to 99 mines).
- When ready, click the **Set Mines** button to start the AI solver.
- The AI will attempt to solve the board, revealing safe cells and flagging mines.
- Watch the AI's progress in real time. The game ends when all safe cells are revealed and all mines are flagged.
- Click the smiley face to reset and play again.

## Screenshot
![Game Screenshot](public/Game%20Screenshot.png)

## Algorithm Used
- **Logic-Based Deduction**: The AI uses standard Minesweeper logic to deduce safe cells and mine locations based on revealed numbers and flagged cells.
- **Breadth-First Search (BFS)**: For revealing connected zero-cells and their neighbors efficiently.
- **Random Guessing**: If the AI cannot deduce a safe move, it will make a random guess among unrevealed cells.

The combination of logic and search allows the AI to solve most boards without human intervention. 