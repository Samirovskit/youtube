'use strict';              
const express = require('express');
const app = express(); 

//💔💙💚 AMAZING GOOGLE TRENDS SCRAPER WITH TOKEN BASED ON GOOGLE_TRENDS_API NPM USING HTTPS💚💙💔//

//for google trends autocomplete            link ===  https://nodejsgithub.herokuapp.com/SCRAPER0?🔰Data=bitcoin?hl=en-US&tz=-60🔸Marker=bitcoin↕Data=فتاة?hl=ar&tz=-60🔸Marker=فتاة↕Data=fille?hl=fr&tz=-60🔸Marker=fille↕Data=film?hl=fr&tz=-60🔸Marker=film↕Data=boy?hl=fr&tz=-60🔸Marker=boy🔰https://trends.google.com/trends/api/autocomplete/
//for google trends Dailt Trends            link ===  https://nodejsgithub.herokuapp.com/SCRAPER0?🔰Data=hl=en-US&tz=-60&geo=AU&ns=15🔸Marker=AU↕Data=hl=fr&tz=-60&geo=FR&ns=15🔸Marker=FR🔰https://trends.google.com/trends/api/dailytrends?
//for google trends Realtimerend            link ===  https://nodejsgithub.herokuapp.com/SCRAPER0?🔰Data=hl=en-US&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0🔸Marker=AU↕Data=hl=fr&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0🔸Marker=FR🔰https://trends.google.com/trends/api/realtimetrends?
//multiple 1K   for TS/GEO/TPC/QRY/EXPLORE  link ===  https://nodejsgithub.herokuapp.com/SCRAPER0?🔰Data=hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60🔸Marker=bitcoin↕Data=hl=fr&tz=-60&req={"comparisonItem":[{"keyword":"fille","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60🔸Marker=fille🔰https://trends.google.com/trends/api/explore?🔰SCPGTTS
//multiple 5K   for TS/GEO                  link ===  https://nodejsgithub.herokuapp.com/SCRAPER0?🔰Data=hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"},{"keyword":"boy","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60🔸Marker=1stfive↕Data=hl=fr&tz=-60&req={"comparisonItem":[{"keyword":"fille","geo":"","time":"today+5-y"},{"keyword":"belle","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60🔸Marker=2ndfive🔰https://trends.google.com/trends/api/explore?🔰SCPGTTS

app.get('/SCRAPER0', (req0, res0) => {
   const https  = require('https');
   const url    = require('url');          
	 var urls = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[1].split("↕").map(function(x){return x.replace('Data=', decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[2]) });  	    
         var i;
	 var responses = [];
         var completed_requests = 0; 
         var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[2];
	 var kind = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[3]
	 const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)}

var htmlEntities = {
    nbsp: ' ',
    cent: '¢',
    pound: '£',
    yen: '¥',
    euro: '€',
    copy: '©',
    reg: '®',
    lt: '<',
    gt: '>',
    quot: '"',
    amp: '&',
    apos: '\''
};

function unescapeHTML(str) {
    return str.toString().replace(/\&([^;]+);/g, function (entity, entityCode) {
        var match;

        if (entityCode in htmlEntities) {
            return htmlEntities[entityCode];
            /*eslint no-cond-assign: 0*/
        } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
            return String.fromCharCode(parseInt(match[1], 16));
            /*eslint no-cond-assign: 0*/
        } else if (match = entityCode.match(/^#(\d+)$/)) {
            return String.fromCharCode(~~match[1]);
        } else {
            return entity;
        }
    });
};
	
	 
for (i in urls) {
	(function(i){
    https.get(encodeURI(urls[i].split('🔸')[0]), function(res) {
    let data = '';
    res.on('data', (chunk) => {data += chunk; });
    res.on('end', () => {
	
	   
		   if(type === 'https://trends.google.com/trends/api/autocomplete/')    { var clean = JSON.parse(data.slice(5)).default.topics.map(function (item) {  return item.title+'☔☉'+item.type}).join('💙💔');
										              responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
											      completed_requests++;
											      if (completed_requests == urls.length) { res0.send(responses);  }
	      }
	    
	           if(type === 'https://trends.google.com/trends/api/dailytrends?')     { var clean  = JSON.parse(data.slice(5)).default.trendingSearchesDays[0].trendingSearches.map(function (item) {  return '🐸🐲'+item.title.query+'☔☉'+item.formattedTraffic+'☔☉'+item.relatedQueries.map(function (item) {  return item.query}).join('💙💔')+'☔☉'+item.articles.map(function (item) {  return item.title+'🔹🍎'+item.timeAgo+'🔹🍎'+item.snippet}).join('💙💔')   }) ;
										              responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
											      completed_requests++;
											      if (completed_requests == urls.length) { res0.send(responses);  }
	      }
	    
	           if(type === 'https://trends.google.com/trends/api/realtimetrends?')  { var clean  = JSON.parse(data.slice(5)).storySummaries.trendingStories.map(function (item) {  return item.articles.map(function (item) {  return item.articleTitle+'☔☉'+item.source+'☔☉'+item.time+'☔☉'+item.snippet}).join('💙💔')})       		
										              responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
											      completed_requests++;
											      if (completed_requests == urls.length) { res0.send(responses);  }
	      }   
	    
	           if(type === 'https://trends.google.com/trends/api/explore?')         { var cookie = res.headers['set-cookie'][0].split(';')[0];
											      https.get({hostname: 'trends.google.com', path: encodeURI(urls[i].split('🔸')[0]).replace('trends.google.com',''), method: 'GET', headers: {'cookie': cookie} }, (res) => {
                                                                                              let data = '';
                                                                                              res.on('data', (chunk) => {data += chunk; });
                                                                                              res.on('end', () => { var td = JSON.parse(data.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                                                                                                                       if(kind === 'SCPGTEXPLORE' || kind === ''){ 
															       responses.push(urls[i].split('🔸')[1]+'💚'+td);
														               completed_requests++;
															       if (completed_requests == urls.length) {res0.send(responses); }
														       }
														  
														  
														        if(kind === 'SCPGTTS'){		
                                                                                                                               https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: filterItems(td, 'timeseries☉{')[0].split('☉')[1], token: filterItems(td, 'timeseries☉{')[0].split('☉')[2],tz: req0.query.tz[0]} })  , (res) => {  
                                                                                                                               let data = '';
															       res.on('data', (chunk) => {data += chunk; });
														               res.on('end', () => {var clean = JSON.parse(data.slice(5)).default.timelineData.map(function (item) {  return item.formattedTime+'☔☉['+item.value+']'}).join('💙💔')
														                                        responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
														                                        completed_requests++;
															                                if (completed_requests == urls.length) {res0.send(responses); }
														                                    });});
															
															}
														   
														   
														   if(kind === 'SCPGTGEO'){		
                                                                                                                               https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/comparedgeo', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: filterItems(td, 'geo_map☉{')[0].split('☉')[1], token: filterItems(td, 'geo_map☉{')[0].split('☉')[2]  ,tz: req0.query.tz[0]} })  , (res) => {  
                                                                                                                               let data = '';
															       res.on('data', (chunk) => {data += chunk; });
														               res.on('end', () => {var clean = JSON.parse(data.slice(5)).default.geoMapData.map(function (item) {  return item.geoName+'☔☉['+item.value+']'}).join('💙💔')
														                                        responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
														                                        completed_requests++;
															                                if (completed_requests == urls.length) {res0.send(responses); }
														                                    });});
															
															}
														   
														   
														   if(kind === 'SCPGTTPC'){		
                                                                                                                               https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: filterItems(td, 'related_topics☉{')[0].split('☉')[1], token: filterItems(td, 'related_topics☉{')[0].split('☉')[2]  ,tz: req0.query.tz[0]} })  , (res) => {  
                                                                                                                               let data = '';
															       res.on('data', (chunk) => {data += chunk; });
														               res.on('end', () => {var clean = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.topic.title+'☔☉'+item.topic.type+'☔☉'+item.value}).join('💙💔')+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.topic.title+'☔☉'+item.topic.type+'☔☉'+item.value}).join('💙💔')   
											                                                                responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
														                                        completed_requests++;
															                                if (completed_requests == urls.length) {res0.send(responses); }
														                                    });});
															
															}
											                                 
																								
															if(kind === 'SCPGTQRY'){		
                                                                                                                               https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  ,tz: req0.query.tz[0]} })  , (res) => {  
                          												       let data = '';
                                                                                                                               res.on('data', (chunk) => {data += chunk; });			     
															       res.on('end', () => {var clean = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value}).join('💙💔')+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value}).join('💙💔')
											                                                                responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
														                                        completed_requests++;
															                                if (completed_requests == urls.length) {res0.send(responses); }
														                                    });});
															
															 };            });});    }   
	    
	    
	    if(type === 'https://www.youtube.com/results?search_query=')  { 
		      let match = data.match(/window\["ytInitialData"]\s*=\s*(.*);+\n/)
    if (!match) match = data.match(/var\s*ytInitialData\s*=\s*(.*);\s*\n/)
    const line = match[0].trim()
    const json = JSON.parse(line.substring(line.indexOf('{'), line.length - 1))
    const result = json
        ['contents']['twoColumnSearchResultsRenderer']['primaryContents']['sectionListRenderer']
        ['contents'][0]['itemSectionRenderer']['contents']
    const amazing = result.filter(video => {
        const type = Object.keys(video)[0].replace('Renderer', '')
         return ['video', 'playlist'].includes(type)
    }).map(video => {
        const type = Object.keys(video)[0].replace('Renderer', '')
        const data = video[type + 'Renderer']
        const identifier = data[type + 'Id']
        if (type === 'video') {
            const isStream = !Object.keys(data).includes('lengthText')
            let length = Number.MAX_VALUE
            if (!isStream) {
                length = 0
                data['lengthText']['simpleText'].split(':').reverse().forEach((value, index) => {
                    const i = Number(value)
                    length += (index === 0 ? i : i * (60 ** index))
                })
            }
            return {
                type: type,
                identifier: identifier,
                uri: 'https://www.youtube.com/watch?v=' + identifier,
                title: data['title']['runs'][0]['text'],
description : data['descriptionSnippet']['runs'][0]['text'],
publishedTime: JSON.stringify(data['publishedTimeText']),
viewCount : JSON.stringify(data['viewCountText']),//.simpleText,   
duration :  JSON.stringify(data['lengthText']),//.simpleText,    
                author: {
                    name: data['ownerText']['runs'][0]['text'],
                    profile: data['channelThumbnailSupportedRenderers']['channelThumbnailWithLinkRenderer']
                        ['thumbnail']['thumbnails'][0]['url'],
                    uri: 'https://www.youtube.com' + data['ownerText']['runs'][0]['navigationEndpoint']
                        ['commandMetadata']['webCommandMetadata']['url']
                },
                length: {
                    ms: isStream ? length : length * 1000,
                    sec: length
                },
                isStream: isStream,
		thumbnails: data['thumbnail']['thumbnails'].slice(-1)[0]
            }
        } 
        else return {
            type: type,
            identifier: identifier,
            uri: 'https://www.youtube.com/playlist?list=' + identifier,
            title: data['title']['simpleText'],
            author: {
                name: data['longBylineText']['runs'][0]['text'],
                uri: 'https://www.youtube.com' + data['longBylineText']['runs'][0]['navigationEndpoint']
                    ['commandMetadata']['webCommandMetadata']['url']
            },
            count: Number(data['videoCount']),
            thumbnails: data['thumbnails']
	
        }
    }) 
			    
			    var clean= amazing.map(function (item) {  return '🔰🐲'+item.type+'☔☉'+item.identifier+'☔☉'+item.uri+'☔☉'+item.title+'☔☉'+item.author.name+'☔☉'+item.thumbnails.url +'☔☉'+item.description+'☔☉'+item.publishedTime+'☔☉'+item.viewCount+'☔☉'+item.duration  })    	   									            								       									       
		               responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
			 completed_requests++;
			if (completed_requests == urls.length) { res0.send(responses);  }
	      }   
		
    
    });});})(i)   ;}
	 });





