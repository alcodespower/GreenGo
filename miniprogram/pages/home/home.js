// miniprogram/pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_state: '搜索',
    cardCur: 0,
    gridCol: 4,
    flag:'',
    gridBorder:'',//列表是否需要边框，默认有边框，引号内填入任意内容取消边框
    skin: false,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    iconList: [{
      icon: 'shop',
      color: 'red',
      badge: 120,
      name: '品牌馆'
    }, {
      icon: 'cascades',
      color: 'orange',
      badge: 1,
      name: '类目'
    }, {
      icon: 'ticket',
      color: 'yellow',
      badge: 0,
      name: '特惠专场'
    }, {
      icon: 'friend',
      color: 'olive',
      badge: 22,
      name: '推荐好友'
    }],
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://m.360buyimg.com/babel/jfs/t1/112583/12/3627/150352/5ea91939E7d3570f4/2faead63e2535f6c.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://m.360buyimg.com/babel/jfs/t1/113559/16/3882/139117/5eaa9978E7530c930/322f26f61b4ca937.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://m.360buyimg.com/babel/jfs/t1/108614/36/14931/152435/5eaaa070Ed697353a/afc1328abe108bde.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://m.360buyimg.com/babel/jfs/t1/115183/32/3865/147541/5eaa492bE639eefbd/86f7fa5b22205c02.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://m.360buyimg.com/babel/jfs/t1/115429/22/3494/147071/5ea922d3Ed0d286cb/8620bda0d7d73cbb.jpg'
    }],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.towerSwiper('swiperList');
  },
  
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },
  gridchange: function (e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function (e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  
  onPageScroll(e) {
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})