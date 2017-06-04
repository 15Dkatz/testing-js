var expect = chai.expect;

// a polyfill to make grunt tests behave like browser tests
if (!Function.prototype.bind) {
  Function.prototype.bind = function() {
    var fn = this,
        args = Array.prototype.slice.call(arguments),
        context = args.shift();
    return function() {
        fn.apply(context, args);
    }
  }
}

describe("Calculator", function() {

  before(function() {
    if (window.__html__) {
      document.body.innerHTML = window.__html__['test/index.html'];
    }

    this.calculator = new Calculator();
  });

  describe("Adding", function() {
    it("should throw an error if a non-numeric value is used", function() {
      expect(this.calculator.add.bind(this.calculator, 2, 'a')).to.throw();
    });

    it("should throw an error if less than 2 values are provided", function() {
      // specify the function name as the first argument
      // then specify the parameters of that function as the continued arguments
      expect(this.calculator.add.bind(this.calculator, 2)).to.throw();
    });

    it("should add a series of number aruments together", function() {
      expect(this.calculator.add(2, 5)).to.equal(2 + 5);
    });

    // All functions like add, subtract, and more should filter non-numbers
    // before performing any operations
    it("should filter the input", function() {
      var filterSpy = sinon.spy(this.calculator, "_filter");
      this.calculator.add(2, 5);
      expect(filterSpy).to.have.been.called;

      // restore the original function at the end of the test case after spying on it
      filterSpy.restore();
    });

  });
});