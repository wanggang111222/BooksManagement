var app = getApp();
var requests = require('../search/request/request.js');
var utils = require('../../utils/util.js');

Page({
    data: {
        datalist1: [],
        datalist2: []
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        //app.getUserInfo(function(userInfo){
        //更新数据
        //that.setData({
         // userInfo:userInfo
       // })
    //  });
        wx.request({
        url: 'http://127.0.0.1:8080/Lib/Collection',
        data: {},
        method: 'POST',
        success: function(res){
          console.log(res);
          that.setData({
            datalist1: res.data.collection,
          })
          /*var imglist = [];
          for(var i=0;i<that.data.datalist1.length;i++)
          {
            var id=that.data.datalist1[i].book;
            requests.requestBookDokDetail(id, 
            {fields: 'image'}, 
            ( data ) => {
              that.data.datalist2 = data;
            }, () => {
            wx.navigateBack();
            }, () => {
              that.setData( {
                loadidngHidden: true
              });
            });
          }*/
        },
        fail: function(res) {
          console.log("失败");
        },
        complete: function(res) {
        }
      })   
    }
})