//💔💙💚AMAZING GOOGLE TRENDS SCRAPER WITH TOKEN BASED ON GOOGLE_TRENDS_API NPM USING REQUEST Or NEEDLE💚💙💔//

//for google trends autocomplete              (Rq Or Ndle)    link ===  https://nodejsgithub.herokuapp.com/SCRAPER1?🔰Data=bitcoin?hl=en-US&tz=-60🔸Marker=bitcoin↕Data=فتاة?hl=ar&tz=-60🔸Marker=فتاة↕Data=fille?hl=fr&tz=-60🔸Marker=fille↕Data=film?hl=fr&tz=-60🔸Marker=film↕Data=boy?hl=fr&tz=-60🔸Marker=boy🔰https://trends.google.com/trends/api/autocomplete/🔰🔰request
//for google trends Daily Trends              (Rq Or Ndle)    link ===  https://nodejsgithub.herokuapp.com/SCRAPER1?🔰Data=hl=en-US&tz=-60&geo=AU&ns=15🔸Marker=AU↕Data=hl=fr&tz=-60&geo=FR&ns=15🔸Marker=FR🔰https://trends.google.com/trends/api/dailytrends?🔰🔰request🔰request
//for google trends Realtimerend              (Rq Or Ndle)    link ===  https://nodejsgithub.herokuapp.com/SCRAPER1?🔰Data=hl=en-US&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0🔸Marker=AU↕Data=hl=fr&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0🔸Marker=FR🔰https://trends.google.com/trends/api/realtimetrends?🔰🔰request
//multiple 1K   for TS/GEO/TPC/QRY/EXPLORE    (Rq)           link ===  https://nodejsgithub.herokuapp.com/SCRAPER1?🔰Data=hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60🔸Marker=bitcoin↕Data=hl=fr&tz=-60&req={"comparisonItem":[{"keyword":"fille","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60🔸Marker=fille🔰https://trends.google.com/trends/api/explore?🔰SCPGTTS🔰request
//multiple 5K   for TS/GEO                    (Rq)           link ===  https://nodejsgithub.herokuapp.com/SCRAPER1?🔰Data=hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"},{"keyword":"boy","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60🔸Marker=1stfive↕Data=hl=fr&tz=-60&req={"comparisonItem":[{"keyword":"fille","geo":"","time":"today+5-y"},{"keyword":"belle","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60🔸Marker=2ndfive🔰https://trends.google.com/trends/api/explore?🔰SCPGTTS🔰request
//for youtube                                 (Rq)           link ===  https://nodejsgithub.herokuapp.com/SCRAPER1?🔰Data=good&page=1🔸Marker=1st page↕Data=good&page=2🔸Marker=2nd page🔰https://www.youtube.com/results?search_query=🔰🔰request

app.get('/SCRAPER1', (req0, res0) => {
   const url    = require('url');  
   const mynpm  = require(decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[4]);	
         var urls = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[1].split("↕").map(function(x){return x.replace('Data=', decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[2]) });  	    
         var i;
	 var responses = [];
         var completed_requests = 0; 
         var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[2];
	 var kind = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[3]	 
	 const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)}

var htmlEntities = {
    nbsp: ' ',
    cent: '¢',
    pound: '£',
    yen: '¥',
    euro: '€',
    copy: '©',
    reg: '®',
    lt: '<',
    gt: '>',
    quot: '"',
    amp: '&',
    apos: '\''
};

function unescapeHTML(str) {
    return str.toString().replace(/\&([^;]+);/g, function (entity, entityCode) {
        var match;

        if (entityCode in htmlEntities) {
            return htmlEntities[entityCode];
            /*eslint no-cond-assign: 0*/
        } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
            return String.fromCharCode(parseInt(match[1], 16));
            /*eslint no-cond-assign: 0*/
        } else if (match = entityCode.match(/^#(\d+)$/)) {
            return String.fromCharCode(~~match[1]);
        } else {
            return entity;
        }
    });
};


