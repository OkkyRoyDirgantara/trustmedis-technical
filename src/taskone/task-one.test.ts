import {describe, expect, test} from '@jest/globals';
import TaskOne from './task-one'


describe('task-one module', () => {
  test("Running the task one first template", () => {
    const data = {
      regType: "RI",
      currentDate: new Date(),
      seq: 22,
    };

    const YYYY = data.currentDate.getFullYear().toString().padStart(4, '0');
    const YY = YYYY.slice(-2).padStart(2, '0');
    const MM = (data.currentDate.getMonth() + 1).toString().padStart(2, '0');
    const SEQ = data.seq.toString().padStart(4, '0');
    const DD = data.currentDate.getDate().toString().padStart(2, '0');

    let objTest = new TaskOne("{SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}");
    expect(objTest.generateTemplate(data)).toBe(`${SEQ}-${YYYY}/${MM}/${DD}-${data.regType}`)
  });

  test("Running the task one second template", () => {
    const data = {
      regType: "RI",
      currentDate: new Date(),
      seq: 22,
    };

    const YYYY = data.currentDate.getFullYear().toString().padStart(4, '0');
    const YY = YYYY.slice(-2).padStart(2, '0');
    const MM = (data.currentDate.getMonth() + 1).toString().padStart(2, '0');
    const SEQ = data.seq.toString().padStart(4, '0');
    const DD = data.currentDate.getDate().toString().padStart(2, '0');

    let objTest = new TaskOne("{REG_TYPE}/{YY}{MM}{DD}/{SEQ}");
    expect(objTest.generateTemplate(data)).toBe(`${data.regType}/${YY}${MM}${DD}/${SEQ}`)
  })
});
