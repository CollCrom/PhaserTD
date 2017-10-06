const Tower = function(worldX, worldY, tileX, tileY, tile) {
    const index = String(eval(tileX + "" + tileY));

    if ($.inArray(index, tileForbidden) == -1) {
        this.tower = game.add.sprite(worldX, worldY, tile);
        this.tower.worldX = worldX;
        this.tower.worldY = worldY;
        this.tower.tileX = tileX;
        this.tower.tileY = tileY;
        this.tower.tile = tile;
        this.tower.fireTime = 5000;
        this.tower.fireLastTime = game.time.now + this.tower.fireTime;
        if(towerCounter  < 10){
            towers.add(this.tower);
            towerText.text = 'Towers Left: ' + (10 - ++towerCounter);
            tileForbidden.push(index);
        }
    }
}

Tower.prototype.add = (pointer) => {
    game.input.onDown.add(Tower.prototype.posit, this);
}

Tower.prototype.posit = (pointer) => {
    if(towerCounter < 10){
        const tileworldX = pointer.worldX - (pointer.worldX % tileSquare);
        const tileworldY = pointer.worldY - (pointer.worldY % tileSquare);
        const tileX = Math.floor(pointer.worldX / tileSquare);
        const tileY = Math.floor(pointer.worldY / tileSquare);
        new Tower(tileworldX, tileworldY, tileX, tileY, 'tower');
    }
}

Tower.prototype.fire = (tower) => {
    bullets.createMultiple(1, 'bullet', 0, false);
    if (game.time.now > tower.fireLastTime) {
        const bullet = bullets.getFirstExists(false);
        if (bullet && typeof enemies.children[0] != "undefined") {
            bullet.reset(tower.x, tower.y);
            bullet.body.collideWorldBounds = false;
            bullet.rotation = game.physics.arcade.moveToObject(bullet, enemies.children[0], 300);
        }
        tower.fireLastTime = game.time.now + tower.fireTime;
    }
}