# Framer Typescript Boilerplate

## make it go!
1. `npm install`
2. `gulp`

that's it.

Change the sketch file, it'll update the browser, change typescript, it'll update the browser.

You can throw any third party modules in the modules/ dir and then require them in like you normally would in framer, works perfectly.

ex:
```
let flipCard = require("flipCard")
flipCard.flipCard(frontLayer, backLayer, 1600, "spring(300,20,0)")
```

## notes
1. please note, this is very much a proof of concept, we haven't actually done more than a days worth of testing on it
1. please also note, I haven't finished the typings on everything yet, I'm building those as I go