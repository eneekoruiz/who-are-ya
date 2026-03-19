# Who Are Ya? - Footballer Guessing Game

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-DOM_Manipulation-E34F26?style=for-the-badge&logo=html5&logoColor=white)

A front-end web application inspired by the popular game "Who Are Ya?". Players have to guess a hidden footballer each day based on attributes like nationality, league, team, position, age, and squad number. 

This project was developed for the **Web Systems** course, achieving a final grade of **9.7/10**.

## Core features

* **Daily Game Logic:** A unique player is selected every day based on epoch calculations, ensuring all users get the same challenge simultaneously.
* **Interactive UI:** Features a dynamic autocomplete search bar with real-time text matching and team logo rendering.
* **State Persistence:** Uses `localStorage` to save game progress, allowing users to close the browser and resume their session later.
* **Statistics Tracking:** Automatically tracks win streaks, failure rates, and generates a dynamic win-distribution bar chart modal.
* **Responsive Styling:** Built with Tailwind CSS, featuring custom animations (reveal, pulse, jiggle), high-contrast modes, and dynamic color-coding for hints (correct/present/absent).

## Architecture & Code Structure

The application is built entirely in Vanilla JavaScript (Single Page Application architecture) to maximize performance and demonstrate core DOM manipulation skills:

1. **Orchestration (`main.js` & `rows.js`):** Handles the main game loop, attribute comparison logic, and the staggered animation pipeline for revealing hints.
2. **Data Layer (`loaders.js`):** Asynchronously fetches player databases and daily solutions from static JSON files using the Fetch API.
3. **UI Modules:** Separated logic for autocomplete (`autocomplete.js`) and modal portals (`fragments.js`).
4. **Data Scraping (`js/scraping/`):** Includes academic exercises demonstrating how to integrate and extract data from external REST APIs (e.g., `football-data.org`).

## What I learned

This project was an excellent deep dive into native browser APIs. I mastered complex DOM manipulation, asynchronous data fetching (`Promise.all`), and handling client-side state securely with `localStorage`. Furthermore, it helped me understand how to structure a modular JavaScript application without relying on heavy frameworks like React or Vue, while keeping the UI snappy and responsive using Tailwind CSS.
