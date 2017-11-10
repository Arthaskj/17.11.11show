$(function(){

    //颜色更改函数      fun(操作对象，更改对象，更改项目)
    function change(dx1,dx,sx){
        dx1.click(function(){
            var num = $(this).index();
            if(num == 1){
                dx.css(sx,"#444");
            }else if(num == 2){
                dx.css(sx,"#9d9d9d");
            }else if(num == 3){
                dx.css(sx,"#ddd");
            }
        })
    }

    // 更改字体颜色
    change($(".fontColor li"),$(".content p"),"color");

    // 更改背景颜色
    change($("#bkColor li"),$(".content "),"background");

    
    // 更改字体大小
    function nowSize(){
        $(".fontSize li:eq(1)").html(parseInt($(".content p").css("font-size"))  );  
    }
    nowSize();
      //html($(".content p").attr("fontSize"));
    $(".fontSize li:eq(0)").click(function(){
        var fSize = parseInt($(".content p").css("font-size")) ;
        if(fSize > 12){
            fSize -= 2;
            $(".content p").css("font-size",fSize);
            nowSize();
        }else alert("超过最小值！！！");
        
    })
    $(".fontSize li:eq(2)").click(function(){
        var fSize = parseInt($(".content p").css("font-size")) ;
        if(fSize < 24){
            fSize += 2;
            $(".content p").css("font-size",fSize);
            nowSize();
        }else alert("超过最大值！！！");
        
    })

    

})  //结束位置