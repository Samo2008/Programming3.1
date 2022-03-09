class Meat extends LivingCreature {
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 7;

            var newMeat = new Meat(newX, newY);
            MeatArr.push(newMeat);
            this.multiply = 0;
        }
    }

}