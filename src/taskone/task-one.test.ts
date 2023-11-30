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

  it('should generate the correct template output', () => {
    const data = {
      regType: 'RI',
      currentDate: new Date('2021-09-01'),
      seq: 1,
    };

    const template1 = new TaskOne('{SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}');
    const result1 = template1.generateTemplate(data);
    expect(result1).toBe('0001-2021/09/01-RI');

    const template2 = new TaskOne('{REG_TYPE}/{YY}{MM}{DD}/{SEQ}');
    const result2 = template2.generateTemplate(data);
    expect(result2).toBe('RI/210901/0001');
  });

  it('should throw an error if template is not set', () => {
    const data = {
      regType: 'RI',
      currentDate: new Date('2021-09-01'),
      seq: 1,
    };

    const template = new TaskOne('');
    expect(() => template.generateTemplate(data)).toThrowError('Template is not set');
  });
});
