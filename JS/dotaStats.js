//only static input. dynamic id lidaina

import { rapidApiKey, steamApiKey, accountId } from './config.js';


fetch("https://community-dota-2.p.rapidapi.com/IDOTA2Match_570/GetMatchDetails/V001/?key="+steamApiKey+"&match_id=27110133&matches_requested=25&account_id="+accountId+"", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": rapidApiKey,
		"x-rapidapi-host": "community-dota-2.p.rapidapi.com"
	}
})

.then(response => response.json())
.then(response => {
	console.log(response);
    console.log(accountId);
    document.getElementById('barracks_status_dire').innerHTML = response.result.barracks_status_dire;
    document.getElementById('barracks_status_radiant').innerHTML = response.result.barracks_status_radiant;
    document.getElementById('cluster').innerHTML = response.result.cluster;
    document.getElementById('duration').innerHTML = response.result.duration;
    document.getElementById('first_blood_time').innerHTML = response.result.first_blood_time;
    document.getElementById('human_players').innerHTML = response.result.human_players;
    document.getElementById('match_id').innerHTML = response.result.match_id;
    document.getElementById('negative_votes').innerHTML = response.result.negative_votes;
    
//    console.log(accountId);
    
})
.catch(err => {
	console.error(err);
});