var requests = require('../../search/request/request.js');
var utils = require('../../../utils/util.js');

Page( {
  data: {
    id: null,
    loadidngHidden: false,
    bookData: null
  },
  onLoad: function( option ) {
    this.setData({
      id: option.id
    });
  },
  onReady: function() {
    var id = this.data.id;
    console.log(id);
    var _this = this;
    requests.requestBookDokDetail(
      id, 
      {fields: 'image,summary,publisher,title,rating,pubdate,author,author_intro,catalog'}, 
      ( data ) => {
        _this.setData({
          bookData: data
        });
    }, () => {
      wx.navigateBack();
    }, () => {
      _this.setData( {
        loadidngHidden: true
      });
    });
  }
});