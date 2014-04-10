var jstat = require('jStat').jStat;

module.exports = function(opts) {
  opts = opts || {};
  opts.mean = opts.mean || 1000;
  opts.variance = opts.variance || (opts.mean / 10);
  return function(req, res, next) {
    var latency = jstat.normal.sample(opts.mean, opts.variance);
    console.log(req.path, ': injecting latency: ', latency);
    setTimeout(next, latency);
  };
};