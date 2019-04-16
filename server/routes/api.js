const Baby = require("../models/Baby")
const Guest = require("../models/Guest")
const express = require('express')
const router = express.Router()
const request = require('request')

//use with '$$app_token' in url:
const APIKey = 'wzY5Y2RBM2TJzY1kVPinohmeM'
const APIKeySecret = 'ZzjKaTTBQzf6YWCy7NjZqx5h4Ak2Zusimbaz'

let popularNames = []
let unPopularNames = []

router.get('/', function (req, res) {
    console.log('SOMEONE IS HERE')
    res.end()
})

router.get('/babyNames/:firstLetter/:popularity', function (req, res) {
    let firstLetter = req.params.firstLetter
    firstLetter.toLowerCase()
    let popularity = req.params.popularity
    // console.log(firstLetter)
    
    request(`https://data.cityofnewyork.us/resource/25th-nujf.json/`, function (err, response) {
        let babyNamesNotFiltered = JSON.parse(response.body)
        let babyNames = babyNamesNotFiltered.map(b => { return { name: b.nm, gender: b.gndr, popularity: b.rnk } })
            .filter(b => b.name.slice(0, 1).toLowerCase() == firstLetter)
            .filter((obj, pos, arr) => {
                return arr.map(mapObj =>
                    mapObj.name).indexOf(obj.name) == pos;
            });


        //low ranked names:
        popularNames = []
        unPopularNames = []
        if (popularity === 'popular') {
            let names = babyNames.filter(b => b.popularity < 45)
            popularNames.push(names)
            res.send(popularNames)
        }
        else if(popularity === 'unpopular') {
            let names = babyNames.filter(b => b.popularity > 45)
            unPopularNames.push(names)
            res.send(unPopularNames)
        }
        else{
            console.log('no popularity defined')
            res.end()
        }


        // console.log('')
        // console.log(foods)
        // res.send(babyNames)
    })

})

// router.get('/guests', function(req, res){
//     Guest.find()
// })



module.exports = router