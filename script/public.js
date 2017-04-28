var version = "1.0.0";
var rootWindowName="main";
var isTest = false;
var isCleanUser = false;




var uploadImageUrl="http://store.quakoo.com/storage/youhuipai/handle";
var uploadVoiceUrl="http://store.quakoo.com/storage/youhuipai/handle";
var uploadImageBase64Url="http://store.quakoo.com/storage/youhuipai/handle64";
var jieFoUrl = "http://dxdemo.jiefo.com/WebTraining10/MobileSvc/Service.ashx";

//var serverUrl = "http://dxdemo.jiefo.com/Mobile/MobileSvc/Service.ashx?Action=";
var serverUrl = "http://jnftc.jnbank.com.cn/WebTraining/MobileSvc/Service.ashx?Action=";
//isCleanUser = true; 

rootWindowName = "cjn"; 
simpleVersion = true;
//isTest = true;
//recommendServerUrl = "http://192.168.1.25:50050";
var getjnplan = serverUrl+"GETJNPLAN";//获取培训
var IsInvitee = serverUrl+"IsInvitee";//区别身份
var search = serverUrl+"SEARCHCOURSE";//搜索课程
var RemarkOffTrainLector = serverUrl+"REMARKOFFTRAINLECTUER";//面授评价
var getmymenu = serverUrl+"GETMYMENU";//获取“我的”列表
var signin = serverUrl+"SIGNIN";//签到
var uploadstudentimg = serverUrl+"UPLOADSTUDENTIMG";//上传图像
var GetRevCourseList = serverUrl+"GetRevCourseList";//获取考试信息
var GetExamInfo = serverUrl+"GetExamInfo";//获取考试信息
var GetOffTrainDetail = serverUrl+"GetOffTrainDetail";//面授
var getprecourselist = serverUrl+"GETPRECOURSELIST";//我的学习任务里面的具体课程
var getcourseexam = serverUrl+"GETCOURSEEXAM";//获取课后考试信息21
var listcourseware = serverUrl+"LISTCOURSEWARE";//获取课件信息页签14
var getmycourse = serverUrl+"GETMYCOURSE";//获取课程基本信息页签12
var listcoursevaluate = serverUrl+"LISTCOURSEVALUATE";//获取课程评价13

var loginUrl = serverUrl+"LOGIN";//登录1
var listmyclass =  serverUrl+"LISTMYCLASS "; //我的学习任务2
var GetCourseInfo = serverUrl+"GetCourseInfo";
var GetPlanDetail = serverUrl+"GetPlanDetail";
var listrepostitorycategory = serverUrl+"LISTREPOSITORYCATEGORY";//知识库目录
var listrepository = serverUrl+"LISTREPOSITORY";//知识库
var ListWaitApplyClass = serverUrl+"ListWaitApplyClass";//我的待报名学习班3
var applyclass = serverUrl+"APPLYCLASS";//学习任务报名4
var myClassDetail = serverUrl+"MyClassDetail";//我的学习任务状态5
var listmyclasscourse = serverUrl+"LISTMYCLASSCOURSE";//我的班内学习课程6
var listmyselectcourse = serverUrl+"LISTMYSELECTCOURSE";//我的选修课7
var listmyCourseCategory = serverUrl+"LISTMYCourseCategory ";//列出课程分类8
var listWaitSelectCourse = serverUrl+"ListWaitSelectCourse";//我要选课9
var applycourse = serverUrl+"APPLYCOURSE";//选课接口10
var getcourseinfo = serverUrl+"GETMYCOURSEINFO";//在学课程  我的课程基本信息
var getmycourseinfoonly = serverUrl+"GETMYCOURSEINFOONLY ";//我的课程基本信息02


