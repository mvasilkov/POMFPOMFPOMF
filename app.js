#!/usr/bin/env node
var express = require('express')
var app = express()
var port = process.env.PORT || 8086
var server = app.listen(port, function () {
    console.log('POMF =3 on port %d', server.address().port)
})
