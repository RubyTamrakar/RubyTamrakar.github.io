window.onload =
    (function() {
        let puzzleArea = document.getElementById("puzzlearea");
        let piece = document.getElementsByClassName("puzzlepiece");

        for (let i = 0; i < piece.length; i++) {
            piece[i].addEventListener("click", findNeighborElem);
        }

        let matrix = [];
        for (let i = 0; i < Math.ceil((piece.length) / 4); i++) {
            let index = 0;
            let row = [];
            for (let j = 0; j < 4; j++) {
                piece[index].dataset.row = i;
                piece[index].dataset.column = j;
                row.push(piece[index]);
                index++;
            }
            matrix.push(row);
        }

        let emptyTile = [3, 3];

        function findNeighborElem() {
            row = parseInt(this.dataset.row);
            column = parseInt(this.dataset.column);
            let top = [row - 1, column];
            let bottom = [row + 1, column];
            let left = [row, column - 1];
            let right = [row, column + 1];

            let moved = false;

            if (emptyTile[0] == top[0] && emptyTile[1] == top[1]) {
                this.style.top = emptyTile[0] * 100 + "px";
                this.style.left = emptyTile[1] * 100 + "px";
                moved = true;

            }
            if (emptyTile[0] == bottom[0] && emptyTile[1] == bottom[1]) {
                this.style.top = emptyTile[0] * 100 + "px";
                this.style.left = emptyTile[1] * 100 + "px";
                moved = true;

            }

            if (emptyTile[0] == left[0] && emptyTile[1] == left[1]) {
                this.style.top = emptyTile[0] * 100 + "px";
                this.style.left = emptyTile[1] * 100 + "px";
                moved = true;

            }

            if (emptyTile[0] == right[0] && emptyTile[1] == right[1]) {
                this.style.top = emptyTile[0] * 100 + "px";
                this.style.left = emptyTile[1] * 100 + "px";
                moved = true;
            }

            if (moved = true) {
                let old = [parseInt(this.dataset.row), parseInt(this.dataset.column)];
                row = emptyTile[0];
                column = emptyTile[1];

                emptyTile[0] = old[0];
                emptyTile[1] = old[1];

            }



        }

    });