var GetPlanDescription = serverUrl+"GetPlanDescription";//获取学员须知
var searchmycourse = serverUrl+"SEARCHMYCOURSE";//搜索我的课程
var setbestreply = serverUrl+"SETBESTREPLY";/******设置为最佳回复*********/
var listcourseware = serverUrl+"LISTCOURSEWARE";//我的学习课件11
var listcoursewareonly = serverUrl+"LISTCOURSEWAREONLY";//待选课程获取课件信息页签
var startPlay = serverUrl+"StartPlay";//学习课件申请令牌12
var submitlearningtime = serverUrl+"SUBMITLEARNINGTIME";//学习时间回发13
var getcoursenotebook  = serverUrl+"GETCOURSENOTEBOOK";//同步我的笔记14
var submitcoursenotebook = serverUrl+"SUBMITCOURSENOTEBOOK";//提交我的笔记15
var submitcoursevaluate = serverUrl+"SUBMITCOURSEEVALUATE";//提交我的笔记15
var getmyevaluate  = serverUrl+"GETMYEVALUATE ";//查询我的评价17
var getcourseexam = serverUrl+"GETCOURSEEXAM ";//课程对应的考试详细信息18
var listmyexam = serverUrl+"LISTMYEXAM";//我的考试19
var listapplyexam = serverUrl+"LISTAPPLYEXAM";//可以报名的考试列表20


var applyexam = serverUrl+"APPLYEXAM";//考试报名21
var listmyexamresult = serverUrl+"LISTMYEXAMRESULT";//查看考试成绩（已参加过的考试）22
var startexam = serverUrl+"STARTEXAM";//我的题目（开考）23
var submitpaper = serverUrl+"SUBMITPAPER";//提交试卷 24
var savepaper = serverUrl+"SAVEPAPER";//中途临时保存答卷25
var getmyanswerdetail = serverUrl+"GETMYANSWERDETAIL";//我的试卷答案 26
var getmyinvestresult = serverUrl+"GETMYINVESTRESULT";//我的调查答案 27
var listmyinvest = serverUrl+"LISTMYINVEST";//我的调查 28
var listmyinvestresult = serverUrl+"LISTMYINVESTRESULT";//我的调查记录29
var listmyexercisetkclass = serverUrl+"LISTMYEXERCISETKCLASS";//三十、在线练习全部题库分类30


var choicequestioncategory = serverUrl+"CHOICEQUESTIONCATEGORY";//提交收藏的联系题库31
var applyexercise = serverUrl+"APPLYEXERCISE";//题库练习申请100个题目ID，每次申请最大100题32
var getexercisetm = serverUrl+"GETEXERCISETM";//练习题目33
var submitexercise = serverUrl+"SUBMITEXERCISE";//练习结果提交34
var collectquestion = serverUrl+"CollectQuestion";//收藏题目35
var listmynews = serverUrl+"LISTMYNEWS";//通知公告36
var getnewdetail = serverUrl+"GETNEWDETAIL";//获取公告内容 37
var getbbsboards = serverUrl+"GETBBSBOARDS";//微论坛模块列表38
var getbbstopics = serverUrl+"GETBBSTOPICS";//微论坛主题列表39
var getjhtopoics = serverUrl+"GETJHTOPOICS";//获取精华帖列表40

var searchepository = serverUrl+"SEARCHREPOSITORY ";/******搜索知识库*********/
var searchtopic = serverUrl+"SEARCHTOPIC";/******搜索问答*********/
var getnewtopics = serverUrl+"GETNEWTOPICS";//获取最新帖列表41
var createtopic = serverUrl+"CREATETOPIC";//发起帖子42
var sumviewcount = serverUrl+"SUMVIEWCOUNT";//微论坛主题查看次数统计43
var replaytopic = serverUrl+"REPLAYTOPIC";//回帖44
var gettopicdetail = serverUrl+"GETTOPICDETAIL";//微论坛正常帖子列表 45
var getinvotetopicdetail = serverUrl+"GETINVOTETOPICDETAIL";//微论坛投票帖子列表46
var submitvote = serverUrl+"SubmitVote";//微论坛投票47
var listrepository = serverUrl+"LISTREPOSITORY";//知识库48
var getversion = serverUrl+"GETVERSION";//获取版本49
var getcoursedescription = serverUrl+"GETCOURSEDESCRIPTION";//获取课程介绍50


var listmyduty = serverUrl+"LISTMYDUTY";//我的岗位学习任务51
var listwaitapplyduty = serverUrl+"ListWaitApplyDuty";//我的待报名岗位学习任务52
var applyduty = serverUrl+"APPLYDUTY";//岗位任务报名53
var mydutydetail = serverUrl+"MyDutyDetail";//我的岗位学习任务状态54
var listmydutycourse = serverUrl+"LISTMYDUTYCOURSE";//我的班内学习课程55
var getmainpage = serverUrl+"GETMAINPAGE";//主界面功能56
var getmybbs = serverUrl+"GETMYBBS";//主界面功能56
var upreplyUrl = serverUrl+"UPREPLY";//点赞
var downReplyUrl = serverUrl+"DOWNREPLY";//点赞

