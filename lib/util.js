'use strict';

/**
 * Given method name and its function, determine if it qualifies for thunkification.
 * @param  {String}   name Method name.
 * @param  {Function} func Function object for the method.
 * @return {Boolean}  True if the method is qualified for thunkification.
 */
function methodQualified(name, func) {
  var funcStr = func.toString();
  // Only public methodds (i.e. methods that do not start with '_') which have
  // 'callback' as last parameter are qualified for thunkification.
  return (/^[^_]/.test(name) &&
      /function.*\(.*,?.*callback\)/.test(funcStr));
}

// Public API
exports.methodQualified = methodQualified;
