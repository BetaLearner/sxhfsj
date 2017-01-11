/**
 * Created by chenzhenhong on 17/1/8.
 */

function test() {
    document.write("sxhfsj");
}

var weisheng_items = new Array("dabianyiti.jpg");
var weisheng_descs = new Array("一体便盆");
function get_product_imgs(items, descs) {
    var ret = "";
    for(var i = 0; i < items.length; ++i) {
        ret += "<div class=\"product_img\">"
            + "<a target=\"_blank\" href=\"source/weisheng/bianpen.jpg\">"
            + "<img src=\"../../source/" + items[i] + "\" alt=\"Ballade\">"
            + "</a>"
            + "<div class=\"desc\">" + descs[i] + "</div>"
            + "</div>";
    }
    document.write(ret);
}