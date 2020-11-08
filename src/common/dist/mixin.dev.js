"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemListenerMixin = void 0;

var _utils = require("common/utils");

var itemListenerMixin = {
  data: function data() {
    return {
      itemImgListener: null
    };
  },
  mounted: function mounted() {
    var refresh = (0, _utils.debounce)(this.$refs.scroll.refresh, 50);

    this.itemImgListener = function () {
      refresh();
    };

    this.$bus.$on('itemImageLoad', this.itemImgListener);
    console.log('我是混入中的内容');
  }
};
exports.itemListenerMixin = itemListenerMixin;