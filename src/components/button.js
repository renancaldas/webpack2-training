// ES6 module standard (need to transpile to ES5)
const Button = {
    button: '<button id="myButton">Press me</button>',
    attachEl: () => {
        document.getElementById('myButton').addEventListener('click',() => {console.log('clicked!')})
    }
}

export default Button
