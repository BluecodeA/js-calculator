var keypadHeight = $(".numbers").height();
console.log("keypadHeight: " + keypadHeight);

$(".operators").css({
  "height": keypadHeight
});

var browserHeight = $(window).height();
console.log("browserHeight: " + browserHeight);

var mainHeight = $("main").height();
console.log("mainHeight: " + mainHeight);

/*var keypadIHeight = $(".numbers").innerHeight();
console.log(keypadIHeight);

var keypadOHeight = $(".numbers").outerHeight();
console.log(keypadOHeight);*/

var mainMargin = -(browserHeight - ((browserHeight - mainHeight)/2));
console.log("mainMargin: " + mainMargin);

$("main").css({
  "margin-top": mainMargin
});

var valueString = "";
var valueOutput = 0;
var answer = 0;
    
var evaluate = function() {
  valueOutput = eval(valueString);
  $("#valOutput").text(valueOutput);
}

var parenthesize = function() {
  valueString.unshift("(");
  valueString.push(")");
}

var inputClick = function() {
  var value = $(this).text();
  valueString += value;
  $("#valString").text(valueString);
  //console.log(valueString);
};

$("#K1").click(function() {
  inputClick.call(this);
});

$("#K2").click(function() {
  inputClick.call(this);
});

$("#K3").click(function() {
  inputClick.call(this);
});

$("#K4").click(function() {
  inputClick.call(this);
});

$("#K5").click(function() {
  inputClick.call(this);
});

$("#K6").click(function() {
  inputClick.call(this);
});

$("#K7").click(function() {
  inputClick.call(this);
});

$("#K8").click(function() {
  inputClick.call(this);
});

$("#K9").click(function() {
  inputClick.call(this);
});

$("#K0").click(function() {
  inputClick.call(this);
});

$("#KDot").click(function() {
  inputClick.call(this);
});

$("#KAdd").click(function() {
  evaluate();
  //parenthesize();
  inputClick.call(this);
});

$("#KSub").click(function() {
  evaluate();
  inputClick.call(this);
});

$("#KMul").click(function() {
  evaluate();
  inputClick.call(this);
});

$("#KDiv").click(function() {
  evaluate();
  inputClick.call(this);
});

$("#KEqu").click(function() {
  evaluate();
});

$("#KC").click(function() {
  var arr = valueString.split("");
  arr.pop();
  valueString = arr.join("");
  $("#valString").text(valueString);
});

$("#KAC").click(function() {
  valueString = "";
  $("#valString").text(valueString);
  valueOutput = 0;
  $("#valOutput").text(valueOutput);
});
