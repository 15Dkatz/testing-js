import { Calculator } from '../js/calculator';

var expect = chai.expect;

describe("Calculator", function() {

  before(function() {
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
  });
});