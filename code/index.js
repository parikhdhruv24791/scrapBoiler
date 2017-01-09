'use strict'
const request = require('request');
const cheerio = require('cheerio');
const scrapeIt = require("scrape-it");

list.forEach(id=>{
    request("http://",  (err, res, body) => {
        let $ = cheerio.load(body);
        let data = [];
        var a = $(".companyName").html();
    		console.log(a);
        /*a.each((i,re) => {
        	data.push({
        		name: resp.children[0].alt,
        		link: resp.href,
        		pic: children[0].src
        	})
    		console.log(JSON.stringify(re));
        });*/
    });
})

/*scrapeIt("http://www.onlinecoursesupdate.com/", {
	deals :{
		listItem: ".post"
		
        , data: {
        	content: {
	            selector: ".post-title.entry-title a" 
	          , attr: "a"
	        }
    	}
	}
}).then(page => {
    console.log(page);
});

*/