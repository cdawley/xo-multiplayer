var config = {
  apiKey: "AIzaSyBgjWFzG2d9oGSxmQTCssg0a9z0r-gMfHk",
  authDomain: "tic-tac-toe-2a4cd.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-2a4cd.firebaseio.com",
  projectId: "tic-tac-toe-2a4cd",
  storageBucket: "tic-tac-toe-2a4cd.appspot.com",
  messagingSenderId: "963247441514"
  };

  firebase.initializeApp(config);


let dbase = firebase.database();

let gameRef = dbase.ref().child("games");

// unique ID for this game??

//function newGame (player1, p1xo, player2, p2xo, moveNum) {
  function newGame () {
  // data for new game.
  var gameData = {
    player1: { id: player1, xo: p1xo},
    player2: { id: player2, xo: p2xo},
    xo: playerXO,
    moves: moveNum,
  };

  // Get a key for a new Post.
  var newGameKey = firebase.database().ref().child('games').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var newGameData = {};
  newGameData['/games/' + newGameKey] = gameData;
  //updates['/user-posts/' + uid + '/' + newPostKey] = postData;

return dbase.ref().set(newGame);
};



//let gameRecord = database().ref().update(newGame);
/*
  username = "Joe";
  playerXO = "O";
  moveNum: 2;
  squareNum: 5;
*/



//};

//console.log(writeNewGame(420, "Robert", "X", 1, 5));