for (i in urls) {
	(function(i){      
      mynpm(encodeURI(urls[i].split('🔸')[0]) , (err, res, data) => {
		     
		
	if(type === 'https://trends.google.com/trends/api/autocomplete/')    { var clean = JSON.parse(data.slice(5)).default.topics.map(function (item) {  return item.title+'☔☉'+item.type}).join('💙💔');
										              responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
											      completed_requests++;
											      if (completed_requests == urls.length) { res0.send(responses);  }
	      }
	
	if(type === 'https://trends.google.com/trends/api/dailytrends?')     { var clean  = JSON.parse(data.slice(5)).default.trendingSearchesDays[0].trendingSearches.map(function (item) {  return '🐸🐲'+item.title.query+'☔☉'+item.formattedTraffic+'☔☉'+item.relatedQueries.map(function (item) {  return item.query}).join('💙💔')+'☔☉'+item.articles.map(function (item) {  return item.title+'🔹🍎'+item.timeAgo+'🔹🍎'+item.snippet}).join('💙💔')   }) ;
										              responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
											      completed_requests++;
											      if (completed_requests == urls.length) { res0.send(responses);  }
	      }
	    
        if(type === 'https://trends.google.com/trends/api/realtimetrends?')  { var clean  = JSON.parse(data.slice(5)).storySummaries.trendingStories.map(function (item) {  return item.articles.map(function (item) {  return item.articleTitle+'☔☉'+item.source+'☔☉'+item.time+'☔☉'+item.snippet}).join('💙💔')})       		
										              responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
											      completed_requests++;
											      if (completed_requests == urls.length) { res0.send(responses);  }
	      }   
	    
        if(type === 'https://trends.google.com/trends/api/explore?')         { var cookie = res.headers['set-cookie'][0].split(';')[0];console.log(cookie);	
									            mynpm({url:encodeURI(urls[i].split('🔸')[0]) , method: 'GET', headers: { 'Cookie': cookie } }, (err, res, body) => {
									      	    var td = JSON.parse(body.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
											     
                                                                                                                       if(kind === 'SCPGTEXPLORE' || kind === ''){ 
															       responses.push(urls[i].split('🔸')[1]+'💚'+td);
														               completed_requests++;
															       if (completed_requests == urls.length) {res0.send(responses); }
														       }
														  
														  
														        if(kind === 'SCPGTTS'){		
                                                                                                                              mynpm(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: filterItems(td, 'timeseries☉{')[0].split('☉')[1], token: filterItems(td, 'timeseries☉{')[0].split('☉')[2],tz: req0.query.tz[0]} })  , (err, res, body) => {                                                                                                                               					       
														               var clean = JSON.parse(body.slice(5)).default.timelineData.map(function (item) {  return item.formattedTime+'☔☉['+item.value+']'}).join('💙💔')
														                                        responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
														                                        completed_requests++;
															                                if (completed_requests == urls.length) {res0.send(responses); }											                                   	
															});}
														   
														   
														        if(kind === 'SCPGTGEO'){		
                                                                                                                               mynpm(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/comparedgeo', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: filterItems(td, 'geo_map☉{')[0].split('☉')[1], token: filterItems(td, 'geo_map☉{')[0].split('☉')[2]  ,tz: req0.query.tz[0]} })  , (err, res, body) => {  
                                                                                                                               var clean = JSON.parse(body.slice(5)).default.geoMapData.map(function (item) {  return item.geoName+'☔☉['+item.value+']'}).join('💙💔')
														                                        responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
														                                        completed_requests++;
															                                if (completed_requests == urls.length) {res0.send(responses); }													                                    
															
															});}
														   
														   
														        if(kind === 'SCPGTTPC'){		
                                                                                                                               mynpm(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: filterItems(td, 'related_topics☉{')[0].split('☉')[1], token: filterItems(td, 'related_topics☉{')[0].split('☉')[2]  ,tz: req0.query.tz[0]} })  , (err, res, body) => {  
                                                                                                                               var clean = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.topic.title+'☔☉'+item.topic.type+'☔☉'+item.value}).join('💙💔')+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.topic.title+'☔☉'+item.topic.type+'☔☉'+item.value}).join('💙💔')   
											                                                                responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
														                                        completed_requests++;
															                                if (completed_requests == urls.length) {res0.send(responses); }    														
															});} 
												     
												     
												                        if(kind === 'SCPGTQRY'){		
                                                                                                                               mynpm(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  ,tz: req0.query.tz[0]} })  , (err, res, body) => {  
                          												       var clean = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value}).join('💙💔')+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value}).join('💙💔')
											                                                                responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
														                                        completed_requests++;
															                                if (completed_requests == urls.length) {res0.send(responses); }											
															 });}	
												   				
												     });}
	      
												     
		
	      
	      
	      if(type === 'https://www.youtube.com/results?search_query=')  { 
		      let match = data.match(/window\["ytInitialData"]\s*=\s*(.*);+\n/)
    if (!match) match = data.match(/var\s*ytInitialData\s*=\s*(.*);\s*\n/)
    const line = match[0].trim()
    const json = JSON.parse(line.substring(line.indexOf('{'), line.length - 1))
    const result = json
        ['contents']['twoColumnSearchResultsRenderer']['primaryContents']['sectionListRenderer']
        ['contents'][0]['itemSectionRenderer']['contents']
    const amazing = result.filter(video => {
        const type = Object.keys(video)[0].replace('Renderer', '')
         return ['video', 'playlist'].includes(type)
    }).map(video => {
        const type = Object.keys(video)[0].replace('Renderer', '')
        const data = video[type + 'Renderer']
        const identifier = data[type + 'Id']
        if (type === 'video') {
            const isStream = !Object.keys(data).includes('lengthText')
            let length = Number.MAX_VALUE
            if (!isStream) {
                length = 0
                data['lengthText']['simpleText'].split(':').reverse().forEach((value, index) => {
                    const i = Number(value)
                    length += (index === 0 ? i : i * (60 ** index))
                })
            }
            return {
                type: type,
                identifier: identifier,
                uri: 'https://www.youtube.com/watch?v=' + identifier,
                title: data['title']['runs'][0]['text'],
description : data['descriptionSnippet']['runs'][0]['text'],
publishedTime: JSON.stringify(data['publishedTimeText']),
viewCount : JSON.stringify(data['viewCountText']),//.simpleText,   
duration :  JSON.stringify(data['lengthText']),//.simpleText,    
                author: {
                    name: data['ownerText']['runs'][0]['text'],
                    profile: data['channelThumbnailSupportedRenderers']['channelThumbnailWithLinkRenderer']
                        ['thumbnail']['thumbnails'][0]['url'],
                    uri: 'https://www.youtube.com' + data['ownerText']['runs'][0]['navigationEndpoint']
                        ['commandMetadata']['webCommandMetadata']['url']
                },
                length: {
                    ms: isStream ? length : length * 1000,
                    sec: length
                },
                isStream: isStream,
		thumbnails: data['thumbnail']['thumbnails'].slice(-1)[0]
            }
        } 
        else return {
            type: type,
            identifier: identifier,
            uri: 'https://www.youtube.com/playlist?list=' + identifier,
            title: data['title']['simpleText'],
            author: {
                name: data['longBylineText']['runs'][0]['text'],
                uri: 'https://www.youtube.com' + data['longBylineText']['runs'][0]['navigationEndpoint']
                    ['commandMetadata']['webCommandMetadata']['url']
            },
            count: Number(data['videoCount']),
            thumbnails: data['thumbnails']
	
        }
    }) 
			    
			    var clean= amazing.map(function (item) {  return '🔰🐲'+item.type+'☔☉'+item.identifier+'☔☉'+item.uri+'☔☉'+item.title+'☔☉'+item.author.name+'☔☉'+item.thumbnails.url       +'☔☉'+item.description+'☔☉'+item.publishedTime+'☔☉'+item.viewCount+'☔☉'+item.duration  })    							       
			     responses.push(urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
			 completed_requests++;
			if (completed_requests == urls.length) { res0.send(responses);  }
	      }   
		
    
    
      										     
												     
												     
	});
	      })(i);	
	};
	 });
    
	
	








//💔💙💚 BATCH GOOGLE TRENDS SCRAPER API 💚💙💔//

app.get('/SCRAPER22', (req0, res0) => {
   const https  = require('https');
   const url    = require('url');          
	 var urls = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[1].split("↕").map(function(x){return x.replace('Data=', decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[2]) });  	    
         var i;
	 var responses = [];
         var completed_requests = 0; 
         var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[2];
	 var kind = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[3]
	 const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)}

var htmlEntities = {
    nbsp: ' ',
    cent: '¢',
    pound: '£',
    yen: '¥',
    euro: '€',
    copy: '©',
    reg: '®',
    lt: '<',
    gt: '>',
    quot: '"',
    amp: '&',
    apos: '\''
};

function unescapeHTML(str) {
    return str.toString().replace(/\&([^;]+);/g, function (entity, entityCode) {
        var match;

        if (entityCode in htmlEntities) {
            return htmlEntities[entityCode];
            /*eslint no-cond-assign: 0*/
        } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
            return String.fromCharCode(parseInt(match[1], 16));
            /*eslint no-cond-assign: 0*/
        } else if (match = entityCode.match(/^#(\d+)$/)) {
            return String.fromCharCode(~~match[1]);
        } else {
            return entity;
        }
    });
};
	
	 
for (i in urls) {
	(function(i){



})(i);	
};
});






   //💔💙💚 AMAZING GOOGLE TRENDS SCRAPER API USING GOOGLE TRENDS API NPM 💚💙💔//

  //For Autocomplete Google trends                 link === https://nodejsgithub.herokuapp.com/SCRAPER2?🔰Data=keyword:bitcoin&hl:en🔸Marker=bitcoin↕Data=keyword:fille&hl:fr🔸Marker=fille🔰🔰SCPGTACM
  //For Daily Trends Google trends                 link === https://nodejsgithub.herokuapp.com/SCRAPER2?🔰Data=geo:US&hl:en&timehour:400🔸Marker=bitcoin↕Data=geo:FR&hl:fr&timehour:100🔸Marker=fille🔰🔰SCPGTDTR
  //For RealT Trends Google trends                 link === https://nodejsgithub.herokuapp.com/SCRAPER2?🔰Data=geo:US&hl:en&category:all🔸Marker=bitcoin↕Data=geo:FR&hl:fr&category:e🔸Marker=fille🔰🔰SCPGTRTT
  //Batch  1K   for SCPGTTS/SCPGTGEO/TPC/QRY       Link === https://nodejsgithub.herokuapp.com/SCRAPER2?🔰Data=keyword:bitcoin&startTime:400&endTime:10&geo:US&language:en&category:0&engine:youtube&resolution:🔸Marker=bitcoin↕Data=keyword:FILLE&startTime:400&endTime:10&geo:FR&language:en&category:0&engine:youtube&resolution:🔸Marker=FILLE🔰🔰SCPGTTS
  //Batch  5K   for GEO and TS                     Link === https://nodejsgithub.herokuapp.com/SCRAPER2?🔰Data=keyword=wine&keyword=peanuts&startTime=400&endTime=10&geo=US&resolution=&language=en&category=0&engine=youtube🔸Marker=bitcoin↕Data=keyword=FILLE&startTime=400&endTime=10&geo=FR&resolution=&language=en&category=0&engine=youtube🔸Marker=FILLE🔰🔰5KSCPGTTS    

