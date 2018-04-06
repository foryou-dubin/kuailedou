Page({
  data: {
    grids: [{ text: '绘本筛选' }, { text: '取/还书' }, { text: '邀请返现' }, { text: '阅读计划' }, { text: '阅读计划' }, { text: '阅读计划' }]
  },

  onLoad: function (parmas) {
    console.log("parmas:"+parmas.id);
    wx.setNavigationBarTitle({
      title:parmas.id
    });
  }
})