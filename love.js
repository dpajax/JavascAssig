prompt("what is your name?")
prompt("what is your lover name?")

var loveScore = Math.random() * 100;
 loveScore = Math.floor(loveScore) + 1
 alert("Your love score is " + loveScore + "%")

 if (loveScore >= 80){
     alert("Your love score is " + loveScore +"%" + "You love each other like crazy")
 }

else{
     (loveScore >= 40)  
   alert("Your love score is " + loveScore + "%" +   "You love each other like water")
 }



var guestList = ["oladapo", "zainab", "zayyad","olu"]
var guestName = prompt("Enter Your name")

if (guestList.includes(guestName.toLowerCase())){
    alert("welcome!")
}
else{
    alert('Sorry,Next Time')
}






