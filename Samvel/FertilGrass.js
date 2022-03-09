class FertilGrass extends LivingCreature {
    mul() {
        this.multiply +=3;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;

            var newFertilGrass = new FertilGrass(newX, newY);
            FertilGrassArr.push(newFertilGrass);
            this.multiply = 0;
        };
    };
};