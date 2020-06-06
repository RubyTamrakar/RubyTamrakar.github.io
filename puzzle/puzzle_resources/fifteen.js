window.onload =
    (function() {
        let puzzleArea = document.getElementById("puzzlearea");
        let piece = document.getElementsByClassName("puzzlepiece");
        let emptyTile = [3, 3];
        let matrix = [];

        function removeHoverPiece() {
            for (let i = 0; i < piece.length; i++) {
                piece[i].classList.remove("movablepiece");
            }
        }

        function addHoverPiece() {
            let [row, col] = emptyTile;

            let top = row > 0 ? [row - 1, col] : null;
            let bottom = row < 3 ? [row + 1, col] : null;
            let left = col > 0 ? [row, col - 1] : null;
            let right = col < 3 ? [row, col + 1] : null;

            if (top) {
                [row, col] = top;
                matrix[row][col].classList.add('movablepiece');
            }

            if (bottom) {
                [row, col] = bottom;
                matrix[row][col].classList.add('movablepiece');
            }

            if (left) {
                [row, col] = left;
                matrix[row][col].classList.add('movablepiece');
            }

            if (right) {
                [row, col] = right;
                matrix[row][col].classList.add('movablepiece');
            }

        }

        for (let i = 0; i < piece.length; i++) {
            piece[i].addEventListener("click", findNeighborElem);
        }


        let index = 0;
        for (let i = 0; i < Math.ceil((piece.length) / 4); i++) {
            let row = [];
            for (let j = 0; j < 4; j++) {
                if (piece[index]) {
                    piece[index].dataset.row = i;
                    piece[index].dataset.column = j;
                    row.push(piece[index]);
                }
                index++;
            }
            matrix.push(row);
        }

        addHoverPiece();

        function findNeighborElem() {
            removeHoverPiece();
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

            if (moved) {
                let old = [parseInt(this.dataset.row), parseInt(this.dataset.column)];

                this.dataset.row = emptyTile[0];
                this.dataset.column = emptyTile[1];

                matrix[emptyTile[0]][emptyTile[1]] = this;
                matrix[old[0]][old[1]] = null;
                emptyTile = [row, column];
                addHoverPiece();

            }



        }

    });