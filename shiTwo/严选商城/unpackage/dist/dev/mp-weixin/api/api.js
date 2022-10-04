"use strict";
var request_http = require("../request/http.js");
const getBanner = () => {
  return request_http.http({
    url: "home/swiperdata"
  });
};
const getHomeCate = () => {
  return request_http.http({
    url: "home/catitems"
  });
};
const getFloorData = () => {
  return request_http.http({
    url: "home/floordata"
  });
};
exports.getBanner = getBanner;
exports.getFloorData = getFloorData;
exports.getHomeCate = getHomeCate;
