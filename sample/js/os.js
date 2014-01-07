var color  = new Array("navyBlue","#00B2B2","#B26200","#008000","#8E1B1B","#009999","#004C4C","#167D77");
var height = 120;	//$(".information").attr("height");
var t;
var freq = 4000;	//$(".information").attr("frequency");;
	
$(document).ready(function(){
	var length = $(".sec").length;
	var i;
	var j;

	
	for(i=0;i<length;i++)
	{
		var obj = $(".sec:eq("+i+")");
		var lim = Math.floor((Math.random()*4)+0) +4;
		for(k=1;k<=lim;k++)
		{
			obj.append("<div> item " +k +"</div>");
		}
		obj.children().css("transition","top ." +(Math.floor((Math.random()*8)+0)+1) +"s ease-out");
		
		var chlength = obj.children().length;
		obj.children("div:eq(0)").attr("current","true").attr("pos","1");
		obj.children("div:eq(0)").css("top","0").css("z-index","1");
		
		for(j = 1;j < chlength;j++)
		{
			var child = obj.children("div:eq(" +j +")");
			child.attr("pos",j+1);
			child.css("top",height).css("z-index","2");
			child.css("background",color[Math.floor((Math.random()*color.length)+0)]);
		}
		obj.css("background",color[Math.floor((Math.random()*color.length)+0)]);
	}
	animate();
});
function doanimation(obj,chlength,i)
{
	//select the current one
	var currentchild = obj.children("div[current='true']");
	
	//get current sec's position
	var currentPos = parseInt(currentchild.attr("pos"));
	//find the next candidate
	var nextPos = currentPos + 1;
	if(nextPos == chlength + 1)	
		nextPos = 1;
	//select the next candidate
	var nextchild = obj.children("div[pos='"+nextPos +"']");
	
	//move it to top and it will in .6s
	nextchild.css("top","0");
	
	//current child will be there behind next child reduce its opacity in 1s
	currentchild.animate({opacity:1},1000,function(){
		//give back opacity
		//change its z-index
		//move it down
		currentchild.animate({top:height},700,function(){
			currentchild.css("opacity","1");
		});
		
		//make nextchild current one
		nextchild.css("z-index","1");
		nextchild.attr("current","true");
		//remove current attr from it
		currentchild.attr("current","false");
	});	
	for(j=1;j<=chlength;j++)
	{
		if( j != currentPos && j != nextPos )
		{
			obj.children("div[pos='"+j +"']").css("z-index","2");
		}
	}
}

function animate()
{
	var length = $(".sec").length;
	for(i=0;i<length;i++)
	{
		var obj = $(".sec:eq("+i+")");
		var chlength = obj.children().length;
		if(chlength != 0)
		{
			doanimation(obj,chlength,i);
		}		
		
	}
	t = setTimeout("animate()",freq);
}