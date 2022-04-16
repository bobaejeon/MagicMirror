/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses.

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
		    module: 'MMM-MyWeather',
		    position: 'top_right',
		    config: {
		      apikey: 'b62794394a6443098e1e39b5d497ee97', // private; don't share!
		      lat: "37.48", 
		      lon: "127.13" , // changed. use the quotes! 
		      coloricon: true, //changed
		      hourly: '1',
		      fctext: '1',
		      fcdaycount: "5",
		      fcdaystart: "0",
		      hourlyinterval: "3",
		      hourlycount: "2",
		      alerttime: 10000,
		      alerttruncatestring: "english:",
		      roundTmpDecs: 1,
		      UseCardinals: 0,
		      layout: "horizontal",
		      iconset: "flat_colourful"
		    }
		  },
		{
		  module: 'MMM-CalendarExt2',
		  config: {
		    calendars : [
		      {
			name: "Personal Calendar",
			className:"myMonth",	
		        url: "https://calendar.google.com/calendar/ical/bbj5608%40gmail.com/public/basic.ics",
		      },
		      {
			name: "Holidays",
			className:"krHolidays",	
		        url: "https://p03-calendars.icloud.com/holidays/kr_ko.ics",
			},

		    ],
		    views: [ //modified
		      {
			name: "Schedule",
		        mode: "month",
			className: "myView",
			position: "bottom_bar",
			calendars: [],
			//slotCount: 2,
			//slotTitleFormat: "MM/DD",
		      },
		    ],
		    scenes: [		//modified
		      {
		        name: "My Calendar",
			views:["Schedule"],
			className: "myScene",
		      },
		    ],
		  },
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}