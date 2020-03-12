// let numbers = [1, 5, 6, 6, 76, 75, 5];
// let result = numbers.reduce((acc, rec) => {
// 	return acc + rec
// }, 0);
// console.log(result);



// let numbers = [1, 5, undefined, 6, 6, 76, 75, 5];
// let result = numbers.reduce((acc, rec) => {
// 	if (typeof rec !== 'undefined') { return acc + rec }
// 	return acc
// }, 0);
// console.log(result);

const users = [{
	"id": 1,
	"first_name": "Zora",
	"last_name": "Huertas",
	"email": "zhuertas0@odnoklassniki.ru",
	"ip_address": "73.91.189.247"
}, {
	"id": 2,
	"first_name": "Zuzana",
	"last_name": "Jirus",
	"email": "zjirus1@reverbnation.com",
	"ip_address": "221.81.92.35"
}, {
	"id": 3,
	"first_name": "Goldina",
	"last_name": "Lannin",
	"email": "glannin2@storify.com",
	"gender": "Female",
	"ip_address": "135.114.183.203"
}, {
	"id": 4,
	"first_name": "Giacobo",
	"last_name": "Giscken",
	"email": "ggiscken3@usnews.com",
	"ip_address": "201.168.173.253"
}, {
	"id": 5,
	"first_name": "Kahlil",
	"last_name": "Bootton",
	"email": "kbootton4@dion.ne.jp",
	"gender": "Male",
	"ip_address": "27.5.113.174"
}, {
	"id": 6,
	"first_name": "Amalita",
	"last_name": "Brashaw",
	"email": "abrashaw5@themeforest.net",
	"gender": "Female",
	"ip_address": "217.230.197.35"
}, {
	"id": 7,
	"first_name": "Brittaney",
	"last_name": "Stow",
	"email": "bstow6@marketwatch.com",
	"gender": "Female",
	"ip_address": "27.115.198.218"
}, {
	"id": 8,
	"first_name": "Stanislaus",
	"last_name": "Waskett",
	"email": "swaskett7@hao123.com",
	"ip_address": "63.129.121.202"
}, {
	"id": 9,
	"first_name": "Melinde",
	"last_name": "Manuel",
	"email": "mmanuel8@ask.com",
	"gender": "Female",
	"ip_address": "221.63.28.104"
}, {
	"id": 10,
	"first_name": "Page",
	"last_name": "Hrishanok",
	"email": "phrishanok9@addtoany.com",
	"ip_address": "73.71.27.200"
}, {
	"id": 11,
	"first_name": "Abraham",
	"last_name": "Keates",
	"email": "akeatesa@intel.com",
	"ip_address": "63.2.7.145"
}, {
	"id": 12,
	"first_name": "Joni",
	"last_name": "Teager",
	"email": "jteagerb@google.ru",
	"gender": "Female",
	"ip_address": "92.225.8.194"
}, {
	"id": 13,
	"first_name": "Virginia",
	"last_name": "Rappaport",
	"email": "vrappaportc@hostgator.com",
	"ip_address": "195.175.0.17"
}, {
	"id": 14,
	"first_name": "Brnaba",
	"last_name": "Seeks",
	"email": "bseeksd@dailymotion.com",
	"gender": "Male",
	"ip_address": "89.121.197.82"
}, {
	"id": 15,
	"first_name": "Melania",
	"last_name": "Crowcum",
	"email": "mcrowcume@etsy.com",
	"ip_address": "154.136.64.17"
}, {
	"id": 16,
	"first_name": "Alessandra",
	"last_name": "Hrishchenko",
	"email": "ahrishchenkof@nytimes.com",
	"ip_address": "40.146.181.196"
}, {
	"id": 17,
	"first_name": "Cris",
	"last_name": "Burthom",
	"email": "cburthomg@dailymotion.com",
	"gender": "Female",
	"ip_address": "57.93.188.131"
}, {
	"id": 18,
	"first_name": "Marthena",
	"last_name": "Camoys",
	"email": "mcamoysh@constantcontact.com",
	"gender": "Female",
	"ip_address": "243.248.35.236"
}, {
	"id": 19,
	"first_name": "Robert",
	"last_name": "Kotick",
	"email": "rsacksi@prlog.org",
	"gender": "Male",
	"ip_address": "14.31.17.249"
}, {
	"id": 20,
	"first_name": "Rolland",
	"last_name": "Sacks",
	"email": "nmelchiorj@wikimedia.org",
	"ip_address": "148.26.76.58"
}];

let result = users.reduce((acc, rec) => {
	if (typeof acc[rec.gender] === 'undefined') {
		return { ...acc, [rec.gender]: [`${rec.first_name} ${rec.last_name}`] }
	}
	return { ...acc, [rec.gender]: acc[rec.gender].concat([`${rec.first_name} ${rec.last_name}`]) }
}, {});
console.log(result);