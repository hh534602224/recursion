
class Tab{
    constructor(options){
        // 输入选择器也行，不输入为空也行
        options=options||{}
        // 给不同的对象参数设置默认值
        // 上面的tab栏内容
      this.navSelector = options.navSelector || '.nav > li';
    //   下面要变化的内容
      this.contentSelector = options.contentSelector || '.content';
    //   触发事件选择
      this.type = options.type || 'mouseover';
    //   tab栏的特效选择
      this.navClass = options.navClass || 'active';
    //   下面内容的选择特效
      this.contentClass = options.contentClass || 'show';

    }
    // tab栏的方法有哪些
    // 添加的事件函数方法
    addEvent(){
        let _this=this;
        console.log(_this)
    }

addEvent();




}