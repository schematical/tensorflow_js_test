var assert = require('assert');
let fs = require('fs');
let wav = require('node-wav');

describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {


        let buffer = fs.readFileSync(__dirname + '/test.wav');
        let result = wav.decode(buffer);
        console.log(result.sampleRate);
        console.log(result.channelData); // array of Float32Arrays
    });
});
