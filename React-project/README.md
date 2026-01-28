# React + Vite
useState → store data
useEffect → run code when something changes

Search → input box

Loading → loading animation

MovieCard → each movie display

| Component | Role     | Real-life    |
| --------- | -------- | ------------ |
| App.jsx   | Brain    | Manager      |
| Search    | Input    | Keyboard     |
| MovieCard | Display  | Movie poster |
| Loading   | Feedback | Waiting sign |


 Visual Data Flow (SUPER IMPORTANT)

User types "Avengers"
        ↓
Search.jsx updates searchTerm
        ↓
App.jsx (state updated)
        ↓
fetchMovies("Avengers")
        ↓
TMDB API returns movies
        ↓
updateSearchCount("Avengers", movie)
        ↓
appwrite.js
        ↓
Appwrite Database (stored)
        ↓
getTrendingMovies()
        ↓
App.jsx
        ↓
Trending Movies UI


