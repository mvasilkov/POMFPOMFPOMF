#!/usr/bin/env node
var express = require('express')
var logger  = require('morgan')
var favicon = require('serve-favicon')
var app     = express()

app.enable('strict routing')
app.disable('x-powered-by')
app.use(logger('dev'))

app.get('/index.html', function (req, res) {
    res.redirect(301, '/')
})

app.use(favicon(__dirname + '/pub/favicon.ico'))
app.use(express.static(__dirname + '/pub'))

function run() {
    var port = process.env.PORT || 8086
    var server = app.listen(port, function () {
        console.log('POMF =3 on port %d', server.address().port)
    })
}

if (require.main === module) run()
else module.exports = app
