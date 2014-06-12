var jstat = require('jStat').jStat;

module.exports = function(opts) {
  opts = opts || {};
  if(opts.mean === undefined)
    opts.mean = 1000;
  if(opts.variance === undefined)
    opts.variance = opts.mean / 10;
  return function(req, res, next) {
    var latency = jstat.normal.sample(opts.mean, opts.variance);
    opts.log && console.log(req.path, ': injecting latency: ', latency);
    setTimeout(next, latency);
  };
};