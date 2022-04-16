/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "rainAndSnow",
			position: "fullscreen_above",
			config: {
				location: "Seoul",
				locationID: "1835848", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "3e6ce2166071444af6ca9d2ae557003f"
			}
		},
		/*{
			module: "updatenotification",
			position: "top_bar"
		},*/
		{
			module: "clock",
			position: "top_left"
		},
		{
  module: 'MMM-CalendarExt2',
  config: {
	 updateInterval: 1000* 60 *10,
    calendars : [
      { 
	className: "holiday",
	name: "holiday",
        url: "https://calendar.google.com/calendar/ical/ltm0jrlsamv8mlhrg0bpcgu6ps%40group.calendar.google.com/public/basic.ics",
      },
      {
	className: "celebration",
	name: "celebration",
	url: "https://calendar.google.com/calendar/ical/tclt3fhjagbi4v5fk59va489j8%40group.calendar.google.com/public/basic.ics",
      },
      {
	className: "private",
	name: "private",
	url: "https://calendar.google.com/calendar/ical/bbj5608%40gmail.com/private-7e037af52c0d099a55e2135430c224a1/basic.ics",
	},
    ],
    views: [
      {
	name: "My view", 
	//className: "",
        mode: "week",
	position: "lower_third",
	calendars: ["holiday", "celebration","private"],
      },
    ],
    scenes: [
      {
        name: "My calendar",
	//className: "",
      },
    ],
  },
},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Seoul",
				locationID: "1835848", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "3e6ce2166071444af6ca9d2ae557003f",
				//showWindDirection: false,
				//showWindDirectionAsArrow: false,
				showHumidity: true,
				//onlyTemp: true,
				showFeelsLike: true
				
			}
		},
		{
			module: "fineDust",
			position: "top_right",
			config: {
				apiKey: "f4946637-f16d-4923-acd1-7d8978975435"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Seoul",
				locationID: "1835848", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "3e6ce2166071444af6ca9d2ae557003f",
				showRainAmount: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
