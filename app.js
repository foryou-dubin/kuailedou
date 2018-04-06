//app.js
App({
  onLaunch: function () {
    const Bmob = require('utils/bmob.js');
    Bmob.initialize("你的Application ID", "你的REST API Key");
  },
  globalData: {
    userInfo: null
  }
})