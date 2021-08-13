function getHitokoto() {
    $.get('https://v1.hitokoto.cn/?encode=json&c=a', function (response) {
        let hitokoto = response.hitokoto;
        let from = response.from;
        $('#hitokoto').html(hitokoto + ' —《' + from + '》');
    });
}
setInterval(getHitokoto, 3000);