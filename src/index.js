// ES5 import (CommonJS, transpiling not needed)
var messages = require('./components/messages')
var style = require('./css/styles.css')

// ES6 import
import Button  from './components/button'
import Kitten  from './components/imgKitten'
import Logo  from './components/imgLogo'
import { multiply }  from './components/mathStuff'

import $ from 'jquery'

// ES6 code (will be transpiled via babel loader)
// var newMessage = () => (`<p>${messages.hi} ${messages.event}</p>`)
// var newMessage = () => (Button.button)
// Button.attachEl()
/*
var newMessage = () => (`
    <p>
        ${messages.hi} ${messages.event}
        ${Kitten}
        ${Logo}
    </p>
`)
*/
//const newMessage = () => (multiply(3, 3))

/*
var newMessage = (`
    <div class="${style.box}">
        DEV: ${DEVELOPMENT.toString()}<br/>
        PROD: ${PRODUCTION.toString()}
    </div>
`)
*/

var app = document.getElementById('app')
var newMessage = (`
    <div id="menu">
        <button id="loadPage1">loadPage1</button>
        <button id="loadPage2">loadPage2</button>
    </div>
    <div id="content">
        <h1>Index</h1>
    </div>
`)
app.innerHTML = newMessage
document.getElementById('loadPage1').addEventListener('click', () => {
    // ES6
    System.import('./page1')
        .then(pageModule => {
            document.getElementById('content').innerHTML = pageModule.default
        })
})
document.getElementById('loadPage2').addEventListener('click', () => {
    // ES6
    System.import('./page2')
        .then(pageModule => {
            document.getElementById('content').innerHTML = pageModule.default
        })
})

$('#app').css('background-color', 'yellow')

// This will be injected in the build module.
if(DEVELOPMENT && module.hot) {
    module.hot.accept()
}

if(true) {
    console.log('the IF will be eliminated on tree shaking, because this is ALWAYS true')
}
