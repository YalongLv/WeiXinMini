// pages/menu/menu.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //选项一、选项二、选项三的显示与隐藏控制参数
    menu_one_show: false, //控制菜单一的内容
    menu_two_show: false, //控制菜单二的内容
    menu_three_show: false, //控制菜单三的内容
    menu_one_data: {
      "热门": ['冒险岛', '恋爱', '泡泡堂', '僵尸', '哆啦A梦', '海绵宝宝', '喜羊羊与灰太狼', '经营', '射击', '坦克', '合金弹头', '棋牌', '巧虎', '斗地主', '麻将', '女生' ,'拳皇', '森林冰火人'],
      "益智": ['连连看', 'TD防守', '无敌连连看', '找茬', '模拟城市', '接水管', '斗地主', 'Nitrome', '对对碰', '华容道', '喜洋洋与灰太狼', '泡泡堂', '寻找小白人', '俄罗斯方块'],
      "冒险": ['乖乖猪世界', '灵动', '男生', '魔域', '智能火柴人', '武林外传', '小王子冒险岛', '外星人大冒险', '神刀传奇', '小小冒险岛', '肥猫天使', '黑暗僵尸仓库', '救人', '蜘蛛侠'],
      "战争": ['黑暗基地', '战争', '柏林飞机战争', '魔兽战争', '射击', '史诗幻想战役', '第一次世界大战', '合金弹头系列', '忍者与海盗', '火柴人战争', '冒险王', '午夜僵尸大战', '金刚狼'],
      "动作": ['变态版', '松鼠大决战', '李小龙', '中国功夫', '明星大乱斗', '疯狂独轮车大战', '海绵宝宝空手道', '兔子杀戮', '拳皇wing', '悟空格斗', '火影忍者大乱斗', '泰拳小子'],
      "敏捷": ['小鸟', '神奇小妖怪相关', '冒险', '死神', '祖玛', '暴力拆除', '洛克人', '索尼克', '森林冰火人', '植物大战僵尸相关', '模拟世界', '冒险岛', '黄金矿工', '动作', '三国'],
      "女生": ['化妆', '换装', '打扮', '宝贝', '发型设计', '芭比娃娃', '明星' ,'爱情测试', '甜心姐妹美发', '婚礼婚纱', '精灵换装', '恋爱', '礼服' ,'可爱', '模拟世界', '开店经营' ,'设计布置', '美女'],
      "专辑": ['动漫', '游戏', '哆啦A梦', '冒险岛系列', '虹猫蓝兔', '火影忍者' ,'少年骇客', '蜡笔小新', '史酷比系列', '蝙蝠侠', '降世神通Avatar', '海贼王系列' ,'拼图' ,'儿童', '西游记', '洛克人']
    },
    menu_two_data:{
      "国内": {
        "乒乓球": ["八一南昌", "山东鲁能·潍坊高新", "上海中星乒乓球俱乐部", "天津乒乓球俱乐部", "深圳宝安明金海", "山东魏桥·向尚运动", "霸州海润俱乐部", "安徽朗坤乒乓球俱乐部", "江苏中超电缆·利永", "四川长虹乒乓球俱乐部"],
        "篮球": ["八一富邦火箭", "北京北控", "北京首钢", "天津荣钢金狮", "福建鲟浔兴", "广东宏远华南虎", "吉林东北虎", "辽宁衡业飞豹", "江苏同曦", "青岛双星雄鹰", "山东西王", "山西汾酒", "上海东方大鲨鱼", "深圳新世纪烈豹", "龙狮", "四川金强蓝鲸", "江苏龙肯帝亚", "新疆广汇飞虎", "浙江稠州银行金牛", "浙江广厦猛狮"],
        "足球": ["广州恒大淘宝", "上海上港", "北京中赫国安", "山东鲁能泰山", "江苏苏宁", "武汉卓尔", "重庆斯威", "天津泰达亿利", "大连一方", "河南建业", "上海绿地申花", "广州富力", "河北华夏幸福", "天津天海", "深圳佳兆业", "北京人和"],
        "排球": ["上海光明优倍", "云南大学滇池学院", "八一南昌", "北京汽车", "四川女排", "天津渤海","山东体彩","广东恒大","江苏中天钢铁","河北女排","河南银鸽投资","浙江嘉善西塘古镇","福建安溪铁观音","辽宁华君"],
      },
      "国际": {
        "NBA": ["老鹰", "凯尔特人", "公牛", "黄蜂", "篮网", "骑士", "热火", "尼克斯", "活塞", "魔术", "76人", "步行者", "奇才", "猛龙", "雄鹿", "独行侠", "掘金", "勇士", "森林狼", "雷霆", "快船", "灰熊", "湖人", "鹈鹕", "开拓者", "太阳", "马刺", "爵士", "国王"],
      }
    },
    menu_three_data:{
      "喜剧": ['憨豆先生精选辑', '美丽人生', '福尔摩斯二世', '顺其自然', '摩登时代', '城市之光', '三傻大闹宝莱坞', '疯狂动物城', '大话西游', '寻子遇仙记', '淘金记'],
      "爱情": ['霸王别姬', '阿甘正传', '美丽人生', '泰坦尼克号', '巴黎圣母院', '罗密欧与朱丽叶', '我爱你', '断背山', '请以你的名字呼唤我', '幸福终点站'],
      "科幻": ['盗梦空间', '星际穿越', '虚幻勇士', '蝙蝠侠：黑暗骑士', '楚门的世界', 'V字仇杀队', '黑客帝国', '蝴蝶效应', '人工智能'],
      "纪录片": ['人生果实', '人生七年', '从纳粹手中救出的孩子们', '克拉玛依'],
      "家庭": ['东京物语', '灿烂人生', '摔跤吧！爸爸', '我的父亲，我的儿子', '地上的星星', '大鱼', '金色池塘', '岁月神偷'],
      "战争": ['辛德勒的名单', '战争与和平3', '鬼子来了', '沉静如海', '革命往事', '法国大革命', '拯救大兵瑞恩', '勇敢的心', '乱'],
    },
    select_left: '', //默认选中左边框的内容 (选中哪一项)
    select_left_content:[], //选中左边框--->右边框的内容
    select_right: '', //默认选中右边框边框的内容 (选中哪一项)
    select_top:'', //默认选中上边框的内容（选项二）
    select_top_content: '', //选中上边框--->具体内容
    
  },
  /**
   * 选项卡的控制
   */
  //控制选项一
  menuOne: function () {
    var that = this;
    if (that.data.menu_one_show) { //说明menu_one_show现在展开，需要关闭
      that.setData({
        menu_one_show: false,
        menu_two_show: false,
        menu_three_show: false,
      })
    } else {
      for (var select_left in that.data.menu_one_data) break;
      that.setData({
        menu_one_show: true,
        menu_two_show: false,
        menu_three_show: false,
        select_left: select_left, //打开菜单的时候，默认选中的内容
        select_left_content: that.data.menu_one_data[select_left],
      })
    }
  },
  //控制选项二
  menuTwo: function (e) {
    var that = this;
    if (that.data.menu_two_show) {
      that.setData({
        menu_one_show: false,
        menu_two_show: false,
        menu_three_show: false,
      });
    } else {
      for (var select_top in that.data.menu_two_data) break;//第二个菜单栏的上部默认选中第一个，获得的是json的key值
      var select_top_content = that.data.menu_two_data[select_top]; //默认选中第一个后的内容，提供下面进行使用
      for (var select_left in select_top_content) break;//使用上面的内容，左边默认选中的第一个，而且也是获得它的key值，
      var select_top_content = select_top_content[select_left];//默认选中左边的时候，右边的内容进行显示。
      that.setData({
        menu_one_show: false,
        menu_two_show: true,
        menu_three_show: false,
        select_top: select_top, //上方默认选择
        select_top_content: that.data.menu_two_data[select_top], //选中上方之后，下方的内容
        select_left: select_left, //左边的默认选择
        select_left_content: select_top_content, //选中左边之后的，右边的内容
      }); 
    }

  },
  //控制选项三
  menuThree: function () {
    var that = this;
    if (that.data.menu_three_show) {
      that.setData({
        menu_one_show: false,
        menu_two_show: false,
        menu_three_show: false,
      })
    } else {
      for (var select_left in that.data.menu_three_data) break;
      that.setData({
        menu_one_show: false,
        menu_two_show: false,
        menu_three_show: true,
        select_left: select_left,
        select_left_content: that.data.menu_three_data[select_left],
        select_right: '',
      })
    }
  },
  // 点击阴影部分，菜单隐藏
  menuFlod: function () {
    var that = this;
    that.setData({
      menu_one_show: false,
      menu_two_show: false,
      menu_three_show: false,
    })
  },
  /**
   * 点击左边框
   */
  selectLeft: function (e) {
    var that = this;
    var select_left = e.currentTarget.dataset.index;
    var select_left_content = [];
    // 判断是哪个菜单栏
    if ('1' == e.currentTarget.dataset.navi){
      select_left_content = that.data.menu_one_data[select_left];
    } else if ('2' == e.currentTarget.dataset.navi){
      select_left_content = that.data.select_top_content[select_left];
    } else {
      select_left_content = that.data.menu_three_data[select_left];
    }
    // console.log(select_left_content);
    that.setData({
      select_left: select_left,
      select_left_content: select_left_content,
      select_right: '',
    })
    
  },
  /**
   * 点击右边框
   */
  selectRight: function(e){
    var that = this;
    var select_right = e.currentTarget.dataset.index;
    that.setData({
      select_right: select_right
    });
    console.log(select_right);
  },

  /**
   * 点击上方
   */
  selectTop: function(e){
    var that = this;
    var select_top = e.currentTarget.dataset.index;
    var select_top_content = that.data.menu_two_data[select_top];
    for (var select_left in select_top_content) break; //默认选中第一个
    var select_left_content = select_top_content[select_left];
    that.setData({
      select_top: select_top,
      select_top_content: select_top_content,
      select_left: select_left,
      select_left_content: select_left_content,
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

  },

})