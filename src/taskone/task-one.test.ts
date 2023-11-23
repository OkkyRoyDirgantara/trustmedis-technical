import {describe, expect, test} from '@jest/globals';
import taskOne from './task-one'


describe('task-one module', () => {
  test("Running the task one when success", () => {
    const data = {
      regType: "RI",
      currentDate: new Date(),
      seq: 22,
    };

    const year = data.currentDate.getFullYear().toString();
    const month = (data.currentDate.getMonth() + 1).toString();
    const formattedSeq = data.seq.toString().padStart(4, '0');
    expect(taskOne(data)).toBe(`${formattedSeq}-${year}/${month}/${data.regType}`)
  });

  test("Running the task one when fail", () => {
    
  })
});