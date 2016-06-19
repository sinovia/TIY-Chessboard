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
var backtrack= 0

console.log("Ready to go!")
// Button for Forward Sequence
$(".forwardButton").click(function(){
  track++
  backtrack++
  var backtrack = (track +9)
  console.log(track);
  if (track === 1){
    $(board[6][3]).animate({bottom: "200px"});
    console.log("When you clicked forward this time, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 2) {
$(board[0][6]).animate({top: "200px"});
console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};


if (track === 3) {
$(board[6][2]).animate({bottom: "200px"});
console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 4) {
$(board[1][4]).animate({top: "110px"});
console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

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

//Skip to End Button
$(".skipToEnd").click(function(){
  $(board[6][3]).animate({bottom: "200px"});
  $(board[0][6]).animate({top: "200px"});
  $(board[6][2]).animate({bottom: "200px"});
  $(board[1][4]).animate({top: "110px"});
  $(board[6][6]).animate({bottom: "110px"});
  $(board[1][3]).animate({bottom: "-200px"});
  $(board[7][5]).animate({bottom: "100px", left: "90px"});
  $(board[0][5]).animate({top: "110px", right: "175px"});
  $(board[7][6]).animate({bottom: "210px", right: "175px"});

});

//Skip to Beginning Button
$(".skipToBeginning").click(function(){
  $(board[6][3]).animate({bottom: "0px"});
  $(board[0][6]).animate({top: "10px"});
  $(board[6][2]).animate({bottom: "0px"});
  $(board[1][4]).animate({top: "10px"});
  $(board[6][6]).animate({bottom: "10px"});
  $(board[1][3]).animate({bottom: "0px"});
  $(board[7][5]).animate({top: "10px", left: "-50px"});
  $(board[0][5]).animate({top: "10px", right: "30px"});
  $(board[7][6]).animate({bottom: "0px", right: "30px"});

});

var click= 0
$(".backButton").click(function(){

if (click = 1){
  $(board[6][3]).animate({bottom: "0px"});
    console.log("Move 1 Reversed");
};



});

console.log("This is the end");
