var abbreviations = require('./abbreviations.json');

module.exports = function(from, to) {
    var lookup = {};

    // Check for invalid `from`, `to` keys
    if (!(from in abbreviations[0] && to in abbreviations[0])) {
        throw 'Error: Invalid key';
    }

    abbreviations.forEach(function(state) {
        // Store all keys interally prefixed by `$` to coerce into strings and
        // avoid issues with leading special characters
        lookup['$' + state[from]] = state[to];
    });

    return function(state) {
        return lookup['$' + state];
    };
};
