// app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
    var passenger = wx.getStorageSync('passenger')|| [];
    if(!passenger){
      passenger = this.initPassenger();
    }
    wx.setStorageSync('passenger', passenger);
  },
  initPassenger:function(){
    var passenger = new Object();
    //旅客姓名：
    passenger.passengerName="请输入姓名";
    //旅客性别：
    passenger.passengeSex ="man";
    //籍贯：
    passenger.region = ['请选择', '请选择', '请选择'];
    //旅客电话：
    passenger.phone = "请输入电话号码";
    //证件类型：
    passenger.idcardType="IdCard"
    //证件类型：
    passenger.idcardNum= "";
		// 身份证正面路径
		passenger.imageSrc=[ ];
		
    return passenger;
  },
  globalData: {
    userInfo: null
  }
})
