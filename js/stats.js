export {initState}

let initState = function(what, solutionId) {
    const stored = localStorage.getItem(what);
    let state;

    if (stored === null) {
        state = {
            solution: solutionId,
            guesses: []
        };
    } else {
        state = JSON.parse(stored);
    }

    const updateFunction = function(guess) {
        state.guesses.push(guess);
        localStorage.setItem(what, JSON.stringify(state));
    };

    return [state, updateFunction];
}




