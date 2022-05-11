//const express = require('express')
import express from 'express';

const app = express()
//..을 이용해서 상위 폴더에 접근 가능하도록 설정 가능
app.use(express.static('../client/build'));

app.get('/', function (req, res) {
    //__dirname == /Users/euno/Desktop/Codes/reactMarketClone/server
    //res.sendFile(__dirname + '/build/index.html');
    //..을 이용해서 상위폴더의 파일을 보내줄 수 있다. 
    res.sendFile('../client/build/index.html');
})

app.listen(3001, () => {
    console.log('server is running');
})