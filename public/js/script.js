$(".fa.fa-times").click(function(){
    $(".error").remove();
});

$(".showing").click(function(){
    // console.log("loss")
    // $("#password").attr('type','text')
    if($("#password").attr('type') == "password"){
        $("#password").attr('type','text')
        $(".showing").attr('class','fa fa-eye-slash showing')
    }
    else{
        $("#password").attr('type','password')
        $(".showing").attr('class', 'fa fa-eye showing')
    }
});