var cards = ['&#x1F300','&#x1F300', '&#x1F5FF','&#x1F5FF',
	'&#x1F500','&#x1F500','&#x1F400','&#x1F400','&#x1F440','&#x1F440',
	'&#x1F550','&#x1F550','&#x1F350','&#x1F350','&#x1F370','&#x1F370'
];

var cards_values = [];
var cards_tile_ids = [];
var tiles_flipped = 0;
var trycounter=0;

Array.prototype.memory_card_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function createBoard(){
	tiles_flipped = 0;
	trycounter = 0;
	var output = '';
    cards.memory_card_shuffle();
    output+='<table><tr>';
    var nums=0;
	for(var i = 0; i < cards.length; i++){
		if(nums == 4) {
			output+='</tr><tr>';
			nums=0;

		}

		output += '<td><button style="background: url(images/bow.jpeg) no-repeat" id="tile_'+i+'" onclick="cardFlipped(this,\''+cards[i]+'\')"></button></td>';
		nums++;

	}
	output+='</table>';
	document.getElementById('game_board').innerHTML = output;
}

function cardFlipped(tile,val){
	if(tile.innerHTML == "" && cards_values.length < 2){
		tile.style.background = '#736';
		tile.innerHTML = val;
		
		if(cards_values.length == 0){

			cards_values.push(val);
			cards_tile_ids.push(tile.id);
		}

		else if(cards_values.length == 1){
			
			trycounter++;
			cards_values.push(val);
			cards_tile_ids.push(tile.id);

			if(cards_values[0] == cards_values[1]){
				var tile_1 = document.getElementById(cards_tile_ids[0]);
				var tile_2 = document.getElementById(cards_tile_ids[1]);

				tile_1.style.background = '#aded6f'
				tile_1.innerHTML = cards_values[0];
				tile_2.style.background = '#aded6f'
				tile_2.innerHTML = cards_values[1];

				tile.style.background = '#aded6f';
				tile.innerHTML = val;
				tiles_flipped += 2;
				cards_values = [];
            	cards_tile_ids = [];

				if(tiles_flipped == cards.length){
					handleWin();
				}
			} 
			else {
				function faceDown(){
				    var tile_1 = document.getElementById(cards_tile_ids[0]);
				    var tile_2 = document.getElementById(cards_tile_ids[1]);
				    tile_1.style.background = 'url(images/bow.jpeg) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(images/bow.jpeg) no-repeat';
            	    tile_2.innerHTML = "";
				    cards_values = [];
            	    cards_tile_ids = [];
				}
				setTimeout(faceDown, 2000);
			}
		}
	}
}

function handleWin() {
	var winning_msg = '<p> Congratulations you have won in '+trycounter+' tries</p><br> <button tybe="button" onclick="createBoard()">Try Again</button>';
					
	document.getElementById('game_won').style.background = '#FFF';
	document.getElementById('game_won').innerHTML = winning_msg;
}