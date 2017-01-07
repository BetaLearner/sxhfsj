/**
 * Created by chenzhenhong on 17/1/7.
 */

function header() {
    var head_text = "<div class=\"header\"> "
            + "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"
            + "<tr>"
            + "<td width=\"7%\" style=\"background-color: white;\"> "
            + "<img src=\"../../source/logo.jpg\"> "
            + "</td>"
            + "<td width=\"85%\">"
            + "<h1 style=\"font-family: STKaiti,KaiTi,STFangsong,FangSong,'Microsoft Yahei', '微软雅黑' \"> <strong>陕西弘方塑胶有限公司</strong></h1>"
            + "<h4 style=\"font-family: STFangsong,FangSong,'Microsoft Yahei'; '微软雅黑'\"> <small>主营产品：医疗护理卫生用品，塑料包装制品，医疗器械配套件，工程塑料精密注塑件</small></h4>"
            + "</td>"
            + "<td width=\"8%\"></td>"
            + "</tr>"
            + "</table>"
            + "</div>"
            + "<div class=\"main_nav\">"
            + "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"
            + "<tr>"
            + "<td width=\"8%\"></td>"
            + "<td width=\"85%\">"
            + "<ul>"
            + "<li><a href=\"/index.html\">首页</a></li>"
            + "<li><a href=\"#news\">供应产品</a></li>"
            + "<li><a href=\"#news\">企业招聘</a></li>"
            + "<li><a href=\"#contact\">企业介绍</a></li>"
            + "<li><a href=\"#about\">企业动态</a></li>"
            + "<li><a href=\"#about\">联系方式</a></li>"
            + "</ul>"
            + "</td>"
            + "<td width=\"7%\"></td>"
            + "</tr>"
            + "</table>"
            + "</div>";
    document.write(head_text);
}

function footer() {
    var foot_text = "<div class=\"footer\">  版权 © 陕西弘方塑胶有限公司   </div>";
    document.write(foot_text);
}