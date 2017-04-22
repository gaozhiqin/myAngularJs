// 入口文件
var app=angular.module("myapp",['ngRoute']);
function routeConfig($routeProvider){
    $routeProvider
    	.when('/', {
            controller: 'ListController',
            templateUrl: 'list.html'
        })
        .when('/jianjie', {
            controller: 'DetailController',
            templateUrl: 'jianjie.html'
        })
        .when('/news', {
            controller: 'EditController',
            templateUrl: 'news.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}
app.config(routeConfig);
app.controller("mainctrl",function($scope){
	$scope.user=0;
	$scope.article=[
					'不哭不闹不炫耀，安安分分一起老。不骂不吵不张扬，安安分分一起过。就算逃到天涯海角，也决不回头。就算哭到世界灭亡，也决不后悔。我想依靠你 永远在我旁边带路。我想牵着你 永远只会为你带路。偶尔有点小任性，为了等待你安抚。偶尔有点小情绪，为了引起你注意。所有的一切、都不是什么誓言。所谓的一切、到头来都是欺骗。蓦然、心锁的钥匙新了不实用了。蓦然、心锁的钥匙旧了可以换了。',
					'日动影移，日穿帘隙，时间悄无声息地离去。不知不觉，那么多渐行渐远的岁月，如今只剩下依稀的背影，翻过岁月的篱墙，面对那些悄然散场的旧时光，莞尔一笑，只言感恩岁月，不诉岁月离殇。',
					'这世界上的很多事，有时候和我们眼睛看到的不一样。很多时候要我们慢慢地体会才会知道。我们不能急着看结果，就像种下一棵小花，你要耐心地等它破土发芽，慢慢长大，才能看到它开出美丽的花。尘世间的事也一样，要在时间里发酵，岁月里沉香，人生那些百思不得其解的事情，到后来时间会一一给你答案。岁月有时候特别用心良苦，它时常会给你很多磨难，其实它是想让你变得更好。',
					];
	$scope.repley=[
					{name:"大张李",img:"images/a5.jpg",content:"希望你能每天都快乐",time:"1"},
					{name:"黄小明",img:"images/a3.jpg",content:'我只是从这里路过......',time:"3"},
					{name:"月亮的影子",img:"images/a2.jpg",content:'孩子的时候，我们简单地把人划分为好人或坏人。只是后来长大了，知道了，好人没有你想象的那么好，坏人也没有你想象的那么坏。正如，外表坚强的人，也许内心很脆弱，而外表柔弱的人，却有着一颗强韧的心。',time:"2"}
					]
	$scope.fans=[
					{id:2, name:"小王",work:"设计师，博客",img:"images/a1.jpg"},
					{id:1, name:"张琳",work:"作家，杂志编辑",img:"images/a2.jpg"},
					{id:4, name:"李小明",work:"艺术总监，电影剪辑",img:"images/a3.jpg"},
					{id:3, name:"赵大城",work:"音乐家，运动员",img:"images/a4.jpg"}
				];
	$scope.own=["images/a0.jpg","无所畏惧","IT牛人"];
	$scope.nav=[
					{classs:"glyphicon glyphicon-home",title:"首页"},
					{classs:"glyphicon glyphicon-file",title:"简介"},
					{classs:"glyphicon glyphicon-envelope",title:"信息"},
				];
	$scope.nav1=[
					{title:"设置栏目"},
					{title:"更多设置"},
					{title:"分割线"}];
	$scope.navFunc = function (arg) {
    									$scope.navAction = arg;// 让navAction变量等于函数传入过来的值arg
  									};

  	$scope.zan =[{LikeAmount : 13 }];
});

app.directive("like",function(){
var direction = {};
direction.restrict = 'AE'; 
direction.template = "<span ng-click='Like()' >赞</span>";
 
direction.scope = {
content:"="
};
 
direction.link = function($scope,element){
$scope.Like=function(){
$scope.content.LikeAmount = $scope.content.LikeAmount+1;
};
};
 
return direction;
});
