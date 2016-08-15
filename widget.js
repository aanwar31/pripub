$(document).ready(function(){

    var url     = window.location.href;
    var rndStr  = randString("4");
    $("body").append('<div class="" id="'+rndStr+'" style="display:none; position:fixed; left:25px;bottom:50px;"><iframe src="/'+url+'" style="width: 600px; height: 300px" scrolling="yes" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0"></iframe></div><div style="position:fixed; z-index:9999999; left:25px;bottom:25px;"><a class="'+rndStr+'" href="#"><img width="32" src="/img/256.png"></a></div>');
    $('.'+rndStr).click(function() {
        $('#'+rndStr).slideToggle("fast");
        return false;
    });
});

function randString(n){
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i=0; i < n; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}