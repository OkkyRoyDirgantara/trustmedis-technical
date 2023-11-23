import TaskOne from "./src/taskone/task-one";
import taskOne from "./src/taskone/task-one"

const data = {
    regType: "RI",
    currentDate: new Date(),
    seq: 1,
};

const task1 = new TaskOne

console.log(task1.firstTemplate(data));
console.log(task1.secondTemplate(data));