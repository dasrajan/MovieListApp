# React Native Project

This is a React Native project that demonstrates how to build a movie information app that displays a list of movies from The
Movie Database (TMDb) API. The app shows top movies for each year and users can filter by
genre, the app also loads top movies from previous / next years as the user scrolls through the
list.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Assignment Instructions](#assignment-instructions)
- [What's Covered](#whats-covered)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
- **Watchman**: Install Watchman using Homebrew (macOS only): `brew install watchman`.
- **React Native CLI**: Install the React Native CLI globally: `npm install -g react-native-cli`.
- **Android Studio**: Install Android Studio and set up the Android SDK.
- **Xcode** (macOS only): Install Xcode from the Mac App Store.

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/dasrajan/MovieListApp.git
   cd MovieListApp

2. Install dependencies
   ```sh
   npm install

## Running the App

1. Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

2. Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


## Project Structure
MovieListApp/
├── __tests__/           # Test files
├── android/             # Android project files
├── ios/                 # iOS project files
├── node_modules/        # Node.js modules
├── src/                 # Source files
│   ├── components/      # React components
│   ├── navigation/      # Navigations setup
│   ├── screens/         # Different routing pages
│   ├── services/        # API call config and setups
│   ├── styles/          # colors and fonts for application
│   ├── types/           # interfaces definitions
│   ├── utils/           # Helper functions
│   └── ...              # Other files
├── .gitignore           # Git ignore file
├── app.json             # Application configuration
├── App.tsx              # Main app start page
├── babel.config.js      # Babel configuration
├── jest.config.js       # JEST configuration
├── package.json         # NPM package file
└── README.md            # This readme file

## Assignment Instructions
You are tasked with building a movie information app that displays a list of movies from The
Movie Database (TMDb) API. The app shows top movies for each year and users can filter by
genre, the app also loads top movies from previous / next years as the user scrolls through the
list.
Use this Figma prototype as a reference and feel free to design and develop based on
your preferences.
Requirements
● Layout and UI
○ Create custom UI components for the app, using React, Vue, or any suitable
JavaScript library for reusability.
○ Display a list of movies sorted in descending order of popularity.
○ Show the movie title, image, genre, cast, director, and a short description related
to the movie in each information card.

● Default page load state
○ Load a total of only 20 movies for each year (Image shows only 8 movies per
year, that’s for reference only, please load 20 movies per year)
○ By default, when a user lands on the page, display a list of movies of the year
2012
○ Implement smooth scrolling behavior to load more movies as the user scrolls in
any direction i.e load movies of previous year when user scrolls up and load
movies of next year when user scrolls down until the current year.
○ As and when the user scrolls and movies are added to the list, make sure that
this interaction is smooth and doesn’t cause any jitters.

● API
○ Use the following URL to query a list of movie
https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784
d157207b4d&sort_by=popularity.desc&primary_release_year=2023&page=1&vot
e_count.gte=100
The api_key param in the above URL is part of the GET request, please do not
change it.
○ To fetch a movie of a specific year, use primary_release_year filter in the above
query. Start from 2012, and fetch the previous or next year with respect to the
direction in which the user scrolls the list.
○ Vote_count_gte = 100 means fetch movies which have received at least 100
votes for popularity. The API returns the movie list sorted by popularity score.
Feel free to change this value based on the movies you want to show. Please
keep the minimum value at 100 to see relevant movies.
○ You can find the API documentation here to change the properties accordingly as
needed.

● Genre Filter
○ Provide a filter UI that allows users to filter movies by genre.
○ Fetch genres from this API and show genres as filters
○ When a user selects one or more genres, the list should only display movies of
the selected genres. Please note that whenever a user selects a genre, a fresh
list of movies should be fetched from the API for that particular genre.

● Code Quality
○ Write well-structured and maintainable code.
○ You can use React, Vue, or any library to create your own reusable components
○ Avoid using any pre-built component libraries (e.g., Bootstrap, Tailwind, etc.) for
creating UI components.
● Bonus (Optional)
○ Implement this project in React Native instead of a web app (You have to submit
only one project which is either a web app or a React Native app, bonus point is
for creating a React Native app)
○ Ensuring smooth scrolling even when more and more movies are loaded in the
DOM.
○ Implement a search bar which searches for the movie based on the search string
and displays an infinite loading list of movies which matches the search.
○ Use TypeScript for enhanced type safety and code quality.

Points to remember
● Feel free to assume UI / UX flows from the figma prototype, just make sure that the UI is
usable.
● Provide the public GitHub repository link containing the source code of the project.
● Include a README file explaining how to run the project and any additional details you'd
like to provide.
● Provide a short list of requirements you have covered and not covered in the project
README itself.
● No code will be evaluated if the project doesn’t run after following the steps in README
or doesn’t have a README at all.
● Feel free to reach out to your recruiter in case of any doubts.
P.S - In case the tMDP API doesn’t work for you
This is a common issue where tMDP is blocked for certain users in India, you can
read more about this here
As a fix you can try switching your DNS servers or just use a VPN to access it.
Let us know if the issue still persists for you.

## What's Covered
1. Top movies by each year starting from 2012
2. User can filter by genre and do the search by text input at the top header
3. Reusable custom components, no third party library for styling 
4. Loads top movies from previous / next years as the user scrolls through the
list.
5. Movies sorted in descending order of popularity.
6. Load a total of only 20 movies for each year
7. Load movies of previous year when user scrolls up and load
movies of next year when user scrolls down until the current year.
8. Well-structured and maintainable code.
9. Search Bar implementation
10. Used Typescript
11. Error Boundary


### Demo App video link
https://drive.google.com/file/d/1eUxyS1GLw75spdO57U8X9fOqj1DGKdAw/view?usp=sharing

### App Link
https://drive.google.com/file/d/1Nu-KekxBaeEH-5gLEtEQIuk7ERImMrLg/view?usp=sharing
