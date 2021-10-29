Page({
  /**
   * 页面的初始数据
   */
  data: {
    //旅客姓名：
    passengerName: '',
    //旅客性别：
    passengeSex: '',
    //籍贯：
    region: ['请选择', '请选择', '请选择'],
    //旅客电话：
    phone: '',
    //证件类型：
    idcardType: '',
    //证件类型：
    idcardNum: '',
     // 判断显示文字还是图片(预览图片标识)
		frontShow: true,
		// 身份证正面路径
		frontSrc: '',
		//判断显示文字还是图片(预览图片标识)
    backShow: true,
		//身份证反面路径
    backSrc: '',
    passenger: {}
  },
  
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var passenger = new Object();
    passenger.passengerName = e.detail.value.passengerName;
    passenger.region = e.detail.value.region;
    passenger.phone = e.detail.value.phone;
    passenger.idcardType = e.detail.value.idcardType;
    passenger.idcardNum = e.detail.value.idcardNum;
    var imageSrc= [];
    imageSrc.push(this.frontSrc);
    imageSrc.push(this.backSrc);
    passenger.imageSrc = imageSrc;
    this.setData({passenger:passenger});
    //网络请求
    // wx.request({
    //   url: 'example.php', //仅为示例，并非真实的接口地址
    //   data: this.passenger,
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success (res) {
    //     console.log(res.data)
    //   }
    // });
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  imageRotate: function () {
    // this.animation.rotate(45).step()
    // this.setData({animation: this.animation.export()})
  },
   // 拍摄身份证正面-跳转到拍摄页
   goFront: function() {
    wx.navigateTo({
			url: '/pages/frontOfIDCard/frontOfIDCard',
    });
    console.log("goFront 正面拍照的路径：",this.frontSrc);
  },
  // 拍摄身份证反面-跳转到拍摄页
  goBack: function() {
    wx.navigateTo({
			url: '/pages/backOfIDCard/backOfIDCard',
    });
    console.log("goBack 反面拍照的路径：",this.backSrc)
  },
  //省市区选择器：
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     // 页面初始化 options为页面跳转所带来的参数
     var passenger = wx.getStorageSync('passenger');
     this.setData({passenger:passenger});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.animation = wx.createAnimation()
    // this.imageRotate();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.frontSrc = wx.getStorageSync('frontSrc');
    this.backSrc = wx.getStorageSync('backSrc');
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