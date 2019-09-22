
// 用户功能
var user = {
    /**
     * 用户名登陆
     * @param {*} userName //用户名
     * @param {*} password //密码
     * @param {*} fn //回调函数
     */
    User_Login: function (userName, password, fn) {
        $.ajax({
            type: "post",
            url: URL.User_Login,
            data: { 'user_name': userName, 'password': password },
            success: function (res) {
                fn(res);
            }
        });
    },
    /**
     * 用户退出功能
     * @param {*} fn//回调函数 
     */
    User_Out: function (fn) {
        $.ajax({
            type: "post",
            url: URL.User_Out,
            success: function (res) {
                fn(res);
            }
        });
    },
    /**
     * 获取用户信息
     * @param {*} fn //回调函数
     */
    User_getUser: function (fn) {
        $.ajax({
            type: "get",
            url: URL.User_getUser,
            success: function (res) {
                fn(res);
            }
        });
    }

}