var listmyrtestresult = serverUrl+"LISTMYHRTESTRESULT";//列出我做过的的测评  
var listmyrtest = serverUrl+"LISTMYHRTEST";//列出我的测评 
var getmyhrtestresult = serverUrl+"GETMYHRTESTRESULT";//列出我的测评 答案


var listmytesercisetk = serverUrl+"LISMYTEXERCISETK";//列出我收藏的题库
var giveupesercisetk = serverUrl+"GIVEUPEXERCISETK";//放弃我收藏的题库
var listwaittkcategory = serverUrl+"LISTWAITTKCATEGORY";//列出我的待选题库分类
var listwaittk = serverUrl+"LISTWAITTK";//列出我的待选题库
var selectexercisetk = serverUrl+"SELECTEXERCISETK";//收藏题库（在线练习挑选题库用）
var redoexercisetk = serverUrl+"REDOEXERCISETK";//八十五、重置我收藏的题库
var listmyorder = serverUrl+"LISTMYORDER";//列出我的订单列表
var addshoppingcart = serverUrl+"ADDSHOPPINGCART";//加入购物车
var removeshoppingcart = serverUrl+"REMOVESHOPPINGCART";//移除购物车94
var buildorder = serverUrl+"BUILDORDER";//创建订单

var listshoppingcart = serverUrl+"LISTHOPPINGCART";//显示购物车
var listmydutyroute = serverUrl+"LISTMYDUTYROUTE";//列出我的岗位路线93
var builddutyroute = serverUrl+"BUILDDUTYROUTE";//生成岗位路线图91
var listwaitduty = serverUrl+"LISTWAITDUTY";//列出我的待选岗位（为岗位报名用）
var listwaitdutycategoru= serverUrl+"LISTWAITDUTYCATEGORU";//列出待报名的岗位分类（为岗位报名用）
var selectdutytoute= serverUrl+"SELECTDUTYROUTE";//选择一条岗位路线加入我的岗位路线
var listDutyForName= serverUrl+"LISTDUTYFORNAME";//列出所有岗位   搜索用
var upDatePersonInfo = serverUrl+"UPDATEPERSONINFO";//修改个人信息
var tongJiBaoBiao = serverUrl+"TONGJIBAOBIAO";//修改个人信息
var alipayorder = serverUrl+"ALIPAYORDER";//订单-支付-从购物车开始

var allGiftList = serverUrl+"ALLGIFTLIST";//礼品-全部礼品107
var icanGiftList = serverUrl+"ICANGIFTLIST";//礼品-我能兑换的礼品108
var buyGift = serverUrl+"BUYGIFT";//礼品-兑换礼品109
var myDiftOrderList = serverUrl+"MYGIFTORDERLIST";//礼品-兑换礼品109
var pointsList = serverUrl+"POINTSLIST";//查询我的剩余积分
var CreateUploadTopic = serverUrl+"CreateUploadTopic";//发起图片贴
var replyUploadTopic = serverUrl+"ReplayUploadTopic";//回复图片贴
//下载的key
var jiefokey = "jiefo_download_file_key";



//==============常量（结束）========================

//头部高度
var headHeight = 55;
//底部高度

var bottomHeight = 56;


//是否初始化
var isInit = "isInit";

var lastTime = 'lastTime';
//是否播放引导视频
var isShowGuide = "isShowGuide";

//
var Storage_School_Active_Notice = "Storage_School_Active_Notice";

//短信验证码发送时间
var Storage_Sms_Time = "smsTime";
//聊天未读消息数
var Storage_chat_num = "chat_num";
//当前地址
var curAddress = 'curAddress';
//当前经度
var curLon = 'curLon';
//当前纬度
var curLat = 'curLat';
//购物车
var cartsKey = 'carts';



var industryNum = 3;//商家最多选择三个行业

//========系统级别的公共方法（开始）==========
/**
 *
 * @param url 跳转   内部跳转 inner://xxx/xxx 外部跳转 http://xxx/xxx
 * @param currentDirectory 当前目录  最外层目录小于0（index.html） 第一级目录（html文件夹下的，目前没有） 第二级目录（html文件夹下的文件夹）
 */
