//======================系统初始化（开始）=============================
function systemInit(callBack){
    //initDb(function (ret, err) {
    //    if (ret.status) {
    //        initFs(function (ret) {
    //            if (ret.status || ret.exist) {
                    //判断是否第一次打开
//                 initShowGuide(function(){/****去掉引导页**/
                        //初始化用户
                        initUser(function(){
                            //初始化系统信息
                            initSystemInfo(function(){
                                if(callBack) {
                                    callBack();
                                }
                            });
                        });
//                  });/****去掉引导页**/
    //            } else {
    //                api.alert({msg: "无法建立本地文件夹"});
    //            }
    //        });
    //    } else {
    //        api.alert({msg: "数据库加载错误:" + JSON.stringify(err)});
    //    }
    //});
}

var callbackMethod;
function initShowGuide(callback){
    //判断是否第一次打开
    var showGuide = $api.getStorage(isShowGuide);
    if (!showGuide || isTest) {
        callbackMethod = callback;
        openFrame('guide','../guide/guide.html',{},0,0);
    } else {
        callback();
    }
}
function runCallback(){
    if(callbackMethod){
        callbackMethod();
    }
}

function initUser(callback){
    var user = getUserInfo();
    //alert(JSON.stringify(user));
    if(isCleanUser == true){
        user = null;
        setUserInfo(user);
    }
    if (isBlack(user)) {
        //alert(JSON.stringify(user));
       openNewWindow("login","./html/login/login.html",{},{slidBackEnabled:false});
        return;
    } else {
        callback();
    }
}
function initSystemInfo(callBack){

    if($api.getStorage(isInit)){
        _initSystemInfo();//异步刷新系统信息
        callBack();
    } else {
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: '系统初始化中...',
            modal: true
        });
        _initSystemInfo(function(){
            api.hideProgress();
            callBack();
        });
    }
}


    function _initSystemInfo(callBack){
        //组装数据
        var initInfo = {};
        var obj1 = {};
        obj1.id = 1;
        obj1.name = "1";
        obj1.winName = "chooseCourse";
        obj1.url = "../shop/chooseCourse.html";
        obj1.class = "  xuan";
        initInfo[obj1.id] = obj1;

        var obj2 = {};
        obj2.id = 2;
        obj2.name = "2";
        obj2.winName = "learningTasks";
        obj2.url = "./learningTasks.html";
        obj2.class = "  xue";
        initInfo[obj2.id] = obj2;

        var obj3 = {};
        obj3.id = 3;
        obj3.name = "3";
        obj3.winName = "study";
        obj3.class = "  gang";
        obj3.url = "../mine/study.html";
        initInfo[obj3.id] = obj3;

        var obj4 = {};
        obj4.id = 4;
        obj4.name = "4";
        obj4.winName = "test";
        obj4.class = "  kao";
        obj4.url = "./test.html";
        initInfo[obj4.id] = obj4;

        var obj5 = {};
        obj5.id = 5;
        obj5.name = "5";
        obj5.winName = "imitateTest";
        obj5.class = "  mo";
        obj5.url = "./imitateTest.html";
        initInfo[obj5.id] = obj5;

        var obj6 = {};
        obj6.id = 6;
        obj6.name = "6";
        obj6.winName = "choosePractice";
        obj6.url = "../mine/choosePractice.html";
        obj6.class = "  lian";
        initInfo[obj6.id] = obj6;

        var obj7 = {};
        obj7.id = 7;
        obj7.name = "7";
        obj7.winName = "select";
        obj7.class = " zhi";
        obj7.url = "./select.html";
        initInfo[obj7.id] = obj7;

        var obj8 = {};
        obj8.id = 8;
        obj8.name = "问答";
        obj8.winName = "forum";
        obj8.class = " wei";
        obj8.url = "./forum.html";
        initInfo[obj8.id] = obj8;

        var obj9 = {};
        obj9.id = 9;
        obj9.name = "9";
        obj9.winName = "research";
        obj9.class = " wen";
        obj9.url = "../mine/research.html";
        initInfo[obj9.id] = obj9;


        var obj10 = {};
        obj10.id = 10;
        obj10.name = "通知公告";
        obj10.winName = "notice";
        obj10.class = "tong tong1";
        obj10.url = "./notice.html";
        initInfo[obj10.id] = obj10;

        var obj11 = {};
	    obj11.id = 11;
	    obj11.name = "人才测评";
	    obj11.winName = "personnel";
	    obj11.class = " rencai";
	    obj11.url = "../shop/personnel.html";
	    initInfo[obj11.id] = obj11;


        var obj12 = {};
        obj12.id = 12;
        obj12.name = "12";
        obj12.winName = "planss";//todo 不知道页面
        obj12.class = " plans";
        obj12.url = "planss.html";
        initInfo[obj12.id] = obj12;
		
		var obj13 = {};
	    obj13.id = 13;
	    obj13.name = "沙盘模拟";
	    obj13.winName = "developping";//todo 不知道页面
	    obj13.class = " shapan";
	    obj13.url = "../user/developping.html";
	    initInfo[obj13.id] = obj13;
		
        var action1 = {};
        action1.id = 1;
        action1.name = "首页";
        action1.winName = "home";
        action1.isGroup =  false;
        action1.topHtml =  ' <div class="home header"> <div class="topbar_info topbar"> <div id="first">首页</div></div></div>';
        action1.bottomHtml = '<li> <a class="home" tapmode="active" onclick="openTab(\'home\')" style>首页</a> </li>'
        action1.url = "./classify_body.html";
        bottomAction[action1.id] = action1;


        var action2 = {};
        action2.id = 2;
        action2.name = "购物车";
        action2.winName = "shopping";
        action2.topHtml = '<div class="header shopping topbar" style="width: 100%;line-height: 49px;position: fixed;top: 0; height: 49px;background: #eb3e2e;font-size: 16px;">购物车</div>';
        action2.isGroup =  false;
        action2.bottomHtml =  '<li> <a class="shopping" tapmode="active" onclick="openTab(\'shopping\')">购物车</a></li>';
        action2.url = "../shop/shopping_body.html";
        bottomAction[action2.id] = action2;


        var action5 = {};
        action5.id = 5;
        action5.name = "问答";
        action5.winName = "forum";
        action5.isGroup =  false;
        action5.topHtml ='<div class="header forum topbar" style="background: #eb3e2e;position: fixed;top: 0;width: 100%;height: 49px;font-size: 16px;">微论坛</div>';
        action5.url = "./user/forum_body.html";
        action5.bottomHtml = ' <li> <a class="forum" tapmode="active" onclick="openTab(\'forum\')">问答</a> </li>';
        bottomAction[action5.id] = action5;

        var action4 = {};
        action4.id = 4;
        action4.name = "选课中心";
        action4.winName = "choice";
        action4.isGroup =  true;
        action4.topHtml = '<div class="header choice topbar" style="width: 100%;line-height: 49px;position: fixed;top: 0; height: 49px;background: #eb3e2e;font-size: 16px;">选课中心 <div style="position: relative;"> <ul class="top">' +
        ' <li class="topColor" onclick="switchFrameCallback2(0)">我要选课</li> ' +
        '<li onclick="switchFrameCallback2(1)">在学课程</li> <li onclick="switchFrameCallback2(2)">未完成课程</li>' +
        ' </ul> <div class="move1"></div> </div> </div>';
        action4.bottomHtml = '<li> <a class="choice" tapmode="active" onclick="openTab(\'choice\')">选课中心</a> </li>';
        action4.preload = 2;
        action4.group= {
            name: 'choice',
                background:'#fff',
                scrollEnabled:true,
//              reload:true,
                rect : {
                x : 0,
                    y : headHeight + 39,
                    w : api.frameWidth,
                    h : api.frameHeight - headHeight - bottomHeight-32
            },
            frames: [{
                name: 'haveCourse',
                url: '../shop/chooseCourse_body.html',
                bgColor :'rgba(246,246,246,1)',
                pageParam:{type:0,user:user}
            },{
                name: 'chooseCourse',
                url: '../shop/onCourse_body.html',
                bgColor :'rgba(246,246,246,1)',
                pageParam:{type:1,user:user}
            },{
                name: 'onCourse',
                url: '../shop/haveCourse_body.html',
                bgColor :'rgba(246,246,246,1)',
                pageParam:{type:2,user:user}
            }
            ]
        };

        action4.groupCallBack = function (ret) {
            switchFrameGroupCallback2(ret.index);
            //alert("bbbbb");
        };
        action4.url = "../shop/chooseCourse.html";
        bottomAction[action4.id] = action4;


        var action3 = {};
        action3.id = 3;
        action3.name = "活动";
        action3.winName = "task";
        action3.isGroup =  true;
        action3.topHtml = '<div class="header task topbar" style="width: 100%;line-height: 49px;position: fixed;top: 0; height: 49px;background: #eb3e2e;font-size: 16px;">培训活动 ' +
        '<div style="position: relative;"> ' +
        '<ul class="top"> ' +
        '<li class="topColor" onclick="switchFrameCallback1(0)">未完成</li>' +
        '<li onclick="switchFrameCallback1(1)">已完成</li> ' +
        '<li onclick="switchFrameCallback1(2)">我要报名</li> ' +
        '</ul><div class="move"></div> </div> </div>';
        action3.bottomHtml = ' <li> <a class="task" tapmode="active" onclick="openTab(\'task\')">培训活动</a> </li>';
        action3.group= {
                name: 'task',
                background:'#fff',
                scrollEnabled:true,
                rect : {
                x : 0,
                    y : headHeight + 39,
                    w : api.frameWidth,
                    h : api.frameHeight - headHeight - bottomHeight-32
            },
            index:0,
                frames: [{
                name: 'learningTasksHome',
                url: './learningTasksBottom_body.html',
                bgColor :'rgba(246,246,246,1)',
                pageParam:{type:0,user:user}
            },{
                name: 'finshedHome',
                url: './finshedBottom_body.html',
                bgColor :'rgba(246,246,246,1)',
                pageParam:{type:1,user:user}
            },{
                name: 'signUpHome',
                url: './signUpBottom_body.html',
                bgColor :'rgba(246,246,246,1)',
                pageParam:{type:2,user:user}
            }
            ]
        };

        action3.groupCallBack = function (ret) {
        	
            switchFrameGroupCallback1(ret.index);
            //alert("aaaa");
        };
        action3.url = "../shop/chooseCourse.html";
        //action5.groupCallBack()
        bottomAction[action3.id] = action3;

        var action6 = {};
        action6.id = 6;
        action6.name = "我的";
        action6.winName = "user";
        action6.isGroup =  false;
        action6.topHtml = '<div class="header forum topbar" style="background: #eb3e2e;position: fixed;top: 0;width: 100%;height: 49px;font-size: 16px;">微论坛</div>';
        action6.url = "./user_body.html";
        action6.bottomHtml = '<li> <a class="user" tapmode="active" onclick="openTab(\'user\')">我的</a> </li>'
        bottomAction[action6.id] = action6;

        $api.setStorage("initInfo",initInfo);
        $api.setStorage("bottomAction",bottomAction);
        if(callBack){
            callBack();
        }
    }



