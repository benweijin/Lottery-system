    var m      = [1,200];//按号码范围抽 m_name必须为[]; 
    var m_name = [];//人员名单 本数组有值“号码范围”自动失效
    /**
	奖项配置及样式关系设置
	  name:  本组奖项名称
	  num:   本组要抽出的数量
	  clas：对应的样式 ini.css 内（默认 class="ipt"）
	*/
	window.ini =[
	  {name:"四等奖",num:2,clas:"ipt5"},
	  {name:"四等奖",num:2,clas:"ipt5"},
	  {name:"三等奖",num:5,clas:"ipt5"},
	  {name:"三等奖",num:5,clas:"ipt5"},
	  {name:"三等奖",num:5,clas:"ipt5"},
	  {name:"二等奖",num:2,clas:"ipt2"},
	  {name:"一等奖",num:1,clas:"ipt1"},
          {name:"特别奖",num:1,clas:"ipt1"}
    ];
	
	/** 辅助参数设置 */
	window.rep = 0; //是否允许号码重复出现
	window.obo = 0; //一次抽一（组0/个1）
	window.arr = []; //排除号码或姓名序号 例子 [0,1,2,3,4]
	window.v_s=70;   //滚动响应时间，单位毫秒，数字越大滚动越慢
	window.h_s=800;  //本参数window.obo=1有效，控制结果卡片显示时间，显示期间键盘按钮被锁定