function systemForword(url,currentDirectory,overLoad){
	currentDirectory=currentDirectory||0;
	var path="../";
	if(currentDirectory < 0){
		path="./";
	} else if(currentDirectory==2){
		path="../../";
	}

	if(url.startWith("inner")){
		var content=url.substring("inner://".length);
		var name;
		var uri;
		var queryStr;
		var param={};
		var type;
		if(content.indexOf("?")>0){
			uri=content.substr(0,content.indexOf("?"));
			queryStr=content.substr(content.indexOf("?")+1);
		}else{
			uri=content;
		}
		var parts=uri.split("/");
		type=parts[0];
		name=parts[parts.length-1].replace(".html","");

		if(isNotBlack(queryStr)){
			var params=queryStr.split("&");
			for(var i=0;i<params.length;i++){
				param[params[i].split("=")[0]]=params[i].split("=")[1];
			}
		}
		openNewWindow(name,path+uri,param,overLoad);
	}else{
		var linkUrl;
		var queryStr;
		var param = {};
		
		if(url.indexOf("?")>0){
			linkUrl = url.substr(0,url.indexOf("?"));
			queryStr = url.substr(url.indexOf("?")+1);
		}else{
			linkUrl = url;
		}
		
		if(isNotBlack(queryStr)){
			var params=queryStr.split("&");
			for(var i=0;i<params.length;i++){
				param[params[i].split("=")[0]]=params[i].split("=")[1];
			}
		}
		
		param.url = linkUrl;
		openNewWindow(hex_md5(url), path + "outside/outside.html",param,overLoad);
	}
}

//打开用户的照片list页面,打开用户的主页
function openUserHome(uid){
//  alert("打开用户的主页"+uid);
    var url = 'inner://main/userDynamic.html?uid=' + uid;
    systemForword(url,0,{reload:true});
}

//保存购物车
function saveCarts(obj){
	setItem(cartsKey,JSON.stringify(carts),function(ret){
		
	});
}

function showValue(id,data){
	if(isBlack(document.getElementById(id))){
		return;
	}
	if(isBlack(data)){
		return;
	}
	var imgList = document.getElementById(id).querySelectorAll("*[data-type]");

	for(var i= 0;i<imgList.length;i++){
		var img = imgList[i];
		var id = img.getAttribute("id");
		if(!document.getElementById(id)){
			return;
		}
		if(isBlack(data[id])){
			continue;
		}
		if(img.getAttribute("data-type") == 'show-image'){
			document.getElementById(id).src = data[id];
		}else if(img.getAttribute("data-type") == 'show-value'){
			document.getElementById(id).value = data[id];
		}else if(img.getAttribute("data-type") == 'show-inner'){
			document.getElementById(id).innerHTML = data[id];
		}
	}
}
//将商品添加到购物车
function addToCarts(obj,mallId,mallName){
	getItem(cartsKey,function(ret,err){
		if(ret.status){
			var carts;
			if(isNotBlack(ret.data)){
				carts = JSON.parse(ret.data);
				var mallIdIndex = -1;
				for(var i = 0;i < carts.length;i++){
					if(carts[i].mallId == mallId){
						mallIdIndex = i;
						for(var n = 0;n < carts[i].list.length;n++){
							if(obj.id == carts[i].list[n].id){
								api.toast({
								    msg: "商品已添加至购物车！",
								    duration:2000,
								    location: 'bottom'
								});
								return;
							}
						}
					}
				}
			}else{
				carts = [];
			}
			
			if(mallIdIndex >= 0){
				carts[mallIdIndex].list.push(obj);
			}else{
				var cart = {};
				cart.mallId = mallId;
				cart.mallName = mallName;
				cart.list = [];
				cart.list.push(obj);
				carts.push(cart);
			}
			
			setItem(cartsKey,JSON.stringify(carts),function(ret){
				api.toast({
				    msg: "添加购物车成功！",
				    duration:2000,
				    location: 'bottom'
				});
			});
		}else{
//			alert(err)
			api.toast({
			    msg: err.msg,
			    duration:2000,
			    location: 'bottom'
			});
		}
	});
}

//========系统级别的公共方法（结束）==========





//========首页的公共方法（开始）==========
function setLocalFunctionPorts(result){
    var cacheKey = createCacheKey(functionportUrl, {});
    setItem(cacheKey, JSON.stringify(result));
}

