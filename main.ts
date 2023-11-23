import TaskOne from "./src/taskone/task-one";
import TaskTwo from "./src/tasktwo/task-two";

const data = {
    regType: "RI",
    currentDate: new Date(),
    seq: 1,
};

const taskOne = new TaskOne

console.log(taskOne.firstTemplate(data));
console.log(taskOne.secondTemplate(data));

const team1 = 2;
const array1 = [7, 8, 10, 9, 9];
const taskTwo = new TaskTwo;

console.log(taskTwo.findAvailableTeams(team1, array1));

const team2 = 3;
const array2 = [9, 10, 13, 10, 11]
console.log(taskTwo.findAvailableTeams(team2, array2));

const team3 = 3;
const array3 = [9, 10, 10, 10, 11]
console.log(taskTwo.findAvailableTeams(team3, array3));