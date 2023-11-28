import TaskOne from "./src/taskone/task-one";
import TaskTwo from "./src/tasktwo/task-two";

const data = {
    regType: "RI",
    // currentDate: new Date("2023-01-31"),
    currentDate: new Date(),
    seq: 1,
};

const firstTemplate = new TaskOne("{SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}");
const secondTemplate = new TaskOne("{REG_TYPE}/{YY}{MM}{DD}/{SEQ}");

console.log(firstTemplate.generateTemplate(data));
console.log(secondTemplate.generateTemplate(data));

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