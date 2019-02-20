// Add your code here

function oddInt(array) {
    var count = 0;
    var element = 0;
    for (var i = 0; i < array.length; i++) {
        var tempInt = array[i];
        var tempCount = 0;
        for (var j = 0; j < array.length; j++) {
            if (array[j] === tempInt) {
                tempCount++;
                if (tempCount % 2 !== 0 && tempCount > count) {
                    count = tempCount;
                    element = array[j];
                }
            }
        }
    }
    console.log(element)
    return element;
}
oddInt([1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 5, 5]);


// simpler way but not as readable

const data = [1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 5, 5]
const freq = data.reduce(
    (o, k) => ({
        ...o,
        [k]: (o[k] || 0) + 1
    }), {})
const oddFreq = Object.keys(freq).filter(k => freq[k] % 2)

console.log(oddFreq)

// another sample using reduce

var options = [{
        key: "foo",
        value: 1
    },
    {
        key: "bar",
        value: {
            id: 2,
            name: "two"
        }
    },
    {
        key: "baz",
        value: {
            ["active"]: true
        }
    },
];

var result = options.reduce((accumulator, current) => {
    accumulator[current.key] = current.value;
    return accumulator;
}, {});

console.log(result);

// reducing

var message = "";
var words = ["reducing", "is", "simple"];
for (var i = 0; i < words.length; i++) {
    message += " " + words[i];
}

console.log(message)

// reducing with reduce method

var sum = ["reducing", "is", "simple"].reduce(
    function (total, num) {
        return total + " " + num
    }, "Hey! ");

console.log(sum)

// with numbers 

var sum = [1, 2, 3].reduce(
    function (total, num) {
        return total + num
    }, 0);
console.log("adding values inside the array sum = ", sum)