app.get('/SCRAPER2', (req0, res0) => {
   const url    = require('url');
   const googleTrends = require('google-trends-api');
           	    
	 const Datas = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[1].split("↕").map(function(x){return x.replace('Data=', 'myurl.com?' )  });  	    
         const Urls  = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[1].split("↕").map(function(x){return x.replace('Data=', 'myurl.com?' )  });  	    
        
	var i;
	 var responses = [];
         var completed_requests = 0; 
         var kind = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("🔰")[3]
	 
	 
var htmlEntities = {
    nbsp: ' ',
    cent: '¢',
    pound: '£',
    yen: '¥',
    euro: '€',
    copy: '©',
    reg: '®',
    lt: '<',
    gt: '>',
    quot: '"',
    amp: '&',
    apos: '\''
};

function unescapeHTML(str) {
    return str.toString().replace(/\&([^;]+);/g, function (entity, entityCode) {
        var match;

        if (entityCode in htmlEntities) {
            return htmlEntities[entityCode];
            /*eslint no-cond-assign: 0*/
        } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
            return String.fromCharCode(parseInt(match[1], 16));
            /*eslint no-cond-assign: 0*/
        } else if (match = entityCode.match(/^#(\d+)$/)) {
            return String.fromCharCode(~~match[1]);
        } else {
            return entity;
        }
    });
};
	
	 
for (i in Datas) {
	(function(i){

	if(kind === 'SCPGTACM'){googleTrends.autoComplete ({keyword: Datas[i].split('🔸')[0].split('&')[0].split(':')[1], hl: Datas[i].split('🔸')[0].split('&')[1].split(':')[1]}).then(function(data){    
           var clean = JSON.parse(data).default.topics.map(function (item) {  return item.title+'☔☉'+item.type}).join('💙💔');    
			         responses.push(Datas[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
			 completed_requests++;
			if (completed_requests == Datas.length) { res0.send(responses);  }
			       }); }
		
		
	if(kind === 'SCPGTDTR'){googleTrends.dailyTrends ({geo: Datas[i].split('🔸')[0].split('&')[0].split(':')[1], hl: Datas[i].split('🔸')[0].split('&')[1].split(':')[1], trendDate: new Date(Date.now() - (Datas[i].split('🔸')[0].split('&')[2].split(':')[1] * 60 * 60 * 1000))}).then(function(data){    
           var clean = JSON.parse(data).default.trendingSearchesDays[0].trendingSearches.map(function (item) {  return '🐸🐲'+item.title.query+'☔☉'+item.formattedTraffic+'☔☉'+item.relatedQueries.map(function (item) {  return item.query}).join('💙💔')+'☔☉'+item.articles.map(function (item) {  return item.title+'🔹🍎'+item.timeAgo+'🔹🍎'+item.snippet}).join('💙💔') })    
	                 responses.push(Datas[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
			 completed_requests++;
			if (completed_requests == Datas.length) { res0.send(responses);  console.log(data);}
			       }); }
		
		
	if(kind === 'SCPGTRTT'){googleTrends.realTimeTrends ({geo: Datas[i].split('🔸')[0].split('&')[0].split(':')[1], hl: Datas[i].split('🔸')[0].split('&')[1].split(':')[1], category: Datas[i].split('🔸')[0].split('&')[2].split(':')[1] }).then(function(data){    
           var clean = JSON.parse(data).storySummaries.trendingStories.map(function (item) {  return item.articles.map(function (item) {  return item.articleTitle+'☔☉'+item.source+'☔☉'+item.time+'☔☉'+item.snippet}).join('💙💔')})           
			 responses.push(Datas[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
			 completed_requests++;
			if (completed_requests == Datas.length) { res0.send(responses);  console.log(data);}
			       }); }
		
          
	
	

		
	if(kind === 'SCPGTTS'){googleTrends.interestOverTime ({keyword: Datas[i].split('🔸')[0].split('&')[0].split(':')[1], startTime: new Date(Date.now() - (Datas[i].split('🔸')[0].split('&')[1].split(':')[1] * 60 * 60 * 1000)),endTime: new Date(Date.now() - (Datas[i].split('🔸')[0].split('&')[2].split(':')[1] * 60 * 60 * 1000)), geo: Datas[i].split('🔸')[0].split('&')[3].split(':')[1], hl: Datas[i].split('🔸')[0].split('&')[4].split(':')[1], category: Datas[i].split('🔸')[0].split('&')[5].split(':')[1], property: Datas[i].split('🔸')[0].split('&')[6].split(':')[1] }).then(function(data){    
           var clean = JSON.parse(data).default.timelineData.map(function (item) {  return item.formattedTime+'☔☉'+item.value}).join('💙💔'); 
	                 responses.push(Datas[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
			 completed_requests++;
			if (completed_requests == Datas.length) { res0.send(responses);  console.log(data);}
			       }); }
		
		
	if(kind === 'SCPGTGEO'){googleTrends.interestByRegion ({keyword: Datas[i].split('🔸')[0].split('&')[0].split(':')[1], startTime: new Date(Date.now() - (Datas[i].split('🔸')[0].split('&')[1].split(':')[1] * 60 * 60 * 1000)),endTime: new Date(Date.now() - (Datas[i].split('🔸')[0].split('&')[2].split(':')[1] * 60 * 60 * 1000)), geo: Datas[i].split('🔸')[0].split('&')[3].split(':')[1], resolution: Datas[i].split('🔸')[0].split('&')[7].split(':')[1], hl: Datas[i].split('🔸')[0].split('&')[4].split(':')[1], category: Datas[i].split('🔸')[0].split('&')[5].split(':')[1], property: Datas[i].split('🔸')[0].split('&')[6].split(':')[1] }).then(function(data){    
           var clean = JSON.parse(data).default.geoMapData.map(function (item) {  return item.geoName+'☔☉'+item.value}).join('💙💔')
	                 responses.push(Datas[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
			 completed_requests++;
			if (completed_requests == Datas.length) { res0.send(responses);  console.log(data);}
			       }); }
		
		
	if(kind === 'SCPGTTPC'){googleTrends.relatedTopics ({keyword: Datas[i].split('🔸')[0].split('&')[0].split(':')[1], startTime: new Date(Date.now() - (Datas[i].split('🔸')[0].split('&')[1].split(':')[1] * 60 * 60 * 1000)),endTime: new Date(Date.now() - (Datas[i].split('🔸')[0].split('&')[2].split(':')[1] * 60 * 60 * 1000)), geo: Datas[i].split('🔸')[0].split('&')[3].split(':')[1], hl: Datas[i].split('🔸')[0].split('&')[4].split(':')[1], category: Datas[i].split('🔸')[0].split('&')[5].split(':')[1], property: Datas[i].split('🔸')[0].split('&')[6].split(':')[1] }).then(function(data){    
           var clean = JSON.parse(data).default.rankedList[1].rankedKeyword.map(function (item) {  return item.topic.title+'☔☉'+item.topic.type+'☔☉'+item.value}).join('💙💔')+'🔰↕'+JSON.parse(data).default.rankedList[0].rankedKeyword.map(function (item) {  return item.topic.title+'☔☉'+item.topic.type+'☔☉'+item.value}).join('💙💔')  										    
	                 responses.push(Datas[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
			 completed_requests++;
			if (completed_requests == Datas.length) { res0.send(responses);  console.log(data);}
			       }); }
		
		
	if(kind === 'SCPGTQRY'){googleTrends.relatedQueries ({keyword: Datas[i].split('🔸')[0].split('&')[0].split(':')[1], startTime: new Date(Date.now() - (Datas[i].split('🔸')[0].split('&')[1].split(':')[1] * 60 * 60 * 1000)),endTime: new Date(Date.now() - (Datas[i].split('🔸')[0].split('&')[2].split(':')[1] * 60 * 60 * 1000)), geo: Datas[i].split('🔸')[0].split('&')[3].split(':')[1], hl: Datas[i].split('🔸')[0].split('&')[4].split(':')[1], category: Datas[i].split('🔸')[0].split('&')[5].split(':')[1], property: Datas[i].split('🔸')[0].split('&')[6].split(':')[1] }).then(function(data){    
           var clean = JSON.parse(data).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value}).join('💙💔')+'🔰↕'+JSON.parse(data).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value}).join('💙💔')
			 responses.push(Datas[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
			 completed_requests++;
			if (completed_requests == Datas.length) { res0.send(responses);  console.log(data);}
			       }); }
		
		
	if(kind === '5KSCPGTTS'){googleTrends.interestOverTime ({keyword: url.parse(Datas[i], true).query.keyword, startTime: new Date(Date.now() - (url.parse(Datas[i], true).query.startTime * 60 * 60 * 1000)),endTime: new Date(Date.now() - (url.parse(Datas[i], true).query.endTime * 60 * 60 * 1000)), geo: url.parse(Datas[i], true).query.geo, hl: url.parse(Datas[i], true).query.language, category: url.parse(Datas[i], true).query.category, property: url.parse(Datas[i], true).query.engine}).then(function(data){    
           var clean = JSON.parse(data).default.timelineData.map(function (item) {  return item.formattedTime+'☔☉'+item.value}).join('💙💔'); 
	                 responses.push(Urls[i].split('🔸')[1]+'💚'+unescapeHTML(clean));
			 completed_requests++;
			if (completed_requests == Datas.length) { res0.send(responses);  console.log(data);}
			       }); }
		
		
		
		
		

})(i);	
};
});






	

         //💔💙💚 GOOGLE TRENDS SCRAPER API 💚💙💔//

    //for SCPGTACM Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?keyword=bitcoin&hl=en&☆SCPGTACM
    //for SCPGTDTR Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?geo=US&language=en&time=400&☆SCPGTDTR
    //for SCPGTRTT Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?geo=US&language=en&category=all☆SCPGTRTT
    //for SCPGTTS  Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?keyword=bitcoin&startTime=400&endTime=10&geo=&language=en&category=0&engine=youtube&☆SCPGTTS
    //for SCPGTGEO Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?keyword=bitcoin&startTime=400&endTime=10&geo=&&resolution=&language=en&category=0&engine=youtube&☆SCPGGEO
    //for SCPGTTPC Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?keyword=bitcoin&startTime=400&endTime=10&geo=&language=en&category=0&engine=youtube&☆SCPGTTPC
    //for SCPGTQRY Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?keyword=bitcoin&startTime=400&endTime=10&geo=&language=en&category=0&engine=youtube&☆SCPGTQRY
    
    app.get('/SCRAPER01', (req, res) => {
const googleTrends = require('google-trends-api');
const url = require('url');
var type = decodeURIComponent(url.format({ pathname: req.originalUrl })).split("☆")[1];
		

	//TO SCRAPE GTRENDS AUTOCOMPLETE & DAILY TRENDS & REAL TIME TRENDS
	
	if(type === 'SCPGTACM'){ googleTrends.autoComplete ({keyword: req.query.keyword, hl: req.query.language ,property: req.query.engine})
           .then(function(data){ res.header('Content-Type', 'application/json').send( JSON.parse(data).default.topics.map(function (item) {  return item.title+'☔☉'+item.type+'💙💔'})  ).end();}); }
	
	if(type === 'SCPGTDTR'){ googleTrends.dailyTrends ({geo: req.query.geo, hl: req.query.language, trendDate: new Date(Date.now() - (req.query.time * 60 * 60 * 1000))})
           .then(function(data){res.header('Content-Type', 'application/json').send( JSON.parse(data).default.trendingSearchesDays[0].trendingSearches.map(function (item) {  return '🐸🐲'+item.title.query+'☔☉'+item.formattedTraffic+'☔☉'+item.relatedQueries.map(function (item) {  return item.query+'💙💔'})+'☔☉'+item.articles.map(function (item) {  return item.title+'🔹🍎'+item.timeAgo+'🔹🍎'+item.snippet+'💙💔'}) })    ).end();}); }
	
	if(type === 'SCPGTRTT'){ googleTrends.realTimeTrends ({geo: req.query.geo, hl: req.query.language, category: req.query.category})
           .then(function(data){ res.header('Content-Type', 'application/json').send(JSON.parse(data).storySummaries.trendingStories.map(function (item) {  return item.articles.map(function (item) {  return item.articleTitle+'☔☉'+item.source+'☔☉'+item.time+'☔☉'+item.snippet+'💙💔'})})           
										    ).end();}); }


	
	
	//TO SCRAPE GTRENDS TIME SERIES & GEO & RELATED TOPICS & RELATED QUERIES
	
	if(type === 'SCPGTTS'){googleTrends.interestOverTime ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)),endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, hl: req.query.language, category: req.query.category, property: req.query.engine})
           .then(function(data){res.header('Content-Type', 'application/json').send(JSON.parse(data).default.timelineData.map(function (item) {  return item.formattedTime+'☔☉'+item.value+'💙💔'})        
										   
										   
										   );console.log(req.query.keyword)});}
	
	if(type === 'SCPGTGEO'){ googleTrends.interestByRegion ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)),endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, resolution:req.query.resolution, hl: req.query.language, category: req.query.category, property: req.query.engine})
           .then(function(data){ res.header('Content-Type', 'application/json').send(JSON.parse(data).default.geoMapData.map(function (item) {  return item.geoName+'☔☉'+item.value+'💙💔'})
										    
										    
										    ).end();});}

	if(type === 'SCPGTTPC'){ googleTrends.relatedTopics ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)), endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, hl: req.query.language, category: req.query.category ,property: req.query.engine})
           .then(function(data){ res.header('Content-Type', 'application/json').send(JSON.parse(data).default.rankedList[1].rankedKeyword.map(function (item) {  return item.topic.title+'☔☉'+item.topic.type+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data).default.rankedList[0].rankedKeyword.map(function (item) {  return item.topic.title+'☔☉'+item.topic.type+'☔☉'+item.value+'💙💔'})  
										    
										    
										    ) .end();});}

	if(type === 'SCPGTQRY'){ googleTrends.relatedQueries ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)), endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, hl: req.query.language, category: req.query.category, property: req.query.engine})
           .then(function(data){ res.header('Content-Type', 'application/json').send(JSON.parse(data).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})
										    
										    
										    ) .end();});}
	

});

		    
    
    
    

