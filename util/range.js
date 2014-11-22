var Range = {
  create: function (start, end) {
    var results = [],
        current = start,
        step = start < end ? 1 : -1;

    results.push(current);

    while (current !== end) {
      current += step;
      results.push(current);
    }

    return results;
  }
};

module.exports = Range;
