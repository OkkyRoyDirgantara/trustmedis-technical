import {describe, expect, test} from '@jest/globals';
import TaskOne from './task-one'


describe('task-one module', () => {
  test("Running the task one first template", () => {
    const data = {
      regType: "RI",
      currentDate: new Date(),
      seq: 22,
    };

    const year = data.currentDate.getFullYear().toString();
    const month = (data.currentDate.getMonth() + 1).toString();
    const day = data.currentDate.getDate().toString().padStart(2, '0');

    const formattedSeq = data.seq.toString().padStart(4, '0');
    let test1 = new TaskOne();
    expect(test1.firstTemplate(data)).toBe(`${formattedSeq}-${year}/${month}/${day}-${data.regType}`)
  });

  test("Running the task one second template", () => {
    const data = {
      regType: "RI",
      currentDate: new Date(),
      seq: 22,
    };

    const year = data.currentDate.getFullYear().toString().slice(-2);
    const month = (data.currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = data.currentDate.getDate().toString().padStart(2, '0');
    
    const seqString = data.seq.toString().padStart(4, '0');
    let test1 = new TaskOne();
    expect(test1.secondTemplate(data)).toBe(`${data.regType}/${year}${month}${day}/${seqString}`)
  })
});