//💔💙💚 AMAZING SCRAPER WITH NEPOCHATAYA WITH REQUEST💚💙💔//

    //for google trends autocomplete                    link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?https://trends.google.com/trends/api/autocomplete/bitcoin?hl=en-US&tz=-60☆SCPGTACM
    //for google trends dailytrends                     link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?https://trends.google.com/trends/api/dailytrends?hl=en-US&tz=-60&geo=AU&ns=15☆SCPGTDTR
    //for google real timerends                         link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?https://trends.google.com/trends/api/realtimetrends?hl=en-US&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0☆SCPGTRTT
    //for Ggle trends(EXPLORE/TS/GEO/TPC         1K)    link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY
    //for Ggle trends(QRY                        1K)    link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY☆1   
    //for Ggle trends(QRY for                    5K)    link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"},{"keyword":"girl","geo":"","time":"today+5-y"},{"keyword":"boy","geo":"","time":"today+5-y"},{"keyword":"girly","geo":"","time":"today+5-y"},{"keyword":"good","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY☆bitcoin☆girl☆boy☆girly☆good
    //for Ggle trends(TS&GEO for                 5K)    link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"},{"keyword":"girl","geo":"","time":"today+5-y"},{"keyword":"boy","geo":"","time":"today+5-y"},{"keyword":"girly","geo":"","time":"today+5-y"},{"keyword":"good","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTTS 
    //for other websites                                link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?url☆SCPURL

	app.get('/SCRAPER23', (req0, res0) => {
           
		const url = require('url'); 
                const Request = require('request');
                
		
                Request.post({url: 'https://scraper.nepochataya.pp.ua/sites', json: true, body: {"url":decodeURIComponent(url.format({ pathname: encodeURI(req0.originalUrl) })).split("☆")[0].replace('/SCRAPER2?','')  }}, (err, res, body) => {	     
		Request({url: 'https://scraper.nepochataya.pp.ua'+body.previewPath, json: true,}, (err, res, body) => {
	
              var tz = req0.query.tz[0];
              var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];
	var length = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆").length;
	
		//TO SCRAPE URL & GTRENDS EXPLORE & AUTOCOMPLETE & DAILY TRENDS & REAL TIME TRENDS
		
	if(type === 'SCPURL' || type === ''){
		res0.header('Content-Type', 'application/json').send(body);}
		
	if(type === 'SCPGTACM'){
		res0.header('Content-Type', 'application/json').send( JSON.parse(body.slice(5)).default.topics.map(function (item) {  return item.title+'☔☉'+item.type+'💙💔'})  );}
	
	if(type === 'SCPGTDTR'){
		res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(5)).default.trendingSearchesDays[0].trendingSearches.map(function (item) {  return '🐸🐲'+item.title.query+'☔☉'+item.formattedTraffic+'☔☉'+item.relatedQueries.map(function (item) {  return item.query+'💙💔'})+'☔☉'+item.articles.map(function (item) {  return item.title+'🔹🍎'+item.timeAgo+'🔹🍎'+item.snippet+'💙💔'})   })            ); }
		
		
	if(type === 'SCPGTRTT'){
		res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(5)).storySummaries.trendingStories.map(function (item) {  return item.articles.map(function (item) {  return item.articleTitle+'☔☉'+item.source+'☔☉'+item.time+'☔☉'+item.snippet+'💙💔'})})        )	;}
		
	if(type === 'SCPGTEXPLORE'){
		res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(4)).widgets+'💙💔');}	
		
		
		
		//TO SCRAPE GTRENDS TIME SERIES & GEO & RELATED TOPICS & RELATED QUERIES
		
	if(type === 'SCPGTTS'){
		var td = JSON.parse(body.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'timeseries☉{')[0].split('☉')[1], token: filterItems(td, 'timeseries☉{')[0].split('☉')[2]  ,tz: tz} }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(5)).default.timelineData.map(function (item) {  return item.formattedTime+'☔☉['+item.value+']💙💔'})       );    });}
		    
		
	if(type === 'SCPGTGEO'){
		var td = JSON.parse(body.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/comparedgeo', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'geo_map☉{')[0].split('☉')[1], token: filterItems(td, 'geo_map☉{')[0].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(5)).default.geoMapData.map(function (item) {  return item.geoName+'☔☉['+item.value+']💙💔'})       );    });}
		    	
		
	if(type === 'SCPGTTPC'){
		var td = JSON.parse(body.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_topics☉{')[0].split('☉')[1], token: filterItems(td, 'related_topics☉{')[0].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.topic.title+'☔☉'+item.topic.type+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.topic.title+'☔☉'+item.topic.type+'☔☉'+item.value+'💙💔'})   );     });}	
		
	if(type === 'SCPGTQRY'){
		var td = JSON.parse(body.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};
		
		if(length === 3){	                      
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})); });
                    };
		
		
		if(length === 4){	                      
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var first = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[1].split('☉')[1], token: filterItems(td, 'related_queries☉{')[1].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var second = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		res0.header('Content-Type', 'application/json').send(first+'🍎💚'+second);	
		});});                    				
		};
		
		
		
		if(length === 5){	                      
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var first = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[1].split('☉')[1], token: filterItems(td, 'related_queries☉{')[1].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var second = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[2].split('☉')[1], token: filterItems(td, 'related_queries☉{')[2].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var third = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		res0.header('Content-Type', 'application/json').send(first+'🍎💚'+second+'🍎💚'+third);	
		});});});   
		};
			
			
			
			
			if(length === 6){	                      
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var first = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[1].split('☉')[1], token: filterItems(td, 'related_queries☉{')[1].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var second = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[2].split('☉')[1], token: filterItems(td, 'related_queries☉{')[2].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var third = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[3].split('☉')[1], token: filterItems(td, 'related_queries☉{')[3].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var forth = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		res0.header('Content-Type', 'application/json').send(first+'🍎💚'+second+'🍎💚'+third+'🍎💚'+forth);	
		});});});});	
		};
			     
			     
			     
			     
			     if(length === 7){	                      
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var first = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[1].split('☉')[1], token: filterItems(td, 'related_queries☉{')[1].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var second = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[2].split('☉')[1], token: filterItems(td, 'related_queries☉{')[2].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var third = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[3].split('☉')[1], token: filterItems(td, 'related_queries☉{')[3].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var forth = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[4].split('☉')[1], token: filterItems(td, 'related_queries☉{')[4].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                var fifth = JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}); 
		res0.header('Content-Type', 'application/json').send(first+'🍎💚'+second+'🍎💚'+third+'🍎💚'+forth+'🍎💚'+fifth);	
		});});});});});
		
		};
			
		
	}	                     	    		
			
});		
});
});
	
		           
    
    



