class Mushrooms extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 13) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var newGr = new Mushrooms(newX, newY);
            MushroomsArr.push(newGr);
            this.multiply = 0;
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in MushroomsArr) {
            if (this.x == MushroomsArr[i].x && this.y == MushroomsArr[i].y) {
                MushroomsArr.splice(i, 1);
                break;
            }
        }
    }
}