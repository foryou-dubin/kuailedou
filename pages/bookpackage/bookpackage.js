// pages/bookpackage/bookpackage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true',feature:["","",""] },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },

  choosePlaceClick:function(){
    wx.navigateTo({
      url: '../chooseplace/chooseplace',
    })
  },

  checkboxChange: function (e) {
    console.log(e.currentTarget);
    var index = e.currentTarget.dataset.index;
    var items = this.data.items;
    if (items[index].checked == 'true') {
      items[index].checked = ''
    } else {
      items[index].checked = 'true';
    }
    console.log(items);
    this.setData({
      items: items
    })
  },

  submitSuccess: function (e) {
    wx.navigateTo({
      url: '../submitsuccess/submitsuccess',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})