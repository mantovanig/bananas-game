var bananas = require('../index.js');
var framework = require('../framework/framework.js');
var Test = framework.Test;

describe("ExampleTests", function(){

  // common test code
  var doTest = function(input, expected, actual) {
    console.log(`INPUT: ${input}`);
    console.log(`EXPECTED: ${expected}`);
    Test.assertEquals(actual.length, expected.length, "wrong number of bananas!");
    for (e of expected) {
      if (!actual.includes(e)) {
        console.log(`ACTUAL: ${actual}`);
        Test.fail("banana mismatch!");
      }
    } // for
  }
  
  it("ex0", function(){
      var input = "banann";
      var expected = [];
      var actual = bananas(input);
      doTest(input, expected, actual);
  });
  
  it("ex1", function(){
      var input = "banana";
      var expected = ["banana"];
      var actual = bananas(input);
      doTest(input, expected, actual);
  });

  it("ex2", function(){
      var input = "bbananana";
      var expected = [
        "b-an--ana", "-banana--", "-b--anana", "b-a--nana", "-banan--a", 
        "b-ana--na", "b---anana", "-bana--na", "-ba--nana", "b-anan--a", 
        "-ban--ana", "b-anana--"];
      var actual = bananas(input);
      doTest(input, expected, actual);
  });

  it("ex3", function(){
      var input = "bananaaa";
      var expected = ["banan-a-", "banana--", "banan--a"];
      var actual = bananas(input);
      doTest(input, expected, actual);
  });

  it("ex4", function(){
      var input = "bananana";
      var expected = [
        "ban--ana", "ba--nana", "bana--na", "b--anana", "banana--", 
        "banan--a"];
      var actual = bananas(input);
      doTest(input, expected, actual);
  });

});
