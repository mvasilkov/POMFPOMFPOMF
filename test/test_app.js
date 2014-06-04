var assert  = require('assert')
var request = require('supertest')
var app     = require('../app')
var req     = request(app)

describe('app', function () {
    function eq(a, b) { assert.strictEqual(a, b) }

    it('has favicon.ico', function (done) {
        req
            .get('/favicon.ico')
            .expect('content-type', 'image/x-icon')
            .expect('content-length', '1150')
            .expect(200, done)
    })

    it('has robots.txt', function (done) {
        req
            .get('/robots.txt')
            .expect('content-type', 'text/plain; charset=UTF-8')
            .expect('content-length', '24')
            .expect(200, done)
    })

    it('must not use X-Powered-By header', function (done) {
        req
            .get('')
            .end(function (err, res) {
                eq(res.get('x-powered-by'))
                done(err)
            })
    })

    it('redirects index.html', function (done) {
        req
            .get('/index.html')
            .expect('location', '/')
            .expect(301, done)
    })
})
