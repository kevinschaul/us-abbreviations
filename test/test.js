var assert = require('assert');
var usAbbreviations = require('../');

describe('us-abreviations', function() {
    it('should handle full -> post', function() {
        var converter = usAbbreviations('full', 'post');
        assert.equal(converter('California'), 'Calif.');
    });

    it('should handle post -> full', function() {
        var converter = usAbbreviations('post', 'full');
        assert.equal(converter('Calif.'), 'California');
    });

    it('should handle fips -> full', function() {
        var converter = usAbbreviations('fips', 'full');
        assert.equal(converter('06'), 'California');
    });

    it('should throw error when keys don\'t exist', function() {
        assert.throws(function() {
            usAbbreviations('full', 'fake');
        });
    });
});
