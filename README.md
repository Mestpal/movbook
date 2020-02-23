# movbook

App using [Nuxt](https://nuxtjs.org/guide#what-is-nuxtjs-) and [The Movie DB API](https://www.themoviedb.org/documentation/api?language=en-US) to create a test e-comerce project

## Technologies

Nuxt is a framework that follows the VUE guidelines and include the following tools to archieve that:

- Vue 2
- Vue Router
- Vuex (included only when using the store option)
- Vue Server Renderer (excluded when using mode: 'spa')
- Vue Meta

For a faster components development, the [Vuetify](https://vuetifyjs.com/en/) UI framework is in use. Thank to this, the only components to develop are the specifics ones for this project

## Project functions

In resume this app will show the contents requested to an API. In this case will be movies thanks to The Movie DB database.

The main navigation in in three levels:

- A main page where you can see all the available movies genres.
  ![movbook1](https://raw.githubusercontent.com/Mestpal/movbook/master/assets/images/movbook1.png)
  
- After click in a genre, you will see all the movies available for that genre, sort by the original title.
  ![movbook2](https://raw.githubusercontent.com/Mestpal/movbook/master/assets/images/movbook2.png)
  
- If you click in a movie you will see the details page of that movie

To make it easy the search of a certain film, a search component in the tool-bar allows you to make a custom search

A infinite scroll was added to load the movies available for a genre or search, thanks to this the load is made progresively.

Also a cart system was added, you can add films to the cart clicking the button in the page where the movie details are shown. To access to the cart you only need to click the cart icon in the tool-bar

## Build Setup

For detailed installation explanation, check out [Nuxt.js installation doc](https://nuxtjs.org/guide/installation).

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# run the tests
$ npm run test
```

## Configuration

This project has a config file in the config folder, in there you have to put the apikey of The Movie DB API if you want to run correctly this project.

Please follow these steps if you do not have an apikey: [Get your apikey for The Movie DB API](https://developers.themoviedb.org/3/getting-started/introduction)
