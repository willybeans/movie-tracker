# Movie tracker

## The Task

With so many different streaming services available it's hard to keep track of every movie that you want to watch. Your task is to create an app that makes it a little easier. Use this movie-tracker project as a starting point and create a simple app that allows users to search for a movie by title and "save" the movies they want to watch.

## Details

This project is a shell [NextJS](https://nextjs.org/) app for you to use as a the starter to add your movie tracking functionality.

In order to search for movies we'll need an API to pull the data. We'll use the [Open Movie DB](http://www.omdbapi.com/). The API key to use is `4bb16985`. ex query: http://www.omdbapi.com/?apikey=4bb16985&i=tt0114576

This repo already contains a few helpful libraries like [aphrodite](https://github.com/Khan/aphrodite) for styling, and [axios](https://github.com/axios/axios) for requesting data from the API.

Feel free to add anything else you think you need, but this project should be relatively light on dependencies.

To get started you'll need node and npm installed after that you can run `npm install` and then `npm run dev` to start the project.

## Requirements

Users can:
* Search for movies by title using the Open Movie DB API.
* The page should "infinite scroll" through the movies if there are more than one page of results.
  * Check [here](https://github.com/thebuilder/react-intersection-observer) for hints but using this method isn't required
* Save movies from the list of returned movies.
* View all saved movies and sort the list order (title, year, saved time).
	* **Note:** for this demo saved movies don't need to persist past a single session

React is constantly changing and we like to stay up to date, so please no class components only functional components with hooks.

Morever we have set up eslint to help you use hooks and other React best practices, so don't ignore it.

This isn't meant to take longer than a few hours. If you get stuck on anything feel free to email us at nick@fitt.co or ian@fitt.co
