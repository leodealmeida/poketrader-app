# poketrader-app

## What is
PokeTrader is a calculator to check if a Pokemon trade is fair or not.

## How it works
Add some pokemons by its name. 

Inside calculator page, add from 1 to 6 pokemons you want to play around. 
Any combination is valid. The status will change any time you add or 
remove a pokemon, indicating if the combination is fair or not.

A page showing all the trades is available at history tab.

## Project setup
To run the project locally first run
```
yarn install
```

Then create a file named ``` .env.development ``` and paste de following content 
```
VUE_APP_POKETRADER_API_URL="your_running_back_end_url:PORT/api"
```

### Compiles and hot-reloads for development
Use the following command to start the development server
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
