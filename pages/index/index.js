//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputShowed: false,
    imgUrls: [    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    grids: [{ text: '绘本筛选' }, { text: '取/还书' }, { text: '邀请返现' }, { text: '阅读计划' }],
    booksGroup: [
      { name: '绘本推荐', bookList: [{ name: '阿里巴巴' }, { name: '阿里巴巴' }, { name: '阿里巴巴' }, { name: '阿里巴巴' }, { name: '阿里巴巴' }, { name: '阿里巴巴' }] },
      { name: '专题绘本', bookList: [{ name: '' }, { name: '' }, { name: '' }, { name: '' }] },
      { name: '绘本推荐', bookList: [{ name: '' }, { name: '' }, { name: '' }, { name: '' }] },
      { name: '绘本推荐', bookList: [{ name: '' }, { name: '' }, { name: '' }, { name: '' }] }]
  },
  onLoad: function () {

  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },

  moreClicked: function (e) {
    switch (e.currentTarget.id) {
      case "绘本推荐":
        wx.navigateTo({
          url: '../morebooklist/morebooklist?id=' + e.currentTarget.id,
        })
        break;
      case "专题绘本":
        
        break;
    }
  },
})
