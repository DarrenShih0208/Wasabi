# wasabi-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Detailed project structure


    │  index.html                               // Entry page               
    │  package.json                             // Record some commands and dependencies as well as brief project description information
    │  README.md                                // Project description (how to use, what methods are there to wait)
    │  
    ├─build                                         //Webpack development and production environment configuration
    ├─config                                        //Webpack development and production environment configuration parameters
    ├─src                                           //Build script directory
       │  App.vue                                   //Entrance main component
       │  main.js                                   //Entry main js file
       │  
       │          
       ├─components                                 //Component catalog
       │  │              
       │  └─APP.vue                                 //Router main files
       │          about.vue                         //About the page under the APP, the default is the home page
       │          order.vue                         //Order pagination under APP
       │          │
       │          └─ordertype.vue                   //Introduce three input modes: text/radio/select
       │          suggest.vue                       //Feedback page under APP
       │                
       └─store                                      //Vuex state management
             state.js
             mutations.js
             actions.js


## Work flow introduction
一.Startup project:
1. Directly run instructions```(npm run dev)```

二.Project structure and function:
components:All pages are spliced ​​one by one by the components inside.
store:That is vuex,Mainly store data management status, data sharing between components can be passed through store.
router:The main path structure is set here

三.項目
1. component，The main path configuration APP starts with the path, but the home page points to about
2. The transfer of data can be managed through vuex. This project is the order page of the component. The above pattern is the data obtained from the Fake API via vuex.


# Wasabi
# Wasabi
