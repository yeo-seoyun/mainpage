$(document).ready(function () {

  /* GNB */
  $(".gnb").hover(function(){
    $(this).find(".main .sub").stop().slideDown();
  },function(){
    $(this).find(".main .sub").stop().slideUp();
  });

  /* TEXT */


  /* MAIN */
  let $img = $(".mainimg ul li");
  let oldidx=0; 
  let idx=0; 
  let img_n = $img.length;

  function changeImg(idx){ 
  if(oldidx != idx){ 
    $img.eq(oldidx).stop().fadeOut("300"); 
    $img.eq(idx).stop().fadeIn("300"); 
  }
  oldidx = idx; 
  };

  function changeAuto(){
  idx++; 
  if(idx > img_n-1){ 
    idx=0;
  }
  changeImg(idx)
  };
  timer = setInterval(changeAuto,4000); 


  /* PRODUCT */
  $(".pro ul li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".menu .croImg").removeClass("active");
    $("#"+$(this).attr("data-alt")).addClass("active");
  });

  function bannerAuto(){
    $(".AA ul").stop().animate({marginLeft:"-=200px"},500,function(){			
      $(".AA ul li:first-child").appendTo(".AA ul"); 
      $(this).css({marginLeft:"0px"}); 
    });
    $(".BB ul").stop().animate({marginLeft:"-=200px"},500,function(){			
      $(".BB ul li:first-child").appendTo(".BB ul"); 
      $(this).css({marginLeft:"0px"}); 
    });	
    $(".CC ul").stop().animate({marginLeft:"-=200px"},500,function(){			
      $(".CC ul li:first-child").appendTo(".CC ul"); 
      $(this).css({marginLeft:"0px"}); 
    });	
    $(".DD ul").stop().animate({marginLeft:"-=200px"},500,function(){			
      $(".DD ul li:first-child").appendTo(".DD ul"); 
      $(this).css({marginLeft:"0px"}); 
    });	
  }
  bauto=setInterval(bannerAuto,4000);

  $(".ban_btn .ban_right").click(function(){
    clearInterval(bauto);
    $(".AA ul").stop(true,true).animate({marginLeft:"-=200px"},500,function(){			
			$(".AA ul li:first-child").appendTo(".AA ul"); 
			$(this).css({marginLeft:"0px"}); 
		});	
    bauto=setInterval(bannerAuto,4000);
  });

  $(".ban_btn .ban_left").click(function(){
    clearInterval(bauto);
    $(".AA ul").stop(true,true).animate({marginLeft:"+=200px"},500,function(){			
			$(".AA ul li:last-child").prependTo(".AA ul"); 
			$(this).css({marginLeft:"0px"}); 
		});
    bauto=setInterval(bannerAuto,4000);
  });

  $(".ban_btn .ban_right").click(function(){
    clearInterval(bauto);
    $(".BB ul").stop(true,true).animate({marginLeft:"-=200px"},500,function(){			
			$(".BB ul li:first-child").appendTo(".BB ul"); 
			$(this).css({marginLeft:"0px"}); 
		});	
    bauto=setInterval(bannerAuto,4000);
  });

  $(".ban_btn .ban_left").click(function(){
    clearInterval(bauto);
    $(".BB ul").stop(true,true).animate({marginLeft:"+=200px"},500,function(){			
			$(".BB ul li:last-child").prependTo(".BB ul"); 
			$(this).css({marginLeft:"0px"}); 
		});
    bauto=setInterval(bannerAuto,4000);
  });

  $(".ban_btn .ban_right").click(function(){
    clearInterval(bauto);
    $(".CC ul").stop(true,true).animate({marginLeft:"-=200px"},500,function(){			
			$(".CC ul li:first-child").appendTo(".CC ul"); 
			$(this).css({marginLeft:"0px"}); 
		});	
    bauto=setInterval(bannerAuto,4000);
  });

  $(".ban_btn .ban_left").click(function(){
    clearInterval(bauto);
    $(".CC ul").stop(true,true).animate({marginLeft:"+=200px"},500,function(){			
			$(".CC ul li:last-child").prependTo(".CC ul"); 
			$(this).css({marginLeft:"0px"}); 
		});
    bauto=setInterval(bannerAuto,4000);
  });

  $(".ban_btn .ban_right").click(function(){
    clearInterval(bauto);
    $(".DD ul").stop(true,true).animate({marginLeft:"-=200px"},500,function(){			
			$(".DD ul li:first-child").appendTo(".DD ul"); 
			$(this).css({marginLeft:"0px"}); 
		});	
    bauto=setInterval(bannerAuto,4000);
  });

  $(".ban_btn .ban_left").click(function(){
    clearInterval(bauto);
    $(".DD ul").stop(true,true).animate({marginLeft:"+=200px"},500,function(){			
			$(".DD ul li:last-child").prependTo(".DD ul"); 
			$(this).css({marginLeft:"0px"}); 
		});
    bauto=setInterval(bannerAuto,4000);
  });

  $(".croImg").hover(function(){ 
		clearInterval(bauto);  
	}, function(){
		bauto=setInterval(bannerAuto,4000);
	});


  /* NOTICE */
  /* app */
  let $simg=$(".slide ul");
  let $simgli=$(".slide ul li");
  let $sbtn=$(".slide_btn ul li");
  let simg_w=$simgli.width();
  let simg_n=$simgli.length;
  let soldidx=0;
  let sindex=0; 

  function slideImg(sindex){
    targetX=-(sindex*simg_w) 
    $simg.stop(true,true).animate({left:targetX},600); 
    $sbtn.eq(soldidx).removeClass("active"); 
    $sbtn.eq(sindex).addClass("active"); 
    soldidx=sindex;
  };

  function slideAuto(){
    sindex++;
    if(sindex==simg_n){ 
      sindex=0;
    }
  slideImg(sindex);
  };
  auto=setInterval(slideAuto,4000);

  /* 04 하단버튼 */
  $sbtn.click(function(){
    clearInterval(auto);
    sindex=$(this).index();
    slideImg(sindex);
    auto=setInterval(slideAuto,4000); 
  });

  /* notice_img */
  let imgon_w= $(".slide2 ul li").width();  
	let imgon_n= $(".slide2 ul li").length; 
  let soldidxon=0;  
	let sindexon=0;  

  $(".slide2 ul li:last").prependTo(".slide2 ul");
  $(".slide2 ul").css({ left:-imgon_w}); 

  function slideonImg(sindexon,m){

    if(m==0){ 

    $(".slide2 ul").stop(true,true).animate({
      left:"+="+imgon_w+"px"},600,"easeOutCubic",function(){  
      $(".slide2 ul li:last").prependTo(".slide2 ul");				
      $(".slide2 ul").css({ left:-imgon_w });
    });

    }else{ 

    $(".slide2 ul").stop(true,true).animate({
      left:"-="+imgon_w+"px"},600,"easeOutCubic",function(){  
      $(".slide2 ul li:first").appendTo(".slide2 ul");				
      $(".slide2 ul").css({ left:-imgon_w });
    });

    }
    soldidxon=sindexon;
  };

  function slideonAuto(){
    sindexon++;
    if(sindexon==imgon_n){ 
      sindexon=0;
    }
    slideonImg(sindexon,1);
  };
  timeron=setInterval(slideonAuto,4000);


});
