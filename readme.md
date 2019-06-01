To start, download trazenlae. trazenlae declares the async function `Trazenlae` for use. 

# Config
Trazenlae dosen't actually do the translation for you. You have to make a JSON file, with seperate translations for each language. 
The JSON file has the following format:
```js
{
  "es": { //English translation
    "#test": "Hello World" //Whatever has an id of "test" gets its text set to "Hello World"
  },
  "en": { //And now for spanish...
    "#test": "Hola Mundo"
  }
}
```
# Use
Now, you can load the JSON file into Trazenlae via:
```js
const myTrazen = await Trazenlae("YOUR_JSON_PATH_HERE.json");
```
Make sure your declaration is inside an async function!
Now, you can translate the page into one langauge or another with:
```js
myTrazen.langify("es") // Translate to english
myTrazen.langify("en") // Translate to spanish
```

Enjoy!
