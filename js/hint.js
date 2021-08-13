document.addEventListener('visibilitychange',function(){
    if( document.visibilityState == 'hidden' ){
        normal_title = document.title;
        document.title = 'I Miss You!(*>﹏<*)';
    }else{
        document.title = '你又回来啦!(/≧▽≦/)';
        setTimeout(function(){
            document.title = normal_title;
        }, 1500)
    }
});