Page( {
  data: {

  },
  onLoad: function( option ) {
    var user=wx.getStorageSync('user') || {};  
    if(!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)){//不要在30天后才更换openid-尽量提前10分钟更新  
      wx.login({  
        success: function(res){  
          // success  
          //var d=that.globalData.wxData;//这里存储了appid、secret、token串  
          var l='https://api.weixin.qq.com/sns/jscode2session?appid=wx5e874c159bb21f5c&secret=8b50c7cbfaab052c7fa0671fbe7d306c&js_code='+res.code+'&grant_type=authorization_code';  
          wx.request({  
            url: l,  
            data: {},  
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
            // header: {}, // 设置请求的 header  
            success: function(res){  
              var obj={};  
              obj.openid=res.data.openid;  
              obj.expires_in=Date.now()+res.data.expires_in;  
                
              wx.setStorageSync('user', obj);//存储openid  
            }  
          });  
        }  
      });  
    }else{  
      console.log(user);  
    }  
  },

  orderSign: function (e) {
    
    var fId = e.detail.formId; 
    console.log(fId);
    var fObj = e.detail.value;  
    var l = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=10xmOS-vpMQ12Q6LOqSZTxuNpMZFsHpvPdoSmjtoD3Jx-kLq2ljwD19qVrLQ6UmRk6My59oz2hYunu5ozxdmczUJjc7_CP98r93e0iW9xlxt_lywYha0u-kEqMauC1enIDHfAEAAVZ';  
    var d = {  
      "touser": wx.getStorageSync('user').openid,  
      "template_id": "etIpFV6_ulgxDS26OkhJFTQupQ7qOKuoa3yzPz1GPKU",//这个是1、申请的模板消息id，  
      "page": "/pages/index/index",  
      "form_id": fId,  
      "data": { 
        "keyword1": {  
          "value":  fObj.product,  
          "color": "#4a4a4a"  
        },  
        "keyword2": {  
          "value":   fObj.detail,  
          "color": "#9b9b9b"  
        },
        "keyword3": {  
          "value":  "广州市天河区天河路208号",  
          "color": "#9b9b9b"  
        }
      }
    }  
    wx.request({  
      url: l,  
      data: d,  
      method: 'POST',  
      success: function(res){  
        console.log("push msg");  
        console.log(res);  
      },  
      fail: function(err) {  
        // fail  
        console.log("push err")  
        console.log(err);  
      }  
    });  
  }  
});
