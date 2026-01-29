1️⃣ The Big Picture

The app has three layers:

1. Frontend (React) – User interacts here

        * Shows search box, trending movies, all movies
        * Debounces input to prevent too many API calls
        * Calls backend logic (Appwrite) to track searches

2. Backend / BaaS (Appwrite) – Handles data

        * Stores user search metrics (searchTerm, count, poster_url, movie_id)

        * returns trending movies (top searched)

3. Third-party API (TMDB) – Provides movie data

        * Fetch movies via API

        * TMDB returns movie info (title, poster, ID)

Q.Why we need each layer?

* React: Fast, interactive UI

* Appwrite: No need to build your own server

* TMDB API: Don’t store movie info yourself


2️⃣ Frontend (React) Concepts

a) State Management

* searchTerm: updates instantly as user types

* debouncedSearchTerm: waits until user stops typing (500ms) to avoid spam API calls

* movieList: stores search results

* trendingMovies: stores top searched movies from Appwrite

* isLoading & errorMessage: UI state

const [searchTerm, setSearchTerm] = useState('');
const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
const [movieList, setMovieList] = useState([]);
const [trendingMovies, setTrendingMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState('');


b) Debouncing

* Problem: Every keystroke triggers a network request → too many calls

* Solution: Debounce → wait until user stops typing for N ms

useEffect(() => {
  const handler = setTimeout(() => {
    setDebouncedSearchTerm(searchTerm);
  }, 500);

  return () => clearTimeout(handler);
}, [searchTerm]);

Concept: “Wait 500ms after last keystroke → then trigger search”


c) Fetching TMDB Movies

* TMDB API has search and discover endpoints

* Use API key (v3 recommended for simple fetch)

        * query = '' → fetch popular movies

        * query = 'avatar' → search for “avatar”


d) Updating Appwrite

* Every search updates Appwrite metrics table

        await updateSearchCount(query, data.results[0]);


Logic:

* Check if searchTerm already exists in collection

* If yes → increment count

* If no → create a new row with count = 1


3️⃣ Backend / Appwrite Concepts

a) Appwrite as Backend-as-a-Service (BaaS)

Provides database, auth, storage, functions, and APIs

No need to write Express/Node server

You just call SDK functions from React

b) Databases & Collections

* Database: container for collections

* Collection (metrics): like a table → stores documents

Columns:

        Field	         Type
        searchTerm	 string
        count	         int
        movie_id	 int
        poster_url	 string

* Permissions: set preferences to create, update, delete, and edit so anyone can read/write for public apps


c) Trending Movies Logic

* Fetch top 5 most searched:

const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
  Query.limit(5),
  Query.orderDesc("count")
]);


* Query.orderDesc("count") → get trending movies by search count


d) Error Handling

* Always wrap with try/catch:

        try {
        await database.createDocument(...);
        } catch (error) {
        console.error('Appwrite error:', error);
        }

* It helps identify issues like permissions, wrong IDs, or network issues


4️⃣ Connecting Frontend → Appwrite

* Import functions:

import { getTrendingMovies, updateSearchCount } from './appwrite.js';


* Call in React effects:

        useEffect(() => {
        fetchMovies(debouncedSearchTerm);
        if (debouncedSearchTerm) updateSearchCount(debouncedSearchTerm, movie);
        }, [debouncedSearchTerm]);

        useEffect(() => {
        loadTrendingMovies(); // fetch top 5
        }, []);


5️⃣ The Complete Flow

* User types → searchTerm updates

* After 500ms → debouncedSearchTerm updates

* fetchMovies(debouncedSearchTerm) calls TMDB → updates movieList

* updateSearchCount logs the search to Appwrite

* getTrendingMovies fetches top searches → updates trendingMovies UI


✅ TL;DR

This app now demonstrates full-stack skills:

* React for frontend UI & state management

* TMDB API integration for external data

* Appwrite BaaS for backend storage and analytics

* Debounce, async fetch, and error handling

* Trending metrics logic


🧠 Full Architecture Diagram (Conceptual)
┌────────────────────┐
│        USER        │
│ (Types movie name) │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│   React Frontend   │
│  (App.jsx, Search) │
│                    │
│ • searchTerm state │
│ • debounce logic   │
│ • fetchMovies()    │
└───────┬─────┬──────┘
        │     │
        │     │
        │     │
        ▼     ▼
┌───────────────┐   ┌─────────────────────┐
│   TMDB API    │   │      Appwrite       │
│ (Movie Data)  │   │  (Backend / DB)     │
│               │   │                     │
│ /search/movie │   │ metrics collection │
│ /discover     │   │ • searchTerm        │
│               │   │ • count             │
└───────┬───────┘   │ • movie_id          │
        │           │ • poster_url        │
        │           └─────────┬──────────┘
        │                     │
        ▼                     ▼
┌────────────────────────────────────────┐
│                UI                      │
│ • Movie list from TMDB                 │
│ • Trending movies from Appwrite        │
└────────────────────────────────────────┘