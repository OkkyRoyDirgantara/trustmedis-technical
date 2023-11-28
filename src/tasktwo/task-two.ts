/**
 * 
 * @param teams 
 * @param requests 
 * @returns 
 * 
 * 1. sorting the requests
 * 2. initializing the arrays
 * 3. assigning requests to teams in round-robin fashion
 * 4. find the first available team in a circular manner
 */

function findAvailableTeams(teams, requests) {
    // Sort the requests
    requests.sort((a, b) => a - b);
    
    // Initialize an array to track the availability of teams
    const teamAvailability = Array.from({ length: teams }, () => 0);
    
    // Assign requests to teams in round-robin fashion
    const result = [];

    let currentTeamIndex = 0;
    for (let requestTime of requests) {
        let assignedTeam = -1;
        
        // Find the first available team in a circular manner
        for (let i = 0; i < teams; i++) {
            const teamIndex = (currentTeamIndex + i) % teams;
            if (teamAvailability[teamIndex] <= requestTime) {
                assignedTeam = teamIndex;
                teamAvailability[teamIndex] = requestTime + 2; // Update team availability time
                break;
            }
        }

        result.push(assignedTeam + 1);
        currentTeamIndex = (assignedTeam + 1) % teams;
    }

    return result;
}


class TaskTwo{
    findAvailableTeams(teams : number, requestTime: number[]){
        const output = findAvailableTeams(teams, requestTime);
        return output
    }
}

export default TaskTwo;