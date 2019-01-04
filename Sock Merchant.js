/**
 * https://hackerrank-challenge-pdfs.s3.amazonaws.com/25168-sock-merchant-English?AWSAccessKeyId=AKIAJ4WZFDFQTZRGO3QA&Expires=1546646220&Signature=8iSalduVj%2BUhKXkGpWH3Ng7V740%3D&response-content-disposition=inline%3B%20filename%3Dsock-merchant-English.pdf&response-content-type=application%2Fpdf
 * John works at a clothing store. He has a large pile of socks that he must pair them by color for sale.
 * You will be given an array of integers representing the color of each sock. Determine how many pairs of
 socks with matching colors there are.
 */

/**
 *
 * @param n size of array
 * @param ar array containing different colors, represented by integers
 * @returns {number} the number of pairs
 */
function sockMerchant(n, ar) {
    // Create an empty key value map to keep track of socks and pairs
    let socks = {};
    // sum total
    let pairs = 0;

    // iterate through the array
    ar.forEach((num) => {
        // if the sock doesn't exist, add a sock to the sock map
        if (socks[num] === undefined) {
            // set the sock count to 1, since this is the first sock
            socks[num] = 1;
        } else {
            // there's already a sock in the map, increment by 1
            socks[num] = socks[num] + 1;
        }
    });

    // iterate through each key in the sock map
    for (let key in socks) {
        // make sure it has a key:value pair
        if (socks.hasOwnProperty(key)) {
            // round down when counting for pairs. We need even numbers
            pairs = pairs + (Math.floor(socks[key] / 2));
        }
    }

    // finally return the sum total of sock pairs
    return pairs;

}