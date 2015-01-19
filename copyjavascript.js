/*
This is just a copy of work in progress...I've changed things around so much, I just wanted to keep some if it safe!

*/

//created an object for each location:

var tallTrees = {
  message: "You see 2 candies right by one of the trees. Uh oh, too slow - a squirrel just got them! No candies.",
  score: 0
};

var bushes = {
  message: "You see some raccoons sniffing around some candies. You manage to grab one, then quickly run away before they can bite you.",
  score: 1
};

var swamp = {
  message: "Oh, look - there are two candies in the boat! Yay!",
  score: 2
};

var ferns = {
  message: "You find one piece of candy in the fern, and pick it up.",
  score: 1
};

var clearing = {
  message: "You don't find any candies here...but you take a rest on the nice log.",
  score: 0
};

var moss = {
  message: "Look, there are two candies underneath a mushroom! Well done!",
  score: 2
};

var stream = {
  message: "You bend down to take a sip of water, when you see 4 candies hidden underneath a rock! You pick them up.",
  score: 4
};

var firewood = {
  message: "You have lucked out: you find 5 candies in the firewood! That's all you need, so go call for the troll.",
  score: 5
};




var totalScore=0;

var answer1 = prompt("To your left, you see some bushes, from which you can hear some animal noises...sounds as if they are eating something. To your right, you see some tall, dark trees. Where do you go, to the TALL TREES or the BUSHES?");

function(answer1) {

  if (answer1.toUpperCase()==="TALL TREES") {
    alert(tallTrees.message);
    score += tallTrees.score;
    decision2();
  } else if (answer1.toUpperCase()==="BUSHES") {
    alert(bushes.message);
    totalScore += bushes.score;
    decision3();
  }
}


/*
var decision2 = function() {
answer2 = prompt("Now you look around you again. You see a small swamp to your left. There's an old, rickety boat. On your right there's a stack of firewood that the forresters must have left. Do you go to the SWAMP or to the FIREWOOD?");

if (answer2.toUpperCase()==="SWAMP") {
console.log(swamp.message);
totalScore += swamp.score;
decision4();

} else if (answer2.toUpperCase()==="FIREWOOD") {
console.log(firewood.message);
totalScore += firewood.score;
finalScore();
}
}

var decision3 = function() {
answer3 = prompt("Now you look around you again. On your left you see a clearing, with a large hollow log in the middle. On your right, you see a small swamp. There's an old, rickety boat. Where do you go, to the CLEARING or to the SWAMP?");

if (answer3.toUpperCase()==="CLEARING") {
console.log(clearing.message);
totalScore += clearing.score;
decision5();
} else if (answer3.toUpperCase()==="SWAMP") {
console.log(swamp.message);
totalScore += swamp.score;
decision4();
}
}

var decision4 = function() {
answer4 = prompt("Next, you look around. On one side, you see a mossy area underneath a giant oak tree. On the other side, you see a large patch of ferns. Where do you go, to the MOSS or the FERNS?");

if (answer4.toUpperCase()==="MOSS") {
console.log(moss.message);
totalScore += moss.score;
finalScore();
} else if (answer4.toUpperCase()==="FERNS") {
console.log(ferns.message);
totalScore += ferns.score;
finalScore();
}
}

var decision5 = function() {
answer5 = prompt("You look around you. On your left you see a little stream. On your right you see a mossy area underneath a giant oak tree. Where do you go, to the STREAM or to the MOSS?");

if (answer5.toUpperCase()==="STREAM") {
console.log(stream.message);
totalScore += stream.score;
finalScore();
} else if (answer5.toUpperCase()==="MOSS") {
console.log(moss.message);
totalScore += moss.score;
finalScore();
}
}

var finalScore = function() {
console.log("Time is up - the troll is calling you. There he is! Let's see how many candies you have. You have " + totalScore + " candies!");

if (totalScore >= 5) {
console.log("Congratulations, you have enough candy to keep the troll happy. He is letting you pass. Have fun at the party!");
} else if (totalScore = 4) {
console.log("The troll says you nearly have enough candy. He will let you go to the party if you take him with you. You think that's a great idea - your friends will be impressed!");
} else {
console.log("Uh oh, the troll is not happy. He is sending you back to try again...");
}
}






/*


Decision 1:

To your left, you see some bushes, from which you can hear some animal noises...sounds as if they are eating something LOCATION 2=BUSHES. To your right, you see some tall, dark trees LOCATION 1=TALL TREES. Where do you go, to the TALL TREES or the BUSHES?

IF INPUT = TALL TREES:
You see 2 candies right by one of the trees. Uh oh, too slow - a squirrel just got them! No candies...
ADD TO SCORE: 0

Now you look around you again. You see a small swamp to your left. There's an old, rickety boat LOCATION 3=SWAMP. On your right there's a stack of firewood that the forresters must have left LOCATION 8 = FIREWOOD.Do you go to the SWAMP or to the FIREWOOD?


IF INPUT = BUSHES:
You see some raccoons sniffing around some candies. You manage to grab one, then quickly run away before they can bite you.
ADD TO SCORE: 1;

Now you look around you again. On your left you see a clearing, with a large hollow log in the middle LOCATION 5 = CLEARING. On your right, you see a small swamp. There's an old, rickety boat LOCATION 3 = SWAMP. Where do you go, to the CLEARING or to the SWAMP?

IF INPUT = SWAMP:
Oh, look - there are two candies in the boat! Yay!
ADD TO SCORE: 2;

Next, you look around. On one side, you see a mossy area underneath a giant oak tree LOCATION 6 = MOSS. On the other side, you see a large patch of ferns LOCATION 4 = FERNS. Where do you go, to the MOSS or the FERNS?

IF INPUT = MOSS:
Look, there are two candies underneath a mushroom! Well done!
ADD TO SCORE: 2;

IF INPUT = FERNS:
You find one piece of candy in the fern, and pick it up.
ADD TO SCORE: 1;


IF INPUT = FIREWOOD:
You have lucked out: you find 5 candies in the firewood! That's all you need, so go call for the troll.
ADD TO SCORE: 5;

IF INPUT = CLEARING:
You don't find any candies here...but you take a rest on the nice log.
ADD TO SCORE: 0;

You look around you. On your left you see a little stream LOCATION 7 = STREAM. On your right you see a mossy area underneath a giant oak tree LOCATION 6 = MOSS. Where do you go, to the STREAM or to the MOSS?

IF INPUT = STREAM:
You bend down to take a sip of water, when you see 4 candies hidden underneath a rock! You pick them up.

AFTER LOCATIONS 8, 4, 6, AND 7:
Time is up - the troll is calling you. There he is! Let's see how many candies you have:
TOTAL SCORE

IF TOTAL SCORE >= 5: Congratulations, you have enough candy to keep the troll happy. He is letting you pass. Have fun at the party!

IF TOTAL SCORE = 4: The troll says you nearly have enough candy. He will let you go to the party if you take him with you. You think that's a great idea - your friends will be impressed!

IF TOTAL SCORE <= 3: Uh oh, the troll is not happy. He is sending you back to try again...
*/
