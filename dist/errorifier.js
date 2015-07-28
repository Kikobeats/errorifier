/**
 * errorifier - Creates Error uniformly.
 * @version v0.1.2
 * @link    https://github.com/Kikobeats/errorifier
 * @license MIT
 */require=function r(e,t,o){function i(s,c){if(!t[s]){if(!e[s]){var f="function"==typeof require&&require;if(!c&&f)return f(s,!0);if(n)return n(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var a=t[s]={exports:{}};e[s][0].call(a.exports,function(r){var t=e[s][1][r];return i(t?t:r)},a,a.exports,r,e,t,o)}return t[s].exports}for(var n="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(r,e,t){"use strict";var o;e.exports=o=function(){function r(r){var e,t;return e=new Error,(t="string"==typeof r?this._composeMessageFromString:this._composeMessageFromObject)(e,r)}return r.prototype._composeMessageFromObject=function(r,e){var t,o;for(t in e)o=e[t],r[t]=o;return r.message=r.message||r.description,r.message&&r.code?(r.message=r.code+", "+r.message,r):r},r.prototype._composeMessageFromString=function(r,e){var t;return r.message=e,t=e.split(","),t.length<2?r:(r.code=t[0].trim(),r)},r}()},{}],2:[function(r,e,t){},{}],errorifier:[function(r,e,t){"use strict";r("coffee-script/register"),e.exports=r("./lib/Errorifier")},{"./lib/Errorifier":1,"coffee-script/register":2}]},{},[]);