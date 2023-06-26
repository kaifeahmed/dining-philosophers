const totalPhilosophers = 10;
const chopsticks = new Array(totalPhilosophers).fill(false);

function testAndSet(chopstickState) {
  const previousState = chopstickState;
  chopstickState = true;
  return previousState;
}

function pickUp(chopstickNum) {
  let philosopherNumber = chopstickNum; // using chopstickNum as the philosopher as right chopstickNum = philosopher Number
  console.log("The philosopher ", philosopherNumber, " wants to eat."); 
    while (testAndSet(chopsticks[chopstickNum])) { // attempts to pick up right chopstick
    }
    console.log("Chopstick", chopstickNum, "has been picked up by philosopher ",philosopherNumber);
    if (!testAndSet(chopsticks[(chopstickNum + 1) % totalPhilosophers])) { // attempts to pick up left chopstick
      console.log("Chopstick", (chopstickNum + 1) % totalPhilosophers, "has been picked up by philosopher ",philosopherNumber);
    } else { //if second chopstick isn't free, give up the first chopstick
      chopsticks[chopstickNum] = false;
    }
}

function putDown(chopstickNum) {
  let philosopherNumber = chopstickNum; // using chopstickNum as the philosopher as right chopstickNum = philosopher Number
  chopsticks[chopstickNum] = false;
  chopsticks[(chopstickNum + 1) % totalPhilosophers] = false;
  console.log("The philosopher ", philosopherNumber, " is done eating.");
}

function philosopher(i) {
    think(i);
    pickUp(i);
    eat(i);
    putDown(i);
  }

function think(i) {
  console.log("The philosopher ", i, " is thinking...");
}

function eat(i) {
  console.log("The philosopher ", i, " is eating...");
}

// disable comments to make the program indefinitely
while(true) {
for (let i = 0; i < totalPhilosophers; i++) {
  philosopher(i);
 }
}