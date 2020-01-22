# TVDB

## Project Results: Preview
![demo](frontend/src/assets/tv-show-watchlist.gif)

## The Ask


### Database Schema
Therefore, you should have the following tables and columns:

TV Show
id
title - The movie's title.
genre_id - Movies have one genre. A genre can be applied to many movies.
img_url - A nice image for the movie - perhaps a poster?


Genres
id
name - The genre name. Say, action, or comedy.

Comments
id
text - What the comment said.
tvshow_id - Comments can only be applied to one movie. A movie can have many comments.

Users
id
username

Create a .sql file to create these tables and seed this database with at least 14 shows, 5 genres, 7 users and 15 comments.

API Endpoints
Largely, your API endpoints are up to you as a developer. However, based on a consideration of what we'll need on the frontend, a few potential needs become apparent. While we may be able to process some of this stuff on the frontend, we'll probably want API endpoints that:

Fetch all shows.
Fetch all information and comments for a specific show.


Frontend Routes
You should have the following routes on your frontend:

/ - A homepage that reads: "Welcome to TV Show Watchlist" in an h1 tag.
Also renders a navigation bar across the top of the page, visible on every subsequent route.
Navbar should have the following links: "Home," "All TV Shows," "Users", "Create".

/shows - A page that fetches and renders all shows, including their image URLs and genres.


### Styling
Besides the specific instructions outlined here, styling is up to you.

