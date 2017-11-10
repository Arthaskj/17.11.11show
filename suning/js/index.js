
window.onload=function(){
    document.getElementById('top_search').addEventListener('tap', function() {
        //打开关于页面
        mui.openWindow({
          url: 'search.html', 
          id:'top_search'
        });
      });

      // 展示栏根据最后一个li的index值 * 每个li宽度 + li边框线宽度2px可得
      $(".product").css("width",($(".product li:last-child").index()+1)*100 + 2 + "px");




}
