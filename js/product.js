/**
 * Created by chenzhenhong on 17/1/8.
 */

var weisheng_cat = "weisheng";
var weisheng_items = new Array("1_400.jpg", "2_400.jpg", "3_400.jpg", "4_400.jpg", "5_400.jpg", "6_400.jpg","7_400.jpg", "8_400.jpg", "9_400.jpg", "10_400.jpg");
var weisheng_source = new Array("1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg","7.jpg", "8.jpg", "9.jpg", "10.jpg");
var weisheng_descs = new Array("白色男式尿壶", "白色女式尿壶", "一体式便盆", "分体式带盖便盆", "脸盆", "蓝色男式尿壶", "蓝色女式尿壶", "带标便盆", "蓝色便盆","痰盂");

var yaxuangai_cat = "yaxuangai";
var yaxuangai_items = new Array("30ml.jpg","60ml.jpg","100ml.jpg","110ml.jpg","110ml_1.jpg","150ml.jpg","150ml_1.jpg","160ml.jpg","200ml.jpg","220ml.jpg","225ml.jpg","300ml.jpg");
var yaxuangai_descs = new Array("30ml固体压旋盖塑料瓶 l￠40×51","60ml固体压旋盖塑料瓶 l￠40×73","100ml金属盖PET塑料瓶 l￠46×84","110ml扁方塑料瓶51×42×92","110ml固体压旋盖塑料瓶 l￠46×92","150ml固体压旋盖塑料瓶 l￠54×97","150ml直桶固体压旋盖塑料瓶 l￠52×102","160ml扁方塑料瓶55×45×102","200ml扁方塑料瓶56×45×117","220ml固体压旋盖塑料瓶 l￠54×133","225ml固体压旋盖塑料瓶 l￠61×113","300ml扁方塑料瓶66×53×130");

var shuliaobaozhuang_cat = "shuliaobaozhuang";
var shuliaobaozhuang_items = new Array("100ml_ps.jpg", "80_ps.jpg", "160ml_ps.jpg", "450g_ps.jpg", "180pet_ps.jpg", "rhy_ps.jpg", "50_ps.jpg", "60ml_ps.jpg");
var shuliaobaozhuang_descs = new Array("100ml固体塑料瓶 ￠48×85", "80ml撕拉盖固体塑料瓶 ￠48×75", "160ml扁方塑料瓶55×45×102", "450g塑料桶 ￠97×83", "180ml液体PET塑料瓶￠51×137", "润滑油添加剂瓶", "50ml滴液瓶￠38×98", "60ml喷雾瓶￠36×128");

var yeti_cat = "yeti";
var yeti_items = new Array("30ml.jpg","35ml.jpg","50ml.jpg","60ml.jpg","100ml_1.jpg","100ml_2.jpg","120ml.jpg","180ml.jpg","200ml.jpg","rhy.jpg")
var yeti_descs = new Array("30ml液体塑料瓶","35ml滴液瓶￠32×86","50ml滴液瓶￠38×98","60ml喷雾瓶￠36×128","100ml液体塑料瓶￠45×105","100ml液体PET塑料瓶￠43×114","120ml液体PET塑料瓶￠48×122","180ml液体PET塑料瓶￠51×137","200ml液体塑料瓶￠51×140","润滑油添加剂瓶");

var tonghe_cat = "tonghe";
var tonghe_items = new Array("400g.jpg","450g.jpg","500g.jpg","550g.jpg","600g.jpg","750g.jpg");
var tonghe_descs = new Array("400g塑料桶 ￠97×83","450g塑料桶 ￠97×83","500g塑料桶 ￠87×108","550g塑料桶 ￠97×106","600g塑料桶 ￠87×125","750g塑料桶 ￠100×130");

var qita_cat = "qita";
var qita_items = new Array("nijiaotuizhuqi.jpg", "gongyesuliaojian.jpg", "suliaobaohumao.jpg");
var qita_descs = new Array("凝胶推注器", "工业塑料件", "塑料保护帽");

function get_product_imgs(category, items, sources, descs) {
    var ret = "";
    for(var i = 0; i < items.length; ++i) {
        ret += "<div class=\"product_img\">"
            + "<a target=\"_blank\" href=\"source/"+category+"/" + sources[i] + "\">"
            + "<img src=\"source/" + category + "/" + items[i] + "\" alt=\"Ballade\">"
            + "</a>";
        if(descs) {
            ret += "<div class=\"desc\">" + descs[i] + "</div>";
        }
            //+ "<div class=\"desc\">" + descs[i] + "</div>"
        ret += "</div>";
    }
    document.write(ret);
}

var objs = new Array("weisheng", "putong", "silagai", "yaxuangai", "yeti", "tonghe", "qita")
var cat_objs = new Array("cat0", "cat1","cat2","cat3", "cat4", "cat5", "cat6")
function show_product(idx) {
    for(var i = 0; i < objs.length; ++i) {
        obj = typeof objs[i] == "string" ? document.getElementById(objs[i]) : objs[i];
        obj.style.display = "none";
        cat_obj = typeof cat_objs[i] == "string" ? document.getElementById(cat_objs[i]) : cat_objs[i];
        cat_obj.style.backgroundColor = "#EFFBFB";
        if (i==idx) {
            obj.style.display = "block";
            cat_obj.style.backgroundColor = "#BDBDBD";
        }
    }
}

function GetQueryArgValue(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  decodeURI(r[2]);
    return null;
    //alert(GetQueryString("from"));
}