export const computerThrow = (num) => { 
    if (num === 0) { 
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};