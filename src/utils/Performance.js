(function(global, factory) {
  'use strict';

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = global.document
      ? factory(global)
      : function(w) {
          if (!w.document) {
            throw new Error('Export module requires a window');
          }

          return factory(w);
        };
  } else {
    factory(global);
  }
})(typeof window !== 'undefined' ? window : this, function(window) {
  if ('performance' in window == false) {
    window.performance = {};
  }

  Date.now =
    Date.now ||
    function() {
      return new Date().getTime();
    };

  if ('now' in window.performance == false) {
    var nowOffset = Date.now();

    if (performance.timing && performance.timing.navigationStart) {
      nowOffset = performance.timing.navigationStart;
    }

    window.performance.now = function now() {
      return Date.now() - nowOffset;
    };
  }
});
