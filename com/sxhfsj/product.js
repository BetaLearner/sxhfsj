/**
 * Created by chenzhenhong on 17/1/8.
 */

var weisheng_cat = "weisheng";
var weisheng_items = new Array("lianpen.jpg", "tanyu.jpg", "bianpen.jpg", "dabianyiti.jpg", "dabianfenti.jpg", "xiaobian.jpg","xiaobiangirl.jpg", "xiaobianboy.jpg");
var weisheng_descs = new Array("脸盆", "痰盂", "便盆", "一体便盆", "分体便盆", "尿壶", "女式尿壶", "男式尿壶");

var shuliaobaozhuang_cat = "shuliaobaozhuang";
var shuliaobaozhuang_items = new Array("100ml_ps.jpg", "80_ps.jpg", "160ml_ps.jpg", "450g_ps.jpg", "180pet_ps.jpg", "rhy_ps.jpg", "50_ps.jpg", "60ml_ps.jpg");
var shuliaobaozhuang_descs = new Array("普通盖塑料瓶", "撕拉盖塑料瓶", "压旋盖塑料瓶", "塑料桶盒", "液体塑料瓶", "液体塑料瓶", "液体塑料瓶", "液体塑料瓶");

var yiliaoqixie_cat = "yiliaoqixie";
var yiliaoqixie_items = new Array("nijiaotuizhuqi.jpg");
var yiliaoqixie_descs = new Array("凝胶推注器");

var gongchengsujian_cat = "gongchengsujian";
var gongchengsujian_items = new Array("gongyesuliaojian.jpg", "suliaobaohumao.jpg");
var gongchengsujian_descs = new Array("工业塑料件", "塑料保护帽");

function get_product_imgs(category, items, descs) {
    var ret = "";
    for(var i = 0; i < items.length; ++i) {
        ret += "<div class=\"product_img\">"
            + "<a target=\"_blank\" href=\"../../source/"+category+"/" + items[i] + "\">"
            + "<img src=\"../../source/" + category + "/" + items[i] + "\" alt=\"Ballade\">"
            + "</a>"
            + "<div class=\"desc\">" + descs[i] + "</div>"
            + "</div>";
    }
    document.write(ret);
}

var objs = new Array("weisheng", "shuliaobaozhuang", "yiliaoqixie", "gongchengsujian")
function show_product(idx) {
    for(var i = 0; i < objs.length; ++i) {
        obj = typeof objs[i] == "string" ? document.getElementById(objs[i]) : objs[i];
        obj.style.display = "none";
        if (i==idx) {
            obj.style.display = "block";
        }
    }
}