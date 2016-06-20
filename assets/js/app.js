var board = [
[$(".00"),$(".01"),$(".02"),$(".03"),$(".04"),$(".05"),$(".06"),$(".07")],
[$(".10"),$(".11"),$(".12"),$(".13"),$(".14"),$(".15"),$(".16"),$(".17")],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[$(".60"),$(".61"),$(".62"),$(".63"),$(".64"),$(".65"),$(".66"),$(".67")],
[$(".70"),$(".71"),$(".72"),$(".73"),$(".74"),$(".75"),$(".76"),$(".77")]]

console.log("Ready to go!");

// Button for Forward Sequence
var track = 0
$(".forwardButton").click(function(){
  track++
  backtrack++
  var backtrack = (track +9)
  console.log(track);
  if (track === 1){
    $(board[6][3]).animate({bottom: "200px"});
    // console.log("When you clicked forward this time, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 2)  {
$(board[0][6]).animate({top: "210px"});
// console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};


if (track === 3) {
$(board[6][2]).animate({bottom: "200px"});
// console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 4) {
$(board[1][4]).animate({top: "110px"});
// console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 5) {
$(board[6][6]).animate({bottom: "100px"});
// console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 6) {
$(board[1][3]).animate({bottom: "-200px"});
// console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 7) {
$(board[7][5]).animate({bottom: "100px", left: "90px"});
// console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 8) {
$(board[0][5]).animate({top: "110px", right: "175px"});
// console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);
};

if (track === 9) {
$(board[7][6]).animate({bottom: "210px", right: "175px"});
// console.log("When you clicked forward, the track number is " + track + " and the backtracknumber is " + backtrack);

};
  // console.log("I made it to the end!")
});

var backclick = 0
$(".backButton").click(function(){
backclick++
  console.log(track);
  if (backclick === 1){
    $(board[7][6]).animate({bottom: "0px", right: "25px"});
    console.log("Move 9 reversed")
    // console.log("When you clicked forward this time, the track number is " + track + " and the backtracknumber is " + backtrack);
};
if (backclick === 2){
  $(board[0][5]).animate({top: "10px", right: "30px"});
  console.log("Move 8 reversed")
};

if (backclick === 3){
  $(board[7][5]).animate({bottom: "0px", left: "-50px"});
  console.log("Move 7 reversed")
};

if (backclick === 4){
  $(board[1][3]).animate({bottom: "0px"});
  console.log("Move 6 reversed")
};

if (backclick === 5){
  $(board[6][6]).animate({bottom: "0px"});
  console.log("Move 5 reversed")
};

if (backclick === 6){
  $(board[1][4]).animate({top: "10px"});
  console.log("Move 4 reversed")
};

if (backclick === 7){
  $(board[6][2]).animate({top: "10px"});
  console.log("Move 3 reversed")
};

if (backclick === 8){
  $(board[0][6]).animate({top: "10px"});
  console.log("Move 2 reversed")
};

if (backclick === 9){
  $(board[6][3]).animate({bottom: "0px"});
  console.log("Move 1 reversed")
};

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

$('.resetButton').click(function() {
    location.reload();
});
