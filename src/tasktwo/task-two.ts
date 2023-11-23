function findAvailableTeams(teams, requests) {
    // Sort the requests
    requests.sort((a, b) => a - b);
    
    // Initialize an array to track the availability of teams
    const teamAvailability = Array.from({ length: teams }, () => 0);
    
    // Assign requests to teams in round-robin fashion
    const result = [];
    
    for (let requestTime of requests) {
        let assignedTeam = -1;
        
        // Find the first available team in a circular manner
        for (let i = 0; i < teams; i++) {
            const teamIndex = (i + result.length) % teams;
            if (teamAvailability[teamIndex] <= requestTime) {
                assignedTeam = teamIndex;
                teamAvailability[teamIndex] = requestTime + 2; // Update team availability time
                break;
            }
        }

        result.push(assignedTeam + 1); // Add 1 to convert from 0-based index to 1-based index
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