//💔💙💚 AMAZING SCRAPER WITH NEPOCHATAYA WITH HTTPS💚💙💔//

    //for google trends autocomplete                    link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/autocomplete/bitcoin?hl=en-US&tz=-60☆SCPGTACM
    //for google trends dailytrends                     link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/dailytrends?hl=en-US&tz=-60&geo=AU&ns=15☆SCPGTDTR
    //for google real timerends                         link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/realtimetrends?hl=en-US&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0☆SCPGTRTT
    //for Ggle trends(EXPLORE/TS/GEO/TPC         1K)    link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY
    //for Ggle trends(QRY                        1K)    link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY☆1   
    //for Ggle trends(QRY for                    5K)    link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"},{"keyword":"girl","geo":"","time":"today+5-y"},{"keyword":"boy","geo":"","time":"today+5-y"},{"keyword":"girly","geo":"","time":"today+5-y"},{"keyword":"good","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY☆bitcoin☆girl☆boy☆girly☆good
    //for Ggle trends(TS&GEO for                 5K)    link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"},{"keyword":"girl","geo":"","time":"today+5-y"},{"keyword":"boy","geo":"","time":"today+5-y"},{"keyword":"girly","geo":"","time":"today+5-y"},{"keyword":"good","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTTS 
    //for other websites                                link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?url☆SCPURL

	app.get('/SCRAPER3', (req0, res0) => {
           const url = require('url'); 
           const https = require('https');
           const Request = require('axios');        
		  
//needle,,Request('post', 'https://scraper.nepochataya.pp.ua/sites', {url:decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER3?','')  }).then (  (res) => {		      
					      
		Request.post('https://scraper.nepochataya.pp.ua/sites', {url:decodeURIComponent(url.format({ pathname: encodeURI(req0.originalUrl) })).split("☆")[0].replace('/SCRAPER3?','')  }).then((res) => { 		      
				
    
   https.get('https://scraper.nepochataya.pp.ua'+res.data.previewPath+'/', (res) => {		
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
			res.on('end', () => {					
                         var tz = req0.query.tz[0];
                         var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];
		var length = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆").length;
	
	
		//TO SCRAPE URL & GTRENDS EXPLORE & AUTOCOMPLETE & DAILY TRENDS & REAL TIME TRENDS
		
	if(type === 'SCPURL' || type === ''){
		res0.header('Content-Type', 'application/json').send(data)}
				
		
	if(type === 'SCPGTACM'){
		res0.header('Content-Type', 'application/json').send( JSON.parse(data.slice(5)).default.topics.map(function (item) {  return item.title+'☔☉'+item.type+'💙💔'})  );}
	
				
	if(type === 'SCPGTDTR'){
		res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.trendingSearchesDays[0].trendingSearches.map(function (item) {  return '🐸🐲'+item.title.query+'☔☉'+item.formattedTraffic+'☔☉'+item.relatedQueries.map(function (item) {  return item.query+'💙💔'})+'☔☉'+item.articles.map(function (item) {  return item.title+'🔹🍎'+item.timeAgo+'🔹🍎'+item.snippet+'💙💔'})   })); }
		
		
	if(type === 'SCPGTRTT'){
		res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).storySummaries.trendingStories.map(function (item) {  return item.articles.map(function (item) {  return item.articleTitle+'☔☉'+item.source+'☔☉'+item.time+'☔☉'+item.snippet+'💙💔'})}) )	;}
		
				
	if(type === 'SCPGTEXPLORE'){
		res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(4)).widgets+'💙💔');}	
		
		
		
		//TO SCRAPE GTRENDS TIME SERIES & GEO & RELATED TOPICS & RELATED QUERIES
		
	
	if(type === 'SCPGTTS'){
		var td = JSON.parse(data.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};	
                  https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'timeseries☉{')[0].split('☉')[1], token: filterItems(td, 'timeseries☉{')[0].split('☉')[2]  ,tz: tz} })       , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.timelineData.map(function (item) {  return item.formattedTime+'☔☉['+item.value+']💙💔'})  );    });});}
		    
		
	if(type === 'SCPGTGEO'){
		var td = JSON.parse(data.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};		
                  https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/comparedgeo', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'geo_map☉{')[0].split('☉')[1], token: filterItems(td, 'geo_map☉{')[0].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.geoMapData.map(function (item) {  return item.geoName+'☔☉['+item.value+']💙💔'})       );    });});}
		    					
		
	if(type === 'SCPGTTPC'){
		var td = JSON.parse(data.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};		
                  https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_topics☉{')[0].split('☉')[1], token: filterItems(td, 'related_topics☉{')[0].split('☉')[2]  } }) , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.topic.title+'☔☉'+item.topic.type+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.topic.title+'☔☉'+item.topic.type+'☔☉'+item.value+'💙💔'})   );   });});}	
		
				
	if(type === 'SCPGTQRY'){
		var td = JSON.parse(data.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};    
		
		if(length === 3){
                   https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'}));     
		});});}
		
		
		if(length === 4){
                   https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var first = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});     
	           https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[1].split('☉')[1], token: filterItems(td, 'related_queries☉{')[1].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var second = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});          
			    res0.header('Content-Type', 'application/json').send(first+'🍎💚'+second);
				    });})	    
			    ;});});
				
		}
		
		
		
		
		
		if(length === 5){
                   https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var first = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});     
	           https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[1].split('☉')[1], token: filterItems(td, 'related_queries☉{')[1].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var second = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});          
			    https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[2].split('☉')[1], token: filterItems(td, 'related_queries☉{')[2].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var third = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});          
			    res0.header('Content-Type', 'application/json').send(first+'🍎💚'+second+'🍎💚'+third);
				    });})	    
				    });})	    
			    ;});});
				
		}
		
		
		
		
		if(length === 6){
                   https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var first = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});     
	           https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[1].split('☉')[1], token: filterItems(td, 'related_queries☉{')[1].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var second = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});          
			    https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[2].split('☉')[1], token: filterItems(td, 'related_queries☉{')[2].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var third = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});          
			    https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[3].split('☉')[1], token: filterItems(td, 'related_queries☉{')[3].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var forth = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});          
			    res0.header('Content-Type', 'application/json').send(first+'🍎💚'+second+'🍎💚'+third+'🍎💚'+forth);
				    });})	    
				    });})	    
				    });})	    
			    ;});});
				
		}
		
		
		
		
		if(length === 7){
                   https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var first = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});     
	           https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[1].split('☉')[1], token: filterItems(td, 'related_queries☉{')[1].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var second = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});          
			    https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[2].split('☉')[1], token: filterItems(td, 'related_queries☉{')[2].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var third = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});          
			    https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[3].split('☉')[1], token: filterItems(td, 'related_queries☉{')[3].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var forth = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});          
			    https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[4].split('☉')[1], token: filterItems(td, 'related_queries☉{')[4].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    var fifth = JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'});          
			    res0.header('Content-Type', 'application/json').send(first+'🍎💚'+second+'🍎💚'+third+'🍎💚'+forth+'🍎💚'+fifth);
				    });})	    
				    });})	    
				    });})	    
				    });})	    
			    ;});});
				
		}
		
		
		
		
		
		
		
	
	}	                           
				      	    			
				
				
});			
});		
});
});







