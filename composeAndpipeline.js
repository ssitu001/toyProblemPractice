composeAndpipeline.js


const pipeline = (seed, ...funcs) => {

    for (var i = 0; i < funcs.length; i++ ) {
      seed = funcs[i](seed);
    }
    return seed;
}

const compose = (...funcs) => {

    return function(arg) {
      for (var i = funcs.length-1; i >= 0; i--) {
        arg = funcs[i].call(null, arg);
      }
    return arg;
  }
};

pipeline(42)
//pipeline(42, function (n) {return -n; });


// var greet    = function(name){ return "hi: " + name; };
// var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
// var welcome = compose(greet, exclaim);
// welcome('moe');