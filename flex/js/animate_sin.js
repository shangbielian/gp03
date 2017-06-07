//缓冲运动
//obj 表示要运动的对象
//target 表示运动终点
// animate(ele, {left: 800, top: 400}, 2000)

function animate(obj, target, time){
	var degree = 0;
	var init = {};
	//记录所有属性的总路程
	for(var attr in target){
		init[attr] = parseInt(getStyle(obj,attr));
	}
	var timer = setInterval(function(){
		for(var attr in target) {
			//属性attr = attr初始值 + (attr目标值-attr初始值)*sin(x);
			obj.style[attr] = init[attr] + (target[attr] - init[attr])*Math.sin(degree*Math.PI/180) + "px";
		}
		if(degree == 90) {
			clearInterval(timer);
		}
		degree++;
	},30);

}

function getStyle(obj, attr) {
    if(obj.currentStyle) { //IE浏览器
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj,null)[attr];
    }
}
