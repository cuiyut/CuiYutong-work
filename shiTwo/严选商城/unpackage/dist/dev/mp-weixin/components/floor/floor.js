"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "floor",
  props: {
    data: Object
  },
  setup(__props) {
    const prop = __props;
    return (_ctx, _cache) => {
      return {
        a: prop.data.floor_title.image_src,
        b: common_vendor.f(prop.data.product_list, (item, index, i0) => {
          return {
            a: item.image_src,
            b: index
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/vscode/shix/twoWeek/\u4E25\u9009\u5546\u57CE/yougou-shop/components/floor/floor.vue"]]);
wx.createComponent(Component);
