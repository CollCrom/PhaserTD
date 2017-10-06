const game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'gameContainer', {preload: preload, create: create, update: update});

const tileSquare = 32;

const tileForbidden = ["1011","1211","18","17","122","121","222","221","322","321","422","421","522","521","622","621","722","721","822","821","720","820","819","719","718","818","817","717","716","816","815","715","714","814","813","713","712","812","811","711","710","810","89","79","78","88","87","77","76","86","85","75","74","84","64","65","55","54","44","45","34","35","25","24","14","15","16","26","27","28","29","19","110","210","111","211","310","311","410","411","510","511","610","611","910","911","1010","1110","1111","1210","1310","1311","1411","1410","1510","1511","1611","1610","1710","1711","1612","1712","1613","1713","1614","1714","1615","1715","1616","1716","1717","1617","1618","1718","1619","1720","1620","1719","1819","1820","1919","1920","2020","2019","2119","2120","2219","2220","2320","2319","2420","2419","2519","2520","2620","2720","2719","2619","2618","2718","2717","2716","2616","2617","2615","2715","2714","2614","2613","2713","2712","2612","2611","2711","2710","2610","269","279","278","268","267","277","276","266","265","275","274","264","263","273","272","262","261","271","270","260","303","293","292","302","301","291","243","233","232","242","241","231","0","1","2","3","4","5","6","7","8","9","10","11","12","13","123","223","323","423","523","623","723","823","923","1023","1123","1022","1122","1121","1221","1222","1223","1323","1322","1321","1421","1422","1423","1523","1522","1521","1621","1623","1622","1723","1722","1721","1821","1822","1823","1921","1922","1923","2023","3123","3122","3121","3120","3119","3118","3117","3115","3116","3113","3114","3111","3112","3110","319","318","316","317","315","314","313","312","112","120","124","125","126","127","128","129","1212","1213","1214","1216","1215","1218","1219","1220","1217","1320","1319","1318","1317","1316","1315","1314","1313","1312","139","138","137","136","135","134","133","132","131","130","113","114","115","116","117","118","119","1112","1113","1114","1115","1116","1117","1118","1119","1120","2022","2021","2122","2123","2223","2323","2423","2523","2623","2723","2823","2923","3023","3022","3021","2921","2922","2822","2821","2721","2722","2622","2621","2521","2522","2422","2421","2321","2322","2222","2221","2121","212","202","192","182","181","191","201","83","105","1912","183","203","193","213","171","1813","2115","217","47","57","67","252","282","251","281","196","2114","2014","2214","37","215","195","194","254","284","2116","218","59"];
const path = [{"x":0,"y":22},{"x":1,"y":22},{"x":2,"y":22},{"x":3,"y":22},{"x":4,"y":22},{"x":5,"y":22},{"x":6,"y":22},{"x":7,"y":22},{"x":8,"y":22},
			  {"x":8,"y":21},{"x":8,"y":20},{"x":8,"y":19},{"x":8,"y":18},{"x":8,"y":17},{"x":8,"y":16},{"x":8,"y":15},{"x":8,"y":14},{"x":8,"y":13},{"x":8,"y":12},{"x":8,"y":11},{"x":8,"y":10},{"x":8,"y":9},{"x":8,"y":8},{"x":8,"y":7},{"x":8,"y":6},{"x":8,"y":5},
			  {"x":7,"y":5},{"x":6,"y":5},{"x":5,"y":5},{"x":4,"y":5},{"x":3,"y":5},
			  {"x":2,"y":5},{"x":2,"y":6},{"x":2,"y":7},{"x":2,"y":8},{"x":2,"y":9},{"x":2,"y":10},{"x":2,"y":11},
			  {"x":3,"y":11},{"x":4,"y":11},{"x":5,"y":11},{"x":6,"y":11},{"x":7,"y":11},{"x":8,"y":11},{"x":9,"y":11},{"x":10,"y":11},{"x":11,"y":11},{"x":12,"y":11},{"x":13,"y":11},{"x":14,"y":11},{"x":15,"y":11},{"x":16,"y":11},{"x":17,"y":11},
              {"x":17,"y":12},{"x":17,"y":13},{"x":17,"y":14},{"x":17,"y":15},{"x":17,"y":16},{"x":17,"y":17},{"x":17,"y":18},{"x":17,"y":19},
              {"x":17,"y":20},{"x":18,"y":20},{"x":19,"y":20},{"x":20,"y":20},{"x":21,"y":20},{"x":22,"y":20},{"x":23,"y":20},{"x":24,"y":20},{"x":25,"y":20},{"x":26,"y":20},{"x":27,"y":20},
              {"x":27,"y":19},{"x":27,"y":18},{"x":27,"y":17},{"x":27,"y":16},{"x":27,"y":15},{"x":27,"y":14},{"x":27,"y":13},{"x":27,"y":12},{"x":27,"y":11},{"x":27,"y":10},{"x":27,"y":9},{"x":27,"y":8},{"x":27,"y":7},{"x":27,"y":6},{"x":27,"y":5},{"x":27,"y":4},{"x":27,"y":3},{"x":27,"y":2},{"x":27,"y":1},{"x":27,"y":0}];

