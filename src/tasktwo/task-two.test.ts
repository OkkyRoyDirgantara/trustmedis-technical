import {describe, expect, test} from '@jest/globals';
import TaskTwo from './task-two';

describe('findAvailableTeams', () => {
    it('should return the correct team assignments for a given set of requests', () => {
        const taskTwo = new TaskTwo();
        // Test case 1
        expect(taskTwo.findAvailableTeams(2, [7, 8, 10, 9, 9])).toEqual([1, 2, 1, 0, 2]);
        // Test case 2
        expect(taskTwo.findAvailableTeams(3, [9, 10, 13, 10, 11])).toEqual([1, 2, 3, 1, 2]);
        // Test case 3
        expect(taskTwo.findAvailableTeams(3, [9, 10, 10, 10, 11])).toEqual([1,2,3,0,1]);
    });
});