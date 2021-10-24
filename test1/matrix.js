const matrixSum = (arr) => {
    var n = arr.length;
    if (n != 0) var m = arr[0].length;

    if (n == undefined || m == undefined) return "Invalid Input";

    for (var i = 0; i < n; i++) if (arr[i].length != m) return "Invalid Input";

    var sum = 0;

    for (var i = 0; i < n; i++) for (var j = 0; j < m; j++) sum += arr[i][j];

    return sum;
};

module.exports = matrixSum;
