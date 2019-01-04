var sockMerchant = require('../Sock Merchant');

var assert = require('assert');
describe('Sock Merchant', function() {
    describe('#sockMerchant()', function () {
        it('should return 3', function () {
            assert.equal(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);
        });
        it('should return 4', function () {
            assert.equal(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]), 4);
        });
        it('should return 0', function () {
            assert.equal(sockMerchant(0, []), 0);
        });
    });
});