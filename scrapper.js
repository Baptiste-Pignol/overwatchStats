/**
 * Created by Baptiste on 02/06/2016.
 */

var request = require('request-promise');
var cheerio = require('cheerio');
var BASE_URL = 'https://overwatchtracker.com/profile/pc/eu/';




/**
 * get a page with url and wrap it with cheerio
 * @param url
 */
var getPage = function getPage(url) {
    var options = {
        uri: url,
        transform: function (body) {
            return cheerio.load(body);
        }
    };
   return request(options);
};

/**
 * get the player stats page wrap with cheerio
 * @param pseudo the pseudo of a player
 */
var getMainPage = function getMainPage(pseudo) {
    return getPage(BASE_URL + pseudo);
};

/**
 * get the player heroes stats page wrap with cheerio
 * @param pseudo the pseudo of a player
 */
var getHeroesPage = function getHeroesPage(pseudo) {
    return getPage(BASE_URL + pseudo + '/heroes');
};

/**
 * get the player stats for one hero page wrap with cheerio
 * @param pseudo the pseudo of a player
 * @param heroName the name of a hero
 */
var getHeroPage = function getHeroesPage(pseudo, heroName) {
    return getPage(BASE_URL + pseudo + '/heroes/' + heroName);
};