function getLocalFunctionPorts(callBackOnGetData){
    var cacheKey = createCacheKey(functionportUrl, {});
    getItem(cacheKey, function (ret, err) {
        var storageStr = "{}";
        if (isNotBlack(ret.data)) {
            storageStr = ret.data;
        }
        var value = JSON.parse(storageStr);
        if (isBlack(value)) {
            callBackOnGetData({});
        } else {
            callBackOnGetData(value);
        }
    });
}

//========首页的公共方法（结束）==========





//========相册的公共方法（开始）==========
//打开用户列表
//if(type==0){
//    titleDiv.innerHTML="相册访客";
//}else if(type==1){
//    titleDiv.innerHTML="相册赞过的人";
//}else if(type=2){
//    titleDiv.innerHTML="最近浏览过的人";
//}else if(type==3){
//    titleDiv.innerHTML="最近赞过的人";
//}
function openAlbumUserList(type,id){
    openNewWindow("userList","./userList.html",{type:type,id:id},{reload:true});
}

//========相册的公共方法（结束）==========



//===========打开聊天=======
function openChat(type,thirdId,thirdNick){
	openNewWindow("chat"+type+"_"+thirdId,"./chat.html",{type:type,thirdId:thirdId,thirdNick:thirdNick});
}

var selectData = [{value: '2',
					text: '无'
 					},{value: '1',
						text: '有'
					}];


var sexData = [{value: '1',
					text: '男'
					},{value: '2',
					text: '女'
				}];
var ageData = [{"text":1,"value":1},{"text":2,"value":2},{"text":3,"value":3},{"text":4,"value":4},{"text":5,"value":5},{"text":6,"value":6},{"text":7,"value":7},{"text":8,"value":8},{"text":9,"value":9},{"text":10,"value":10},{"text":11,"value":11},{"text":12,"value":12},{"text":13,"value":13},{"text":14,"value":14},{"text":15,"value":15},{"text":16,"value":16},{"text":17,"value":17},{"text":18,"value":18},{"text":19,"value":19},{"text":20,"value":20},{"text":21,"value":21},{"text":22,"value":22},{"text":23,"value":23},{"text":24,"value":24},{"text":25,"value":25},{"text":26,"value":26},{"text":27,"value":27},{"text":28,"value":28},{"text":29,"value":29},{"text":30,"value":30},{"text":31,"value":31},{"text":32,"value":32},{"text":33,"value":33},{"text":34,"value":34},{"text":35,"value":35},{"text":36,"value":36},{"text":37,"value":37},{"text":38,"value":38},{"text":39,"value":39},{"text":40,"value":40},{"text":41,"value":41},{"text":42,"value":42},{"text":43,"value":43},{"text":44,"value":44},{"text":45,"value":45},{"text":46,"value":46},{"text":47,"value":47},{"text":48,"value":48},{"text":49,"value":49},{"text":50,"value":50},{"text":51,"value":51},{"text":52,"value":52},{"text":53,"value":53},{"text":54,"value":54},{"text":55,"value":55},{"text":56,"value":56},{"text":57,"value":57},{"text":58,"value":58},{"text":59,"value":59},{"text":60,"value":60},{"text":61,"value":61},{"text":62,"value":62},{"text":63,"value":63},{"text":64,"value":64},{"text":65,"value":65},{"text":66,"value":66},{"text":67,"value":67},{"text":68,"value":68},{"text":69,"value":69},{"text":70,"value":70},{"text":71,"value":71},{"text":72,"value":72},{"text":73,"value":73},{"text":74,"value":74},{"text":75,"value":75},{"text":76,"value":76},{"text":77,"value":77},{"text":78,"value":78},{"text":79,"value":79},{"text":80,"value":80},{"text":81,"value":81},{"text":82,"value":82},{"text":83,"value":83},{"text":84,"value":84},{"text":85,"value":85},{"text":86,"value":86},{"text":87,"value":87},{"text":88,"value":88},{"text":89,"value":89},{"text":90,"value":90},{"text":91,"value":91},{"text":92,"value":92},{"text":93,"value":93},{"text":94,"value":94},{"text":95,"value":95},{"text":96,"value":96},{"text":97,"value":97},{"text":98,"value":98},{"text":99,"value":99},{"text":100,"value":100}]

