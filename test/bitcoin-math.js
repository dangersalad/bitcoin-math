'use strict';

/* global describe */
/* global it */

var assert = require('assert');
var btcMath = require('../index');

describe("Number.toBitcoin()", function() {
    it('should add the toBitcoin function to the Number object', function() {
        var num = 1;
        assert(num.toBitcoin);
    });
    it('should return a bitcoin value derived from the number', function() {
        var satoshi = 10000000;
        assert(satoshi.toBitcoin() === 0.1);
    });
    it('should return NaN if the original is NaN', function() {
        var bad = NaN;
        assert(isNaN(bad.toBitcoin()));
    });
});

describe("Number.toSatoshi()", function() {
    it('should add the toSatoshi function to the Number object', function() {
        var num = 1;
        assert(num.toSatoshi);
    });
    it('should return a satoshi value derived from the number', function() {
        var bitcoin = 1;
        assert(bitcoin.toSatoshi() === 100000000);
    });
    it('should return NaN if the original is NaN', function() {
        var bad = NaN;
        assert(isNaN(bad.toSatoshi()));
    });
});

describe("Number.zeroFill()", function() {
    it('should add the zeroFill function to the Number object', function() {
        var num = 1;
        assert(num.zeroFill);
    });
    it('should return a decimal with zeros added (1 => 1.00000000)', function() {
        var bitcoin = 1;
        assert(bitcoin.zeroFill() === "1.00000000");
    });
    it('should return a decimal with zeros added (1.123 => 1.12300000)', function() {
        var bitcoin = 1.123;
        assert(bitcoin.zeroFill() === "1.12300000");
    });
    it('should return NaN if the original is NaN', function() {
        var bad = NaN;
        assert(isNaN(bad.zeroFill()));
    });
});

describe("#getRandomSatoshi()", function() {
    it('should reurn an integer value between the specified values with specified non zero digits', function() {
        var rand = btcMath.getRandomSatoshi(100, 10000);
        assert(rand > 100);
        assert(rand < 10000);
        var nonZeros = rand.toString().replace(/0/g, "").length;
        assert(nonZeros <= 2);
    });
});

describe("#getRandomBitcoin()", function() {
    it('should reurn a float value between the specified values with specified non zero digits', function() {
        var rand = btcMath.getRandomBitcoin(1, 100, 4);
        assert(rand > 1);
        assert(rand < 100);
        var nonZeros = rand.toSatoshi().toString().replace(/0/g, "").length;
        assert(nonZeros <= 4);
    });
});