//💔💙💚 AMAZING GOOGLE TRENDS SCRAPER WITH ZENSERP 💚💙💔//

    //for google trends autocomplete link  ===  https://nodejsgithub.herokuapp.com/SCRAPER4?https://app.zenserp.com/api/v1/trends?apikey=YOUR-API-KEY&keyword[]=Bitcoin&keyword[]=Etherum&type=youtube&cat=1219&timeframe=now 7-d&hl=it&geo=GB☆Bitcoin☆Etherum


app.get('/SCRAPER4', (req0, res0) => {
    const https = require('https');
    const url = require('url');
       
var keyword1 = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];
var keyword2 = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[2];
var keyword3 = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[3];
var keyword4 = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[4];
var keyword5 = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[5];
	
var length = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆").length;

	
if(length === 2){
https.get(decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER4?','')   , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data)[keyword1].queries[keyword1].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword1].queries[keyword1].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword1].topics[0]).map(function (item) {  return item.topic_title+'☔☉'+item.topic_type+'☔☉'+item.value+'💙💔'})+'🔰↕'+Object.values(JSON.parse(data)[keyword1].topics[1]).map(function (item) {  return item.topic_title+'☔☉'+item.topic_type+'☔☉'+item.value+'💙💔'})   +'🔹🔸'+Object.values(JSON.parse(data)[keyword1].trends)   .map(function (item) {  return item[keyword1]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword1].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword1].region).map(function (item) {  return item[keyword1]+'💙💔'})     )       				    
});}); }
	
	            				    
if(length === 3){
https.get(decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER4?','')   , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });

                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.stringify(JSON.parse(data)[keyword1].queries[keyword1].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword1].queries[keyword1].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword1].trends)   .map(function (item) {  return item[keyword1]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword1].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword1].region).map(function (item) {  return item[keyword1]+'💙💔'})         			    
			                                                                             +'🐲💚'+JSON.parse(data)[keyword2].queries[keyword2].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})   +'🔰↕'+JSON.parse(data)[keyword2].queries[keyword2].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword2].trends)   .map(function (item) {  return item[keyword2]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword2].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword2].region).map(function (item) {  return item[keyword2]+'💙💔'}))    )     

	});});}
	  
	  
	  
	  
	if(length === 4){
https.get(decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER4?','')   , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.stringify(JSON.parse(data)[keyword1].queries[keyword1].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword1].queries[keyword1].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword1].trends)   .map(function (item) {  return item[keyword1]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword1].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword1].region).map(function (item) {  return item[keyword1]+'💙💔'})         			    
			                                                              +'🐲💚'+JSON.parse(data)[keyword2].queries[keyword2].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword2].queries[keyword2].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword2].trends)   .map(function (item) {  return item[keyword2]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword2].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword2].region).map(function (item) {  return item[keyword2]+'💙💔'})         
                                                                                      +'🐲💚'+JSON.parse(data)[keyword3].queries[keyword3].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword3].queries[keyword3].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword3].trends)   .map(function (item) {  return item[keyword3]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword3].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword3].region).map(function (item) {  return item[keyword3]+'💙💔'}))     )     
});});}
		
	  
	  if(length === 5){
https.get(decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER4?','')   , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.stringify(JSON.parse(data)[keyword1].queries[keyword1].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword1].queries[keyword1].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword1].trends)   .map(function (item) {  return item[keyword1]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword1].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword1].region).map(function (item) {  return item[keyword1]+'💙💔'})          			    
			                                                              +'🐲💚'+JSON.parse(data)[keyword2].queries[keyword2].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword2].queries[keyword2].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword2].trends)   .map(function (item) {  return item[keyword2]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword2].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword2].region).map(function (item) {  return item[keyword2]+'💙💔'})       
                                                                                      +'🐲💚'+JSON.parse(data)[keyword3].queries[keyword3].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword3].queries[keyword3].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword3].trends)   .map(function (item) {  return item[keyword3]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword3].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword3].region).map(function (item) {  return item[keyword3]+'💙💔'})      
                                                                                      +'🐲💚'+JSON.parse(data)[keyword4].queries[keyword4].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword4].queries[keyword4].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword4].trends)   .map(function (item) {  return item[keyword4]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword4].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword4].region).map(function (item) {  return item[keyword4]+'💙💔'}))     )       
});});}
		
	
	
	if(length === 6){
https.get(decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER4?','')   , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.stringify(JSON.parse(data)[keyword1].queries[keyword1].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword1].queries[keyword1].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword1].trends)   .map(function (item) {  return item[keyword1]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword1].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword1].region).map(function (item) {  return item[keyword1]+'💙💔'})          			    
			                                                              +'🐲💚'+JSON.parse(data)[keyword2].queries[keyword2].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword2].queries[keyword2].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword2].trends)   .map(function (item) {  return item[keyword2]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword2].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword2].region).map(function (item) {  return item[keyword2]+'💙💔'})     
                                                                                      +'🐲💚'+JSON.parse(data)[keyword3].queries[keyword3].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword3].queries[keyword3].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword3].trends)   .map(function (item) {  return item[keyword3]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword3].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword3].region).map(function (item) {  return item[keyword3]+'💙💔'})         
                                                                                      +'🐲💚'+JSON.parse(data)[keyword4].queries[keyword4].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword4].queries[keyword4].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword4].trends)   .map(function (item) {  return item[keyword4]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword4].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword4].region).map(function (item) {  return item[keyword4]+'💙💔'})           
                                                                                      +'🐲💚'+JSON.parse(data)[keyword5].queries[keyword5].top.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔰↕'+JSON.parse(data)[keyword5].queries[keyword5].rising.map(function (item) {  return item.query+'☔☉'+item.value+'💙💔'})+'🔹🔸'+   Object.values(JSON.parse(data)[keyword5].trends)   .map(function (item) {  return item[keyword5]+'💙💔'})      +'🔹🔸'+ Object.keys(JSON.parse(data)[keyword4].region).join('💙💔')+'🔹🔸'+Object.values(JSON.parse(data)[keyword4].region).map(function (item) {  return item[keyword5]+'💙💔'}))     )       
});});}
		
	
	
		});
	








//💔💙💚 YOUTUBE SCRAPING TOOLS NO APIKEY Based ON SIMPLEYT NPM💚💙💔//
    // LINK === https://nodejsgithub.herokuapp.com/YTSCRAPER0?https://www.youtube.com/results?search_query=good%E2%98%86video%E2%98%86onepage (video or playlist or both) and (onepage or twopages)

