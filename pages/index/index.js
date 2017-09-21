Page({
data: {  
  movies:[  
  {url:'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg'} ,  
  {url:'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg'} ,  
  {url:'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'} ,  
  {url:'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'}   
  ]  
 },  
    toast: function() {
    wx.navigateTo({
      url: '../search/search'
    })
   },
   toast1: function() {
    wx.navigateTo({
      url: '../bookshelf/bookshelf'
    })
   },
   toast2: function() {
    wx.navigateTo({
      url: '../mymessage/mymessage'
    })
   },
   toast3: function() {
    wx.navigateTo({
      url: '../order/order'
    })
   },
   scan:function(){
     wx.scanCode({
       success: function(res){
         // success
         console.log('success');
       },
       fail: function(res) {
         // fail
         console.log('fail');
       },
       complete: function(res) {
         // complete
         console.log('complete');
       }
     })
   }

});