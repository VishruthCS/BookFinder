# 📚 Book Finder Application

Book Finder is a clean, responsive, and user-friendly web application
designed to help users discover books. Built as a solution to a
take-home challenge, this app allows users to search for books by title
or author, or browse through popular categories to find their next read.
The primary user persona, "Alex," is a college student who needs a quick
and efficient way to look up book information.

✨ **Live Demo** \[https://book-finder-kappa-five.vercel.app\]

## Features

-   **Dynamic Search**: Search for books by title or author using the
    Open Library API.
-   **Category Filtering**: Browse pre-defined popular categories like
    Science Fiction, Fantasy, Mystery, and more.
-   **Visual Results**: View search results in a clean grid layout with
    book covers, titles, and authors.
-   **Default View**: The application loads with a curated list of
    "Classic Literature" to engage the user immediately.
-   **Responsive Design**: A mobile-first design that works seamlessly
    on desktops, tablets, and smartphones.
-   **User Feedback**: Clear loading and error states to keep the user
    informed.

## 🛠️ Technology Stack

-   **Framework**: React (bootstrapped with Vite)
-   **Styling**: React Bootstrap & Bootstrap 5
-   **API**: Open Library Search API

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on
your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

-   [Node.js](https://nodejs.org/) (which includes npm)

### Installation

Clone the repository:

``` bash
git clone [[(https://github.com/VishruthCS/BookFinder.git)]]
```

Navigate to the project directory:

``` bash
cd book-finder-app
```

Install NPM packages:

``` bash
npm install
```

Run the development server:

``` bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the
next available port).

## 📂 Project Structure

The project follows a standard React application structure:

    book-finder-app/
    ├── public/
    ├── src/
    │   ├── components/         # Reusable React components
    │   │   ├── BookCard.jsx
    │   │   ├── CategoryFilter.jsx
    │   │   ├── ResultsGrid.jsx
    │   │   └── SearchBar.jsx
    │   │
    │   ├── App.css             # Custom styles for App component
    │   ├── App.jsx             # Main application component (state management & logic)
    │   ├── index.css           # Global styles
    │   └── main.jsx            # Application entry point
    │
    └── README.md

## ✅ Challenge Requirements Met

This project successfully fulfills the requirements of the take-home
challenge by:

-   **Interpreting the User Need**: The application is built
    specifically for the "Alex" persona, focusing on easy search and
    discovery.
-   **Using the Specified Tech Stack**: The app is built with React,
    styled with a CSS framework (React Bootstrap), and fetches data from
    the specified public API.
-   **Implementing a User-Friendly UI/UX**: The interface is clean,
    responsive, and provides clear feedback to the user.
