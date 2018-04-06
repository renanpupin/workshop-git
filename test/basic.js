var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var Calculator = require('../index.js');

describe('Calculator', function() {

  var calculator = new Calculator();
  var a = 10;
  var b = 2;

  console.log("a = "+a, "b = "+b);

  describe('print', function() {
    it('should print 2 numbers', function() {
       expect("a = "+a, "b = "+b).to.eql(calculator.print(a,b));
    })
  });

  describe('sum', function() {
    it('should sum 2 numbers', function() {
       expect(a+b).to.eql(calculator.sum(a,b));
    })
  });

  describe('subtract', function() {
    it('should subtract 2 numbers', function() {
       expect(a-b).to.eql(calculator.subtract(a,b));
    })
  });

  describe('multiply', function() {
    it('should multiply 2 numbers', function() {
       expect(a*b).to.eql(calculator.multiply(a,b));
    })
  });

  describe('divide', function() {
    it('should divide 2 numbers', function() {
       expect(a/b).to.eql(calculator.divide(a,b));
    })
  });
})