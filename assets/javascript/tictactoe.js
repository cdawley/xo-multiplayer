let game = {


    // first element is null so array indexes correspond to board squares
    board: [null, false, false, false, false, false, false, false, false, false],

    move: "X",

// these nested objects will contain data on wins available for each player

        O: {

            possible: {
                // horizontal lines
                H1: true, H2: true, H3: true,
                // vertical lines
                V1: true, V2: true, V3: true,
                // diagonal lines
                D1: true, D2: true,

            },
        },

        X: {

            possible: {
                // horizontal lines
                H1: true, H2: true, H3: true,
                // vertical lines
                V1: true, V2: true, V3: true,
                // diagonal lines
                D1: true, D2: true,

            },
        },

            fillBoard: function() {

                for (i = 0; i < 10; i++) {

                    switch (game.board[i]) {
                        case "O":
                            $("#square-" + i).html("O");
                            console.log("O");
                            break;
                        case "X":
                            $("#square-" + i).html("X");
                            console.log("X");
                            break;
                        case false:
                            console.log("square " + i + " is empty.");
                            break;
                        default:
                            // null value at index 0
                            break;
                    }

                }

            },

    xClick: function(squareNumber) {

        let square = $("#square-" + squareNumber);
        game.board[squareNumber] = "X";
        square.html("X");

    },


    oClick: function(squareNumber) {
        let square = $("#square-" + squareNumber);
        game.board[squareNumber] = "O";
        square.html("O");
    },


    // fill these out to check possible wins for each click
            checkAdjacent: function(square) {
                //
                switch(square) {

                    case 1:
                        // 123, 147, 159

                        console.log("H1 possible: " + game.O.possible.hasOwnProperty("H1"));
                        console.log("V1 possible: " + game.O.possible.hasOwnProperty("V1"));
                        console.log("D1 possible: " + game.O.possible.hasOwnProperty("D1"));


                        // wins: H1, V1, D1

                        break;
                    case 2:
                        // 123, 258

                        console.log("H1 possible: " + game.O.possible.hasOwnProperty("H1"));
                        console.log("V2 possible: " + game.O.possible.hasOwnProperty("V2"));

                        // wins: H1, V2

                        break;
                    case 3:
                        // 123, 369

                        console.log("H1 possible: " + game.O.possible.hasOwnProperty("H1"));
                        console.log("V3 possible: " + game.O.possible.hasOwnProperty("V3"));
                        console.log("D2 possible: " + game.O.possible.hasOwnProperty("D2"));

                        // wins: H1, V3, D2

                        break;
                    case 4:
                        // 456, 147

                        // wins: H2, V1

                        break;
                    case 5:
                        // 258, 456, 159, 357

                        // wins: H2, V2, D1, D2

                        break;
                    case 6:
                        // 456, 369

                        // wins: H2, V3

                        break;
                    case 7:
                        // 789, 147, 357

                        // wins: H3, V1, D2

                        break;
                    case 8:
                        // 789, 258

                        // wins: H3, V2

                        break;
                    case 9:
                        // 789, 369, 159

                        // wins: H3, V3, D1

                        break;

                }


            },

};