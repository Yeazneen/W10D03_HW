const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('99 bottles of beer on a wall <a href="/98"> take one down, pass it around</a>')
})

app.get('/:bottles', (req, res) => {
    let {bottles} = req.params
    if(bottles > 1){
        res.send(bottles + ' bottles of beer on the wall ' + ` <a href="/${bottles - 1}"> take one down, pass it around</a>`)
    }else if(bottles == 1) {
        res.send(bottles + ' bottle of beer on the wall ' + ` <a href="/${bottles - 1}"> take one down, pass it around</a>`)
    } else {
        res.send('0 bottles of beer on the wall ' + ' <a href="/"> start over</a>')
    }
})

app.listen(3000, ()=> {
    console.log ('listening')
})