function isNotBlack(data) {
	return (data == "" || typeof(data)  == "undefined"|| data == null || isNullJson(data)) ? false : true;
}

function isNullJson(obj) {
	return isJson(obj) && JSON.stringify(obj) == '{}';
}

function isJson(obj) {
	return typeof(obj) == "object" &&
		Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
}


function isBlack(data) {
	return (data == "" || typeof(data)  == "undefined" || data == null || isNullJson(data)) ? true : false;
}

//检查是否是数字
function isNum(num){
	if(!(/^\d*$/.test(num))){
		return false;
	}
	return true;
}

function isArray(o) {
	return Object.prototype.toString.call(o) === '[object Array]';
}

function isFunction(func) {
	if (typeof(func) == "function") {
		return true;
	}
	return false;
}

function hex_md5(string) {
	var x = Array();
	var k, AA, BB, CC, DD, a, b, c, d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;
	string = uTF8Encode(string);
	x = convertToWordArray(string);
	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
	for (k = 0; k < x.length; k += 16) {
		AA = a; BB = b; CC = c; DD = d;
		a = FF(a, b, c, d, x[k+0],  S11, 0xD76AA478);
		d = FF(d, a, b, c, x[k+1],  S12, 0xE8C7B756);
		c = FF(c, d, a, b, x[k+2],  S13, 0x242070DB);
		b = FF(b, c, d, a, x[k+3],  S14, 0xC1BDCEEE);
		a = FF(a, b, c, d, x[k+4],  S11, 0xF57C0FAF);
		d = FF(d, a, b, c, x[k+5],  S12, 0x4787C62A);
		c = FF(c, d, a, b, x[k+6],  S13, 0xA8304613);
		b = FF(b, c, d, a, x[k+7],  S14, 0xFD469501);
		a = FF(a, b, c, d, x[k+8],  S11, 0x698098D8);
		d = FF(d, a, b, c, x[k+9],  S12, 0x8B44F7AF);
		c = FF(c, d, a, b, x[k+10], S13, 0xFFFF5BB1);
		b = FF(b, c, d, a, x[k+11], S14, 0x895CD7BE);
		a = FF(a, b, c, d, x[k+12], S11, 0x6B901122);
		d = FF(d, a, b, c, x[k+13], S12, 0xFD987193);
		c = FF(c, d, a, b, x[k+14], S13, 0xA679438E);
		b = FF(b, c, d, a, x[k+15], S14, 0x49B40821);
		a = GG(a, b, c, d, x[k+1],  S21, 0xF61E2562);
		d = GG(d, a, b, c, x[k+6],  S22, 0xC040B340);
		c = GG(c, d, a, b, x[k+11], S23, 0x265E5A51);
		b = GG(b, c, d, a, x[k+0],  S24, 0xE9B6C7AA);
		a = GG(a, b, c, d, x[k+5],  S21, 0xD62F105D);
		d = GG(d, a, b, c, x[k+10], S22, 0x2441453);
		c = GG(c, d, a, b, x[k+15], S23, 0xD8A1E681);
		b = GG(b, c, d, a, x[k+4],  S24, 0xE7D3FBC8);
		a = GG(a, b, c, d, x[k+9],  S21, 0x21E1CDE6);
		d = GG(d, a, b, c, x[k+14], S22, 0xC33707D6);
		c = GG(c, d, a, b, x[k+3],  S23, 0xF4D50D87);
		b = GG(b, c, d, a, x[k+8],  S24, 0x455A14ED);
		a = GG(a, b, c, d, x[k+13], S21, 0xA9E3E905);
		d = GG(d, a, b, c, x[k+2],  S22, 0xFCEFA3F8);
		c = GG(c, d, a, b, x[k+7],  S23, 0x676F02D9);
		b = GG(b, c, d, a, x[k+12], S24, 0x8D2A4C8A);
		a = HH(a, b, c, d, x[k+5],  S31, 0xFFFA3942);
		d = HH(d, a, b, c, x[k+8],  S32, 0x8771F681);
		c = HH(c, d, a, b, x[k+11], S33, 0x6D9D6122);
		b = HH(b, c, d, a, x[k+14], S34, 0xFDE5380C);
		a = HH(a, b, c, d, x[k+1],  S31, 0xA4BEEA44);
		d = HH(d, a, b, c, x[k+4],  S32, 0x4BDECFA9);
		c = HH(c, d, a, b, x[k+7],  S33, 0xF6BB4B60);
		b = HH(b, c, d, a, x[k+10], S34, 0xBEBFBC70);
		a = HH(a, b, c, d, x[k+13], S31, 0x289B7EC6);
		d = HH(d, a, b, c, x[k+0],  S32, 0xEAA127FA);
		c = HH(c, d, a, b, x[k+3],  S33, 0xD4EF3085);
		b = HH(b, c, d, a, x[k+6],  S34, 0x4881D05);
		a = HH(a, b, c, d, x[k+9],  S31, 0xD9D4D039);
		d = HH(d, a, b, c, x[k+12], S32, 0xE6DB99E5);
		c = HH(c, d, a, b, x[k+15], S33, 0x1FA27CF8);
		b = HH(b, c, d, a, x[k+2],  S34, 0xC4AC5665);
		a = II(a, b, c, d, x[k+0],  S41, 0xF4292244);
		d = II(d, a, b, c, x[k+7],  S42, 0x432AFF97);
		c = II(c, d, a, b, x[k+14], S43, 0xAB9423A7);
		b = II(b, c, d, a, x[k+5],  S44, 0xFC93A039);
		a = II(a, b, c, d, x[k+12], S41, 0x655B59C3);
		d = II(d, a, b, c, x[k+3],  S42, 0x8F0CCC92);
		c = II(c, d, a, b, x[k+10], S43, 0xFFEFF47D);
		b = II(b, c, d, a, x[k+1],  S44, 0x85845DD1);
		a = II(a, b, c, d, x[k+8],  S41, 0x6FA87E4F);
		d = II(d, a, b, c, x[k+15], S42, 0xFE2CE6E0);
		c = II(c, d, a, b, x[k+6],  S43, 0xA3014314);
		b = II(b, c, d, a, x[k+13], S44, 0x4E0811A1);
		a = II(a, b, c, d, x[k+4],  S41, 0xF7537E82);
		d = II(d, a, b, c, x[k+11], S42, 0xBD3AF235);
		c = II(c, d, a, b, x[k+2],  S43, 0x2AD7D2BB);
		b = II(b, c, d, a, x[k+9],  S44, 0xEB86D391);
		a = addUnsigned(a, AA);
		b = addUnsigned(b, BB);
		c = addUnsigned(c, CC);
		d = addUnsigned(d, DD);
	}
	var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
	return tempValue.toLowerCase();
}



