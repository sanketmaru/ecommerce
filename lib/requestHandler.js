"use strict";
var logger = require("../lib/logger");
var _ = require('underscore');

module.exports = {
  handle: function(req, res, next, params) {
    params = _.isArray(params) ? params : [params];
    next.apply(this, params).then(function(result) {
      res.status(200).jsonp({
        result: result
      });
    }, function(err) {
      logger.debug(err);
      res.jsonp(err);
    });
  }
};
