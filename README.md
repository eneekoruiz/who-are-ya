# Who Are Ya? - Football Player Guessing Game

Browser-based daily football player guessing game inspired by Wordle and Who Are You.

## Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+), HTML5, Tailwind CSS
- **Persistence:** Web Storage API (LocalStorage)
- **Data Source:** Static JSON dataset of top European leagues

## Architecture & Key Decisions

- **Deterministic Daily Solution:** Selects the daily target player using a deterministic date-based hashing function, ensuring all players get the same daily puzzle.
- **Client-Side Hint Evaluation:** Compares user guesses against the target player across nationality, league, club, position, and age with visual color-coded feedback (match, partial/higher/lower, mismatch).
- **Fuzzy Autocomplete Search:** Fast local search filtering player names, aliases, and clubs without remote API latency.
- **Progress & Streak Persistence:** Tracks completed puzzles, guess history, and win streaks in LocalStorage.

## Local Setup

### Prerequisites

- Any static HTTP server or modern web browser

### Running Locally

```bash
git clone https://github.com/eneekoruiz/who-are-ya.git
cd who-are-ya

# Serve locally with any static server (e.g. npx serve or Python)
npx serve .
# or
python -m http.server 8000
```