const enemiesAnimation = [{'name': 'panda', 'length': 3}];

let towers;
let scoreText, towerText, levelText;
let score = 0;
let level = 0;
let towerCounter = 0;

function preload() {
	game.load.tilemap('map', '/maps/TowerDefenseMap.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('tiles1', '/maps/LPC_Terrain/terrain.png');
	game.load.image('tiles2', '/maps/Atlas2/build_atlas.png');
	game.load.image('tiles3', '/maps/Atlas2/obj_misk_atlas.png')
	game.load.image('tower', '/sprites/Tower-32.png');
	game.load.image('bullet', '/sprites/bullet4.png');

	game.load.spritesheet('panda', '/sprites/panda.png', 32,32, 3);

	game.load.image('button', '/sprites/button.png');

	game.stage.scale.pageAlignHorizontally = true;
	game.stage.scale.pageAlignVeritcally = true;
}

function create () {
	game.physics.startSystem(Phaser.Physics.ARCADE)
	const map = game.add.tilemap('map');
	map.addTilesetImage('terrain', 'tiles1');
	map.addTilesetImage('build_atlas', 'tiles2');
	map.addTilesetImage('ObjAtlas', 'tiles3');
	map.createLayer('Grass');
	map.createLayer('Tile Layer 6');
	map.createLayer('Maze1');
	map.createLayer('Maze2');
	enemies = game.add.group();
	towers = game.add.group();
	map.createLayer('Objects');
	map.createLayer('Objects2');

	game.physics.enable(towers, Phaser.Physics.ARCADE);

	bullets = game.add.group();
	bullets.enableBody = true;
	bullets.physicsBodyType = Phaser.Physics.ARCADE;
	bullets.createMultiple(10, 'bullet');
	bullets.setAll('anchor.x', 0.5);
	bullets.setAll('anchor.y', 1);
	bullets.setAll('checkWorldBounds', true);
	bullets.setAll('outOfBoundsKill', true);

	enemies.enableBody = true;
	enemies.physicsBodyType = Phaser.Physics.ARCADE;

	game.add.text(595, 30, 'Start Round');
	scoreText = game.add.text(595, 60, 'Score: 0', {fontSize: 20});
	levelText = game.add.text(595, 80, 'Level: 1', {fontSize: 20});
	towerText = game.add.text(595, 100, 'Towers Left: 10', {fontSize: 20});
	const button = game.add.button(450, -20, 'button', generateEnemy, this, 2, 1, 0);

	button.events.onInputDown.add(listener, this);
}

function update () {
	enemies.forEach( (enemy) => {
		Enemy.prototype.moveElmt(enemy);
	});

	towers.forEach( (tower) => {
		Tower.prototype.fire(tower);
	});

	game.physics.arcade.overlap(bullets, enemies, collisionHandler, null, this);
}

const listener = (pointer) => {
	Tower.prototype.add(pointer);
}

const collisionHandler = (bullet, enemy) => {
	bullet.kill();
	enemy.destroy();
	score += 3*level;
	scoreText.text = 'Score: ' + score;
}

const generateEnemy = () => {
	let i = 0;
	const enemysBcl = setInterval( () => {
		if(i < Math.pow(3, level)) {
			const animEnemy = enemiesAnimation[parseInt(Math.random() * enemiesAnimation.length)];
			new Enemy(path[0].x * tileSquare , path[0].y * tileSquare, animEnemy.name, animEnemy.length);
		}
		else {
			clearTimeout(enemysBcl);
		}
		i++
	}, 1000/(level+1));
	levelText.text = 'Level: ' + ++level;
	towerCounter -= Math.floor((1 / 3 * level));
	towerText.text = 'Towers Left: ' + (10 - towerCounter);
}

// const sendToServer = () => {
// 	$.ajax({
// 		url: '/users',
// 		type: 'POST',
// 		dataType: 'Json',
// 		success: (res) => {
// 			console.log(res,'success')
// 		},
// 		error: (err) => {
// 			console.log(err, 'error')
// 		}
// 	})
// }

// const getFromServer = () => {
// 	$.ajax({
// 		url: '/users',
// 		type: 'GET',
// 		dataType: 'Json',
// 		success: (res) => {
// 			console.log(res,'success');
// 		},
// 		error: (err) => {
// 			console.log(err, 'error')
// 		}
// 	})
// }

const gameOver = () => {
	game.paused = true;
    let player = prompt("Enter your name for the scoreboard");
    player = player.toUpperCase();
    localStorage.setItem(player, score);


    const sortable = [];
	for (const players in localStorage) {
	    sortable.push([players,'_______________________',localStorage[players]]);
	}

	sortable.sort(function(a, b) {
	    return b[2] - a[2];
	});

	for(let i = 0; i < sortable.length; i++){
		$h5 = $('<h5>');
		$h5.text(sortable[i]);
		text = $h5.text();
		$h5.text(text.replace(/,/g, ''));
		$('.modal-body').append($h5);
	}
    $('#gameOverModal').css('display', 'block');
    $('.close').on('click', () => {
        location.reload();
    });
}