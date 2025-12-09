/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// 1. Scale Link 

let scaleLink = document.querySelector('a[href="#frontend"]');

scaleLink.addEventListener('click', function() {

  scaleLink.classList.add('scaleLink');
})

scaleLink.addEventListener('animationend', function() {
  scaleLink.classList.remove('scaleLink')
})


// 2. Translate Link

let translateLink = document.querySelector('a[href="#and"]');

translateLink.addEventListener('click', function() {

  translateLink.classList.add('translateLink');
})

translateLink.addEventListener('animationend', function() {
  translateLink.classList.remove('translateLink');
})


// 4. TranslateX link

let translatexLink = document.querySelector('a[href="#development"]');

translatexLink.addEventListener('dblclick', function() {

  translatexLink.classList.add('translatexLink');
})

translatexLink.addEventListener('animationend', function() {
  translatexLink.classList.remove('translatexLink');
})


// 5. Focus link

let focusLink = document.querySelector('a[href="#sprint-5"]');

focusLink.addEventListener('focus', function() {

  focusLink.classList.add('focusLink');
})

focusLink.addEventListener('animationend', function() {
  focusLink.classList.remove('focusLink');
})





