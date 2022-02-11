# MoviePoky

MoviePoky is a website where you can search for different movies reviews with articles and other information for movies, also you can search for Pokemon-Go characters information.

## Live demo [_here_](https://gsg-g11.github.io/MoviePoky/)

## Table of Contents

* [Purpose](#purpose)
* [Features](#features)
* [User Stories](#user-stories)
* [User Journey](#user-journey)
* [Screenshots](#screenshots)
* [Technologies Used](#technologies-used)
* [APIs](#apis)
* [Usage](#usage)
* [Project Status](#project-status)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
## Purpose <span id="purpose"></span>

- The purpose of building `MoviePoky` is to practice fetching data from APIs using `XMLHttpRequest`, use generic functions when development and practice callbacks.

## Features <span id="features"></span>

- Simple UI
- Responsive
- Search movies reviews
- Search Pokemon-go characters
- Handling server and user errors (404 error page, 500 error page)
- Cover all user-input cases (Handle non-valid search input)
- Clean Code
- Reusable Code

## User Stories <span id="user-stories"></span>

### As a user:

- I want to see a landing page with a brief description of your website.
- I want to be able to search for movies reviews based on New York-Time API.
- I want to see a preview image for the movie I’m searching for.
- I want to see the title of the article reviewing that movie.
- I want to see the rating for the movie I’ve searched for.
- I want to see the name of the director for the movie I’m searching for.
- I want to see a loading screen when fetching data from external APIs.
- I want to see a summary of the article I’m going to read.
- I want to see the release date for the article I’m going to read.
- I want to be able to visit the article link.
- I want to be able to search for Pokemon-Go characters and see their information.
- I want to see the character image.
- I want to be able to view the name, height, weight, abilities moves, and stats of that character.
- I want to be able to search for Pokemon-Go characters based on their ordering number or based on their name.

## User Journey <span id="user-journey"></span>

- When opening the `MoviePoky` website you'll be faced with a brief description for the website and buttons for choosing to search for movies or Pokemon-Go characters.
- When choosing **Movies**, you'll see a search field, you can search for any movie you'll like to read articles about.
- While you're waiting for the data to load you'll see a loading screen which will disappear when the data is ready.
- If the movie you've searched for is not available, a Popup window will appear to inform you that we don't have what you've searched for.
- And when choosing **Pokemons**, you'll see a search field, you can search for any pokemon-go character you like _you can search by number or by name_.
- You'll see the same loading screen in the movies search page.
- And if you search for the not available characters you'll get a Popup window informing you that we don't have what you've searched.

## Screenshots <span id="screenshots"></span>

> Note: all screenshots are from a device which is 900px wide

- Home Page

![](https://i.imgur.com/zgNKvAg.png)

- Movies Page

![](https://i.imgur.com/4Si50GM.jpg)

- Pokemon Page

![](https://i.imgur.com/j1nL40h.png)

- Loading Screen

![](https://i.imgur.com/ZhrxceW.png)

- Not Found Data

![](https://i.imgur.com/s5oQ3oI.png)

## Technologies Used <span id="technologies-used"></span>

- HTML5
- CSS3
- JavaScript (APIs, XMLHttpRequest)

## MoviePoky uses <span id="apis"></span>

- [NewYork time API](https://developer.nytimes.com/docs/movie-reviews-api/1/overview) for fetching movies articles.
- [PokyAPI](https://pokeapi.co/) for fetching Pokemon-Go characters information.

## Usage <span id="usage"></span>

- git clone `https://github.com/GSG-G11/MoviePoky.git`
- Change your current directory `cd ./MoviePoky`
- Open it with your favorite text editor `code .`
- Enjoy Contributing to the **MoviePoky** website

## Project Status <span id="project-status"></span>

Project is: **_Completed_**

## Acknowledgements <span id="acknowledgements"></span>

- This project was inspired by [Roger Ebert](https://www.rogerebert.com/) website.
- This project was based on [Week 3 - Code Academey](https://github.com/GSG-G11/curriculum/tree/main/coursebook/week-3).

## Contact <span id="contact"></span>

Created by [@zaher-aa](https://github.com/zaher-aa), [@DeenaAlghazali](https://github.com/DeenaAlghazali) - feel free to contact us!
