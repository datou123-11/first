function sign() {
    $.ajax({
        type: "Post",
        url: "serverlet/AddServlet",
        data: $('#js-fd-sign').serialize(),
        success: function (res) {
            console.log(res);
            alert("添加成功");
        },
        error: function (res) {
            alert(res);
        }
    });
}