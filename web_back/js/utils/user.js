var user = {
    /**
     * 用户名登陆
     * @param {*} userName //用户名
     * @param {*} password //密码
     * @param {*} fn //回调函数
     */
    User_Login: function (userName,password,fn) {
        $.ajax({
            type: "post",
            url: URL.User_Login,
            data: { 'user_name': userName, 'password': password },
            success: function (res) {
                fn(res);
            }
        });
    },
    User_Out:function(fn){
        $.ajax({
            type: "post",
            url: URL.User_Out,
            success:function(res){
                fn(res);
            }
        });
    }
}

