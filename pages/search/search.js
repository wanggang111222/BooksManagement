var requests = require('../search/request/request.js');
var utils = require('../../utils/util.js');

Page({
    data: {
        pageIndex: 0, //页码
        totalRecord: 0, //图书总数
        pageData: [], //图书数据
        inputShowed: false,
        listview1: false,
        listview2: true,
        inputVal: "",   
    },
    showInput: function () {
        this.setData({
            inputShowed: true,
            listview1: false,
            listview2: true,
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false,
            listview1: false,
            listview2: true,
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: "",
            listview1: false,
            listview2: true,
        });
    },
    inputTyping: function (e) {
        this.setData({
            listview1: false,
            listview2: true,
            inputVal: e.detail.value,
            pageIndex: 0, 
            pageData: []
        });
        requestData.call(this);
    },
    listview: function () {
        this.setData({
            listview1: true,
            listview2: false,
        });
    }
});

/**
 * 请求图书信息
 */
function requestData() {
  var _this = this;
  var q = this.data.inputVal;
  var start = this.data.pageIndex;
  console.log(start)
  requests.requestSearchBook({ q: q, start: start }, (data) => {
    if (data.total == 0) {
      //没有记录
      _this.setData({ totalRecord: 0 });
    } else {
      _this.setData({
        pageData: _this.data.pageData.concat(data.books),
        pageIndex: start + 1,
        totalRecord: data.total
      });
    }
  }, () => {
    _this.setData({ totalRecord: 0 });
  });
}