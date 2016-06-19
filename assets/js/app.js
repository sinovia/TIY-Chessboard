var board = [
[$(".00"),$(".01"),$(".02"),$(".03"),$(".04"),$(".05"),$(".06"),$(".07")],
[$(".10"),$(".11"),$(".12"),$(".13"),$(".14"),$(".15"),$(".16"),$(".17")],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[$(".60"),$(".61"),$(".62"),$(".63"),$(".64"),$(".65"),$(".66"),$(".67")],
[$(".70"),$(".71"),$(".72"),$(".73"),$(".74"),$(".75"),$(".76"),$(".77")]]

var track = 0
var bracktrack= 0

console.log("ready")
// Button for Forward Sequence
$(".forwardButton").click(function(){
  track++
  backtrack++
  var backtrack = (track +9)
  console.log(track);
  if (track === 1 || backtrack === 1){
    $(board[6][3]).animate({bottom: "200px"});
    console.log("When you clicked forward this time, the track number is " + track + " and the backtracknumber is " + backtrack);
};
  if (track === 2 && backtrack != 1) {
    $(board[6][3]).animate({bottom: "200px"});
  // $(board[0][6]).animate({top: "210px", right: "170px"});
  console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 3 && backtrack ===12 ) {
$(board[0][6]).animate({top: "200px"});
console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};


if (track === 4) {
$(board[6][2]).animate({bottom: "200px"});
console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

// if (track === 4) {
// $(board[1][4]).animate({top: "110px"});
// console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
// };

if (track === 5) {
$(board[6][6]).animate({bottom: "110px"});
console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 6) {
$(board[1][3]).animate({bottom: "-200px"});
console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 7) {
$(board[7][5]).animate({bottom: "110px", left: "90px"});
console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 8) {
$(board[0][5]).animate({top: "110px", right: "175px"});
console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 9) {
$(board[7][6]).animate({bottom: "210px", right: "175px"});
console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);

};
  // console.log("I made it to the end!")
  // console.log ("current track " + track)

});

//Full Sequence Backward
$(".backButton").click(function(){
  var backtrack = track + 9
  backtrack++
  console.log("When I clicked back, the track number is " + track + " and the backtracknumber is " + backtrack);
//
if ((track = 1 && backtrack === 11) || (track = 2 && backtrack === 12)) {
  $(board[6][3]).animate({bottom: "0px"});
  console.log("Move 1 Reversed!  The track number is currently " + track + " and the backtrack number is currently " + backtrack);
};



// if (track = 2 && backtrack ===)

});