var rotateLeft = function(lValue, iShiftBits) {
	return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
}

var addUnsigned = function(lX, lY) {
	var lX4, lY4, lX8, lY8, lResult;
	lX8 = (lX & 0x80000000);
	lY8 = (lY & 0x80000000);
	lX4 = (lX & 0x40000000);
	lY4 = (lY & 0x40000000);
	lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
	if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
	if (lX4 | lY4) {
		if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
		else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
	} else {
		return (lResult ^ lX8 ^ lY8);
	}
}

var F = function(x, y, z) {
	return (x & y) | ((~ x) & z);
}

var G = function(x, y, z) {
	return (x & z) | (y & (~ z));
}

var H = function(x, y, z) {
	return (x ^ y ^ z);
}

var I = function(x, y, z) {
	return (y ^ (x | (~ z)));
}

var FF = function(a, b, c, d, x, s, ac) {
	a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
	return addUnsigned(rotateLeft(a, s), b);
};

var GG = function(a, b, c, d, x, s, ac) {
	a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
	return addUnsigned(rotateLeft(a, s), b);
};

var HH = function(a, b, c, d, x, s, ac) {
	a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
	return addUnsigned(rotateLeft(a, s), b);
};

var II = function(a, b, c, d, x, s, ac) {
	a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
	return addUnsigned(rotateLeft(a, s), b);
};

var convertToWordArray = function(string) {
	var lWordCount;
	var lMessageLength = string.length;
	var lNumberOfWordsTempOne = lMessageLength + 8;
	var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
	var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
	var lWordArray = Array(lNumberOfWords - 1);
	var lBytePosition = 0;
	var lByteCount = 0;
	while (lByteCount < lMessageLength) {
		lWordCount = (lByteCount - (lByteCount % 4)) / 4;
		lBytePosition = (lByteCount % 4) * 8;
		lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
		lByteCount++;
	}
	lWordCount = (lByteCount - (lByteCount % 4)) / 4;
	lBytePosition = (lByteCount % 4) * 8;
	lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
	lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
	lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
	return lWordArray;
};

