/*  It's Halloween night, and you are on your way to a Halloween party. To get there, you have to go through the spooky woods, where the trolls live. It's dark, and foggy, but you enter the woods anyway....

Before long, you hear a strange grumbling noise. A troll appears out of the fog, and shouts at you: 'Where do you think you're going?' You tell him you just want to get to a party on the other side of the woods. The troll says he's been trick or treating already, but one of the other trolls has stolen his candy. He will only let you pass if you find at least 5 of his candies in the woods, and return them to him. You decide it's worth a try...")

*/


// Setting totalScore counter to 0. Declaring functions for each decision point:

var totalScore=0;


function decision1 () {
  var answer1 = prompt(promptArray[0]);

  if (answer1.toUpperCase()==="TALL TREES") {
    alert(tallTrees.message);
    totalScore += tallTrees.score;
    decision2();
  } else if (answer1.toUpperCase()==="BUSHES") {
    alert(bushes.message);
    totalScore += bushes.score;
    decision3();
  }
}

function decision2 () {
  var answer2 = prompt(promptArray[1]);

  if (answer2.toUpperCase()==="SWAMP") {
    alert(swamp.message);
    totalScore += swamp.score;
    decision4();

  } else if (answer2.toUpperCase()==="FIREWOOD") {
    alert(firewood.message);
    totalScore += firewood.score;
    finalMessage();
    return;
  }
}

function decision3 () {
  var answer3 = prompt(promptArray[2]);

  if (answer3.toUpperCase()==="CLEARING") {
    alert(clearing.message);
    totalScore += clearing.score;
    decision5();

  } else if (answer3.toUpperCase()==="SWAMP") {
    alert(swamp.message);
    totalScore += swamp.score;
    decision4();
  }
}

function decision4 () {
  var answer4 = prompt(promptArray[3]);

  if (answer4.toUpperCase()==="MOSS") {
    alert(moss.message);
    totalScore += moss.score;
    prompt(promptArray[5]);
    finalMessage();
    return;
  } else if (answer4.toUpperCase()==="FERNS") {
    alert(ferns.message);
    totalScore += ferns.score;
    prompt(promptArray[5]);
    finalMessage();
    return;
  }
}

function decision5 () {
  var answer5 = prompt(promptArray[4]);

  if (answer5.toUpperCase()==="STREAM") {
    alert(stream.message);
    totalScore += stream.score;
    prompt(promptArray[5]);
    finalMessage();
    return;
  } else if (answer5.toUpperCase()==="MOSS") {
    alert(moss.message);
    totalScore += moss.score;
    prompt(promptArray[5]);
    finalMessage();
    return;
  }
}


function finalMessage (totalScore) {
  if (totalScore >= 5) {
    prompt("Congratulations, you have enough candy to keep the troll happy. He is letting you pass. Have fun at the party!");

  } else if (totalScore = 4) {
    prompt("The troll says you nearly have enough candy. He will let you go to the party if you take him with you. You think that's a great idea - your friends will be impressed!");

  } else {
    prompt("Uh oh, the troll is not happy. He is sending you back to try again...");
  }

}












//declaring an object for each location:

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


//declaring an array for all prompts:


var promptArray = [
"To your left, you see some bushes, from which you can hear some animal noises...sounds as if they are eating something. To your right, you see some tall, dark trees. Where do you go, to the TALL TREES or the BUSHES?",


"Now you look around you again. You see a small swamp to your left. There's an old, rickety boat. On your right there's a stack of firewood that the forresters must have left. Do you go to the SWAMP or to the FIREWOOD?",


"Now you look around you again. On your left you see a clearing, with a large hollow log in the middle. On your right, you see a small swamp. There's an old, rickety boat. Where do you go, to the CLEARING or to the SWAMP?",

"Next, you look around. On one side, you see a mossy area underneath a giant oak tree. On the other side, you see a large patch of ferns. Where do you go, to the MOSS or the FERNS?",

"You look around you. On your left you see a little stream. On your right you see a mossy area underneath a giant oak tree. Where do you go, to the STREAM or to the MOSS?",

"Time is up - the troll is calling you. There he is! Let's see how many candies you have. You have " + totalScore + " candies!"

]





//  to initiate program:


decision1();












/*

NOTES RE MY STORY LOGIC:

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