app.get('/YTSCRAPER0', (req0, res0) => {
//const miniget = require('miniget');
const https = require('https');
const url = require('url');
var typeYT = decodeURIComponent(url.format({ pathname: encodeURI(req0.originalUrl) })).split("☆")[1];    
var pages = decodeURIComponent(url.format({ pathname: encodeURI(req0.originalUrl) })).split("☆")[2];
	
if(pages=== 'onepage'){
https.get(decodeURIComponent(url.format({ pathname: encodeURI(req0.originalUrl) })).split("☆")[0].replace('/YTSCRAPER0?','')  , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    const line = data.match(/window\["ytInitialData"]\s*=\s*(.*);+\n/)[0]
			    const json = JSON.parse(line.substring(line.indexOf('{'), line.length - 2))			    
			    const result = json ['contents']['twoColumnSearchResultsRenderer']['primaryContents']['sectionListRenderer'] ['contents'][0]['itemSectionRenderer']['contents']
			    
			    const amazing = result.filter(video => {
        const type = Object.keys(video)[0].replace('Renderer', '')
        if (typeYT === 'video') return type === 'video'
        else if (typeYT === 'playlist') return type === 'playlist'
        else return ['video', 'playlist'].includes(type)   })
.map(video => {
        const type = Object.keys(video)[0].replace('Renderer', '')
        const data = video[type + 'Renderer']
        const identifier = data[type + 'Id']
        if (type === 'video') {
            const isStream = !Object.keys(data).includes('lengthText')
            let length = Number.MAX_VALUE
            if (!isStream) {
                length = 0
                data['lengthText']['simpleText'].split(':').reverse().forEach((value, index) => {
                    const i = Number(value)
                    length += (index === 0 ? i : i * (60 ** index))
                })
            }
            return {
                type: type,
                identifier: identifier,
                uri: 'https://www.youtube.com/watch?v=' + identifier,
                title: data['title']['runs'][0]['text'],
description : data['descriptionSnippet']['runs'][0]['text'],
publishedTime: JSON.stringify(data['publishedTimeText']),
viewCount : JSON.stringify(data['viewCountText']),//.simpleText,   
duration :  JSON.stringify(data['lengthText']),//.simpleText,    
                author: {
                    name: data['ownerText']['runs'][0]['text'],
                    profile: data['channelThumbnailSupportedRenderers']['channelThumbnailWithLinkRenderer']
                        ['thumbnail']['thumbnails'][0]['url'],
                    uri: 'https://www.youtube.com' + data['ownerText']['runs'][0]['navigationEndpoint']
                        ['commandMetadata']['webCommandMetadata']['url']
                },
                length: {
                    ms: isStream ? length : length * 1000,
                    sec: length
                },
                isStream: isStream,
		thumbnails: data['thumbnail']['thumbnails'].slice(-1)[0]
            }
        } else return {
            type: type,
            identifier: identifier,
            uri: 'https://www.youtube.com/playlist?list=' + identifier,
            title: data['title']['simpleText'],	
            author: {
                name: data['longBylineText']['runs'][0]['text'],
                uri: 'https://www.youtube.com' + data['longBylineText']['runs'][0]['navigationEndpoint']
                    ['commandMetadata']['webCommandMetadata']['url']
            },
            count: Number(data['videoCount']),
            thumbnails: data['thumbnails']
	
        }
    }) 
			    
			    var datapage1= amazing.map(function (item) {  return '🔰🐲'+item.type+'☔☉'+item.identifier+'☔☉'+item.uri+'☔☉'+
					item.title+'☔☉'+item.author.name+'☔☉'+item.thumbnails.url  
				        +'☔☉'+item.description+'☔☉'+item.publishedTime+'☔☉'+item.viewCount+'☔☉'+item.duration  })    
	
			    
			    
			      			    
			    res0.header('Content-Type', 'application/json').send(datapage1);
				      });});
}
	
	
	
	else{
if(pages=== 'twopages'){
//first pages
	https.get(decodeURIComponent(url.format({ pathname: encodeURI(req0.originalUrl) })).split("☆")[0].replace('/YTSCRAPER0?','')  , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    let match = data.match(/window\["ytInitialData"]\s*=\s*(.*);+\n/)
    if (!match) match = data.match(/var\s*ytInitialData\s*=\s*(.*);\s*\n/)
    const line = match[0].trim()
    const json = JSON.parse(line.substring(line.indexOf('{'), line.length - 1))
    const result = json
        ['contents']['twoColumnSearchResultsRenderer']['primaryContents']['sectionListRenderer']
        ['contents'][0]['itemSectionRenderer']['contents']
			    const amazing = result.filter(video => {
        const type = Object.keys(video)[0].replace('Renderer', '')
        if (typeYT === 'video') return type === 'video'
        else if (typeYT === 'playlist') return type === 'playlist'
        else return ['video', 'playlist'].includes(type)   })
.map(video => {
        const type = Object.keys(video)[0].replace('Renderer', '')
        const data = video[type + 'Renderer']
        const identifier = data[type + 'Id']
        if (type === 'video') {
            const isStream = !Object.keys(data).includes('lengthText')
            let length = Number.MAX_VALUE
            if (!isStream) {
                length = 0
                data['lengthText']['simpleText'].split(':').reverse().forEach((value, index) => {
                    const i = Number(value)
                    length += (index === 0 ? i : i * (60 ** index))
                })
            }
            return {
                type: type,
                identifier: identifier,
                uri: 'https://www.youtube.com/watch?v=' + identifier,
                title: data['title']['runs'][0]['text'],
description : data['descriptionSnippet']['runs'][0]['text'],
publishedTime: JSON.stringify(data['publishedTimeText']),
viewCount : data['viewCountText'],//.simpleText,   
duration :  data['lengthText'],//.simpleText,    
                author: {
                    name: data['ownerText']['runs'][0]['text'],
                    profile: data['channelThumbnailSupportedRenderers']['channelThumbnailWithLinkRenderer']
                        ['thumbnail']['thumbnails'][0]['url'],
                    uri: 'https://www.youtube.com' + data['ownerText']['runs'][0]['navigationEndpoint']
                        ['commandMetadata']['webCommandMetadata']['url']
                },
                length: {
                    ms: isStream ? length : length * 1000,
                    sec: length
                },
                isStream: isStream,
		thumbnails: data['thumbnail']['thumbnails'].slice(-1)[0]
            }
        } else return {
            type: type,
            identifier: identifier,
            uri: 'https://www.youtube.com/playlist?list=' + identifier,
            title: data['title']['simpleText'],	
            author: {
                name: data['longBylineText']['runs'][0]['text'],
                uri: 'https://www.youtube.com' + data['longBylineText']['runs'][0]['navigationEndpoint']
                    ['commandMetadata']['webCommandMetadata']['url']
            },
            count: Number(data['videoCount']),
            thumbnails: data['thumbnails']
	
        }
    }) 
			    
			    var datapage1= amazing.map(function (item) {  return '🔰🐲'+item.type+'☔☉'+item.identifier+'☔☉'+item.uri+'☔☉'+
					item.title+'☔☉'+item.author.name+'☔☉'+item.thumbnails.url  
				        +'☔☉'+item.description+'☔☉'+JSON.stringify(item.publishedTime)+'☔☉'+JSON.stringify(item.viewCount)+'☔☉'+JSON.stringify(item.duration)})
	
			    
			    
			      			    
			 
				      

	
	
	
	
	
	
//second pages
https.get(decodeURIComponent(url.format({ pathname: encodeURI(req0.originalUrl) })).split("☆")[0].replace('/YTSCRAPER0?','')  +'&page=2'  , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {
			    let match = data.match(/window\["ytInitialData"]\s*=\s*(.*);+\n/)
    if (!match) match = data.match(/var\s*ytInitialData\s*=\s*(.*);\s*\n/)
    const line = match[0].trim()
    const json = JSON.parse(line.substring(line.indexOf('{'), line.length - 1))
    const result = json
        ['contents']['twoColumnSearchResultsRenderer']['primaryContents']['sectionListRenderer']
        ['contents'][0]['itemSectionRenderer']['contents']
			    const amazing = result.filter(video => {
        const type = Object.keys(video)[0].replace('Renderer', '')
        if (typeYT === 'video') return type === 'video'
        else if (typeYT === 'playlist') return type === 'playlist'
        else return ['video', 'playlist'].includes(type)   })
.map(video => {
        const type = Object.keys(video)[0].replace('Renderer', '')
        const data = video[type + 'Renderer']
        const identifier = data[type + 'Id']
        if (type === 'video') {
            const isStream = !Object.keys(data).includes('lengthText')
            let length = Number.MAX_VALUE
            if (!isStream) {
                length = 0
                data['lengthText']['simpleText'].split(':').reverse().forEach((value, index) => {
                    const i = Number(value)
                    length += (index === 0 ? i : i * (60 ** index))
                })
            }
            return {
                type: type,
                identifier: identifier,
                uri: 'https://www.youtube.com/watch?v=' + identifier,
                title: data['title']['runs'][0]['text'],
description : data['descriptionSnippet']['runs'][0]['text'],
publishedTime: JSON.stringify(data['publishedTimeText']),
viewCount : data['viewCountText'],//.simpleText,   
duration :  data['lengthText'],//.simpleText,    
                author: {
                    name: data['ownerText']['runs'][0]['text'],
                    profile: data['channelThumbnailSupportedRenderers']['channelThumbnailWithLinkRenderer']
                        ['thumbnail']['thumbnails'][0]['url'],
                    uri: 'https://www.youtube.com' + data['ownerText']['runs'][0]['navigationEndpoint']
                        ['commandMetadata']['webCommandMetadata']['url']
                },
                length: {
                    ms: isStream ? length : length * 1000,
                    sec: length
                },
                isStream: isStream,
		thumbnails: data['thumbnail']['thumbnails'].slice(-1)[0]
            }
        } 
else return {
            type: type,
            identifier: identifier,
            uri: 'https://www.youtube.com/playlist?list=' + identifier,
            title: data['title']['simpleText'],	
            author: {
                name: data['longBylineText']['runs'][0]['text'],
                uri: 'https://www.youtube.com' + data['longBylineText']['runs'][0]['navigationEndpoint']
                    ['commandMetadata']['webCommandMetadata']['url']
            },
            count: Number(data['videoCount']),
            thumbnails: data['thumbnails']
	
        }
    }) 
			    
			    var datapage2= amazing.map(function (item) {  return '🔰🐲'+item.type+'☔☉'+item.identifier+'☔☉'+item.uri+'☔☉'+
					item.title+'☔☉'+item.author.name+'☔☉'+item.thumbnails.url  
				        +'☔☉'+item.description+'☔☉'+JSON.stringify(item.publishedTime)+'☔☉'+JSON.stringify(item.viewCount)+'☔☉'+JSON.stringify(item.duration)})
	
			    
			    
			      			    
			    res0.header('Content-Type', 'application/json').send(datapage1+''+datapage2)
				      });});});});

		    
		    }
		
		
		
		


}
	

	
	
	
});

	






    
         //💔💙💚 Start the server
         
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

	
	module.exports = app;