var wordToHex = function(lValue) {
	var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
	for (lCount = 0; lCount <= 3; lCount++) {
		lByte = (lValue >>> (lCount * 8)) & 255;
		WordToHexValueTemp = "0" + lByte.toString(16);
		WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
	}
	return WordToHexValue;
};

var uTF8Encode = function(string) {
	string = string.replace(/\x0d\x0a/g, "\x0a");
	var output = "";
	for (var n = 0; n < string.length; n++) {
		var c = string.charCodeAt(n);
		if (c < 128) {
			output += String.fromCharCode(c);
		} else if ((c > 127) && (c < 2048)) {
			output += String.fromCharCode((c >> 6) | 192);
			output += String.fromCharCode((c & 63) | 128);
		} else {
			output += String.fromCharCode((c >> 12) | 224);
			output += String.fromCharCode(((c >> 6) & 63) | 128);
			output += String.fromCharCode((c & 63) | 128);
		}
	}
	return output;
};

function base64_encode(str) {
	var c1, c2, c3;
	var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var i = 0, len = str.length, string = '';

	while (i < len) {
		c1 = str.charCodeAt(i++) & 0xff;
		if (i == len) {
			string += base64EncodeChars.charAt(c1 >> 2);
			string += base64EncodeChars.charAt((c1 & 0x3) << 4);
			string += "==";
			break;
		}
		c2 = str.charCodeAt(i++);
		if (i == len) {
			string += base64EncodeChars.charAt(c1 >> 2);
			string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
			string += base64EncodeChars.charAt((c2 & 0xF) << 2);
			string += "=";
			break;
		}
		c3 = str.charCodeAt(i++);
		string += base64EncodeChars.charAt(c1 >> 2);
		string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
		string += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
		string += base64EncodeChars.charAt(c3 & 0x3F)
	}
	return string
}

function base64_decode(str) {
	var c1, c2, c3, c4;
	var base64DecodeChars = new Array(
		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
		-1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
		58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
		7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
		25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
		37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1,
		-1, -1
	);
	var i = 0, len = str.length, string = '';

	while (i < len) {
		do {
			c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
		} while (
		i < len && c1 == -1
			);

		if (c1 == -1) break;

		do {
			c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
		} while (
		i < len && c2 == -1
			);

		if (c2 == -1) break;

		string += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

		do {
			c3 = str.charCodeAt(i++) & 0xff;
			if (c3 == 61)
				return string;

			c3 = base64DecodeChars[c3]
		} while (
		i < len && c3 == -1
			);

		if (c3 == -1) break;

		string += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

		do {
			c4 = str.charCodeAt(i++) & 0xff;
			if (c4 == 61) return string;
			c4 = base64DecodeChars[c4]
		} while (
		i < len && c4 == -1
			);

		if (c4 == -1) break;

		string += String.fromCharCode(((c3 & 0x03) << 6) | c4)
	}
	return string;
}



function getCompressImg(img,w,h){

	var src = img.substring(0,img.lastIndexOf("."));
	var suffix = img.substring(img.lastIndexOf("."));
	var width = api.frameWidth*w;
	//var height = width/h;
	src = src+"_"+width+"_"+0+suffix;
	return src;
}



var formatTimeToDate = function(time){
	return new Date(time).format("yyyy-MM-dd hh:mm");
};
var formatTimeToDay = function(time){
	return new Date(time).format("yyyy-MM-dd");
};

Date.prototype.format = function(format) {
	var date = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	};
	if (/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1
				? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
};
var sdelay=0;
function returnTop() {
	window.scrollBy(0,-100);//Only for y vertical-axis
	if(document.body.scrollTop>0) {
		sdelay= setTimeout('returnTop()',50);
	}
}

function openNewUrl(url,params){
    var text = "";
    if(isNotBlack(params)){
        text ="?";
        for(var key in params){
            text = text+key+"="+params[key]+"&"
        }
    }
//  if(url.indexOf('login.html') == -1){
        location.href =url+text;
//  }else if(checkUser()){
//     location.href = url+text;
//  }

}

