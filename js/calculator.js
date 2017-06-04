function Calculator() {}

Calculator.prototype._filter = function(values) {
  // filter all the values for only Numbers
  var len    = values.length,
    filtered = values.filter(Number);

  // assume that the filtered array length must be equal to the values length
  // if all the values are Numbers.
  if (len !== filtered.length) {
    throw new Error("All values must be numberic!");
  }
  return values;
}

// add these functions to the Calculator prototype object
Calculator.prototype.add = function() {
  // where does arguments come from? Does it exist within function?
  var values = this._filter([].slice.apply(arguments));

  if (values.length < 2) {
    throw new Error("Add expects a minimum of 2 arguments but " + values.length + " given.");
  }

  return values.reduce(function(a, b) {
    return a + b;
  });
}