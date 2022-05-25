const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Greeting app
app.get('/greeting/:name', (req, res) => {
    //console.log(req.params)
    res.send('Hello '+ req.params.name + '! It\'s great to see you!')
})

//tip calculator app
function tip (total, tipPercentage){
    return (total * tipPercentage)/100;
}
app.get('/tip/:total/:tipPercentage', (req, res) =>{
    console.log(req.params)
    res.send('tip: ' + tip(req.params.total, req.params.tipPercentage))
    
})

//Show Magic 8 Balls app
function magic_ball (response) {
  
    return response[Math.floor(Math.random()*response.length)]
}
let response = ["It is certain", "It is decidedly so", "Without a doubt"];

app.get('/magic/ ', (req, res) => {
    //console.log(req.params)
    console.log(req.query)
    res.render('template', {title:'Magic 8 Balls', message:magic_ball(req.query.response)})
})

//Fibonacci
app.get("/:num", (req, res) => {
    const fiboCheck = (num) => {
        let numTwo = 5 * (num * num) + 4
        let numThree = 5 * (num * num) - 4
        if(Math.sqrt(numTwo) % 1 === 0 || Math.sqrt(numThree) % 1 === 0){
            res.send("Very good. It is Fibonacci.")
        } else {
            res.send("I can tell this is not a fibonacci number.")
        }
    }
    fiboCheck(parseInt(req.params.num))
});

app.listen(port, () => {
    console.log('Listening')
})



