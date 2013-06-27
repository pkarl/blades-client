$(document).ready(function() {
	
	// ok now... push some data up to that server at 3000

	var host = "http://127.0.0.1:3000/game";

	var game = {
		game_number: 501,
		published_date: "2013-06-22",
		player_one: {
			name: "Jeff Vlahos",
			team: "Edmonton"
		},
		player_two: {
			name: "Mike Swartz",
			team: "New York"
		},
		notes: "Mike struck the gaming machine.",
		scores: [{
			p1: 1,
			p2: 2
		},{
			p1: 3,
			p2: 4
		},{
			p1: 5,
			p2: 2
		},{
			p1: 1,
			p2: 1
		}],
		goals_on_self: [{
			player: "player_one",
			goals: 1
		}],
		fights: [{
			fight_winner: "player_one",
			fight_loser: "player_two"
		},{
			fight_winner_id: "player_two",
			fight_loser_id: "player_one"
		}]
	};

	// console.log('attempting to post', game);

	$.post(host, game, function(r) {
		console.log('request successful');
		console.log(r);
	}, 'json');

});