function switchFrameCallback1(index){
	setDataItem("taskAlertBottom",index)
//  alert(index);
    api.setFrameGroupIndex({
        name : "task",
        index : index,
        scroll : true,
        reload : true//来回刷新
    });
}


function switchFrameCallback2(index){
    api.setFrameGroupIndex({
        name : "choice",
        index : index,
        scroll : true,
        reload : true
    });
}
function switchFrameGroupCallback1(index){
    var width = (window_width / 3) * index;
    var spans=document.querySelector(".task").querySelectorAll("li");
    $api.css(document.getElementsByClassName("move")[0], "-webkit-transform:translate(" + width + "px,0)");
    for(var i = 0;i < spans.length;i++){
        if(i == index){
            spans[i].style.color="#fa331e";

        }else{
            spans[i].style.color="#333";
        }
    }
}
function switchFrameGroupCallback2(index){
    var width = (window_width / 3) * index;
    var spans=document.querySelector(".choice").querySelectorAll("li");
    $api.css(document.getElementsByClassName("move1")[0], "-webkit-transform:translate(" + width + "px,0)");
    for(var i = 0;i < spans.length;i++){
        if(i == index){
            spans[i].style.color="#fa331e";

        }else{
            spans[i].style.color="#333";
        }
    }
}

//======================系统初始化（结束）=============================





