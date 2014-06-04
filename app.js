#!/usr/bin/env node
var express = require('express')
var morgan  = require('morgan')
var favicon = require('serve-favicon')
var app     = express()

app.enable('strict routing')
app.disable('x-powered-by')

app.use(morgan('dev'))
app.use(favicon(__dirname + '/pub/favicon.ico'))
app.use(express.static(__dirname + '/pub'))

var port = process.env.PORT || 8086
var server = app.listen(port, function () {
    console.log('POMF =3 on port %d', server.address().port)
})