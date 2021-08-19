'use strict'

const titbit = require('titbit')
const fs = require('fs')

const app = new titbit()

app.get('/bundle.js', async c => {
    c.res.body = fs.readFileSync('../part2/dist/bundle.js').toString('utf-8')
})

app.get('/', async c => {
    c.res.body = fs.readFileSync('../part2/dist/index.html').toString('utf-8')
})


app.run(3680)