//======================下方tab栏目切换（开始）=============================

var prevPid;//上一个tab
var curPid;//当前tab
var frameArr = [];//打开的列表
//各个栏目


//点击切换tab标签
function openTab(type) {

    if (!type) {
        return;
    }
//  if ( type == 'user') {
//      var isCheck = checkUserLogin('./html/login/login.html');
//      if(!isCheck){
//          return;
//      }
//  }

    //切换样式
    var header = $api.dom('#header .active');//对应头部的样式
    $api.removeCls(header, 'active');
    var thisHeader = $api.dom('#header .' + type);
    $api.addCls(thisHeader, 'active');
    var actTab = $api.dom('#nav .active');//对应底部的样式
    $api.removeCls(actTab, 'active');
    var thisTab = $api.dom('#nav .' + type);
    thisTab = thisTab.parentNode;
    $api.addCls(thisTab, 'active');


    //record page id
    prevPid = curPid;
    curPid = type;

     if (prevPid != curPid) {
        if (isOpened(type)) {
        	
            //打开已经打开过的页面
            if (tabs[type].isGroup) {
                api.setFrameGroupAttr({
                    name: type,
                    hidden: false
                });
            } else {
                if(type == "forum"){
                    openNewWindow("forum","./forum.html");
                    openTab(prevPid);
                }else{
                    api.setFrameAttr({
                        name: type,
                        hidden: false
                    });
                }
            }
            
           if (type == "shopping") {
            	api.execScript({
            		name:'main',
	                frameName:'shopping',
	                script: 'reloadHtml()'
	           	});
            } 
			
			if (type == "choice") {
				
            	api.execScript({
	                frameName:'haveCourse',
	                script: 'reloadHtml()'
	           	});
	           	api.execScript({
	                frameName:'chooseCourse',
	                script: 'reloadHtml()'
	           	});
            } 
			
			if (type == "task") { 
//				switchFrameCallback1(0);
	           	api.execScript({
            		name:'main',
	                frameName:'finshedHome',
	                script: 'reloadHtml()'
	           	});
	           	api.execScript({
            		name:'main',
	                frameName:'learningTasksHome',
	                script: 'reloadHtml()'
	           	});
            } 
        } else {
            if(type == "forum"){
                openNewWindow("forum","./forum.html");
                openTab(prevPid);
            }else if (tabs[type].isGroup) { //打开新页面
                api.openFrameGroup(tabs[type].group, function (ret, err) {
                    tabs[type].groupCallBack(ret);
                });
            } else {
                api.openFrame(tabs[type].frame);
            }
            frameArr.push(type);
        }

        if (prevPid) {
            //关闭前一个页面
            if (tabs[prevPid].isGroup) {
                api.setFrameGroupAttr({
                    name: prevPid,
                    hidden: true
                });
            } else {
                api.setFrameAttr({
                    name: prevPid,
                    hidden: true
                });
            }
        }
    }

}


//是否打开过
function isOpened(frmName) {
    var i = 0, len = frameArr.length;
    for (i; i < len; i++) {
        if (frameArr[i] == frmName) {
            return true;
        }
    }
    return false;
}


//======================下方tab栏目切换（结束）=============================
