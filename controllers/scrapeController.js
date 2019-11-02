const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
    scrapeAll: function (req, res) {

        axios.get("https://www.rollingstone.com/charts/songs/").then(function (response) {

            var $ = cheerio.load(response.data);
            console.log('this is hit')

            $(".c-chart__table--top").each(function (i, element) {

                var song = {};

                song.title = $(this)
                    .find('p')
                    .text();
                song.artist = $(this)
                    .find('.c-chart__table--caption')
                    .text();
                song.image = $(this)
                    .find('.c-chart__table--cover')
                    .attr('src')

                // Create a new Song using the `song` object built from scraping
                db.Song.create(song)
                    .then(function (dbSong) {
                        console.log(dbSong);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            });
            res.send("Scrape Complete");
        });
    }
}