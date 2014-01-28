/**
 * jquery plugin to create windows-8 type tile based menu
 */

(function( $ ) {
	var freq = 400;
	$.fn.winify = function(options)
	{
		var settings = $.extend( {}, $.fn.winify.defaults, options );
		var length = this.children(".sec").length;	
		for(i=0;i<length;i++)
		{
			var obj = this.children(".sec:eq("+i+")");
			obj.children().css("transition","top ." +(Math.floor((Math.random()*8)+0)+1) +"s ease-out");
			
			var chlength = obj.children().length;
			obj.children("div:eq(0)").attr("current","true").attr("pos","1");
			obj.children("div:eq(0)").css("top","0").css("z-index","1");
			
			for(j = 1;j < chlength;j++)
			{
				var child = obj.children("div:eq(" +j +")");
				child.attr("pos",j+1);
				child.css("top",settings.height).css("z-index","2");
				child.css("background",settings.color[Math.floor((Math.random()*settings.color.length)+0)]);
			}
			obj.css("background",settings.color[Math.floor((Math.random()*settings.color.length)+0)]);
		}
		animate(this,settings); //calling the private function
	}
	
	/**
	 * default values 
	 */
	$.fn.winify.defaults = {
		color : new Array("#006161","#00B2B2","#B26200","#008000","#8E1B1B","#009999","#004C4C","#167D77"),
		height : 120,
		freq : 4000
	}
	
	/**
	 * function to animate the tiles
	 * paramaters: 	@param obj: jquery object of <div> currently under animation
	 * 				@param chlength: no of tiles under that <div>
	 */
	 
	/** timeout variable **/ 
	var t;
    function doanimation(obj,chlength,settings)
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
			currentchild.animate({top:settings.height},700,function(){
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
	
	
	/**
	 * function to animate the tiles
	 * paramaters: 	@param varObj: jquery object of parent <div>
	 * 				@param settings: setting object as passed by user
	 */
	function animate(varObj,settings)
	{
		var length = varObj.children(".sec").length;
		for(i=0;i<length;i++)
		{
			var obj = varObj.children(".sec:eq("+i+")");
			var chlength = obj.children().length;
			if(chlength != 0)
			{
				doanimation(obj,chlength,settings);
			}		
			
		}
		t = setTimeout(function(){animate(varObj,settings);},settings.freq);
	}

	
}( jQuery ));










