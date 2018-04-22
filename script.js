$(document).ready(function () {
    let dies = [];

    class Die {
        constructor() {
            this.div = $('<div class="die col-sm-3 m-3 p-3 border bg-light"></div>');
            this.value;
            this.index;
            $(this.div).click(() => {
                this.roll();
            });
            $(this.div).on("dblclick", () => {
                this.removeFrom();
            });
            this.roll();
            this.addTo();
            $('#die-container').append(this.div);
        }

        roll() {
            this.value = randomVal(1, 7);
            $(this.div).text(this.value);
        }

        addTo() {
            dies.push(this);
            this.index = dies.length - 1;
        }

        removeFrom() {
            let removeIndex = dies.indexOf(this, 0);
            dies.splice(removeIndex, 1);
            $(this.div).remove();
        }
    }


    //event listeners for buttons
    $('#generate').click(addDie);

    $('#roll').click(rollDie);

    $('#sum').click(sumDie);

    function addDie() {
        let d1 = new Die();
        console.log(d1);
    }

    function rollDie() {
        for (i = 0; i < dies.length; i++) {
            dies[i].roll();
        }
    }

    //sums all dice values and alerts the sum
    function sumDie() {
        let sum = 0;
        for (i = 0; i < dies.length; i++) {
            console.log(dies[i].value);
            sum = sum + dies[i].value;
        }
        alert(`The sum of all dice is ${sum}`);
    }

    //returns a random value from min to max
    function randomVal(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

});