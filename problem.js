//Assignment - 1
            /* Feet To Mile */
            
function feettoMile(num){
    var result = num * 0.000189;
    return result;
}

var mileResult = feettoMile(1);
console.log("The Result is : ",mileResult,"Mile")
            
            /* Wood Calculator */

var chair = 1;
var table = 3;
var bed = 5;

function woodCalculator(chairNum,tableNum,bedNum) {
    var chairSum = chair * chairNum;
    var tableSum = table * tableNum;
    var bedSum = bed * bedNum;
    var totalResult = chairSum + tableSum + bedSum;
    return totalResult;
}

var woodResult = woodCalculator(9,0,2);
console.log("The Result is :", woodResult, "CFt Wood")

           /* Brick Calculator */

function brickCalculator(floorNum){
    var floorBrick;
    var newFloor;
    var newFloorBrick;
    var newestFloor;
    var newestFloorBrick;
    var altNum;
     if (floorNum < 11) {
        floorBrick = floorNum * 15 * 1000;
        return floorBrick;
       }
     else if(floorNum < 21){
        floorBrick = 10 * 15 * 1000;
        newFloor = floorNum - 10;
        newFloorBrick = newFloor * 12 * 1000;
        floorBrick = newFloorBrick + floorBrick;
        return floorBrick;
      }
     
     else{
         floorBrick = 10 * 15 * 1000;
         altNum = floorNum - (floorNum - 10)
         newFloorBrick = altNum * 12 * 1000;
         floorBrick = newFloorBrick + floorBrick;
         newestFloor = floorNum - 20 ; 
         newestFloorBrick = newestFloor * 10 * 1000;    
         floorBrick = newestFloorBrick + floorBrick;
         
         return floorBrick;
         
     }
}

var totalBricks = brickCalculator(15);
console.log("The Result is :",totalBricks, "Bricks")


             /* Tiny Friend Name */
             
             
function tinyFriend(friends){
    var tiny = friends[0] ;
    for(var i = 0 ; i < friends.length; i++){
        if (tiny.length > friends[i].length) {
            tiny = friends[i];
        }
    }
    return tiny;
}
var friends = ["Rokibul","Hasan","Tammvirul","Raj","Fahim"];

var tinyfriendResult = tinyFriend(friends);

console.log("The Smallest Friend is :",tinyfriendResult)
