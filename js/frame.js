/**
 * Created by chenzhenhong on 17/1/7.
 */

function header() {
    var head_text = "<div class=\"header\"> "
            + "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"
            + "<tr>"
            + "<td width=\"7%\" style=\"background-color: white;\"> "
            + "<img src=\"source/logo.jpg\"> "
            + "</td>"
            + "<td width=\"85%\">"
            + "<h1 style=\"font-family: STKaiti,KaiTi,STFangsong,FangSong,'Microsoft Yahei', '微软雅黑' \"> <strong>陕西弘方塑胶有限公司</strong></h1>"
            + "<h4 style=\"font-family: STFangsong,FangSong,'Microsoft Yahei'; '微软雅黑'\"> <small>主营产品：医疗护理卫生用品，塑料包装制品，医疗器械配套件，工程塑料精密注塑件，塑料模具设计制造</small></h4>"
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
            + "<li><a href=\"/product.html\">供应产品</a></li>"
            + "<li><a href=\"/hire.html\">企业招聘</a></li>"
            + "<li><a href=\"/intro.html\">企业介绍</a></li>"
            + "<li><a href=\"/news.html\">企业动态</a></li>"
            + "<li><a href=\"/contact.html\">联系我们</a></li>"
            + "</ul>"
            + "</td>"
            + "<td width=\"7%\"></td>"
            + "</tr>"
            + "</table>"
            + "</div>";
    document.write(head_text);
}

function left_nav(need_cat, need_con, need_link) {
    var category = "<div class=\"left_nav\">"
            + "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"
            + "<tr>"
            + "<td width=\"10%\">  <img src=\"source/1arrow_r_on.gif\" alt=\"\">  </td>"
            + "<td width=\"90%\"><span>产品分类</span></td>"
            + "</tr>"
            + "</table>"
            + "</div>"
            + "<div class=\"left_content\">"
            + "<p style=\"margin:0; padding: 0 0 5px 0;\"><a href=\"product.html?product_cat=0\">医疗护理卫生用品</a></p>"
            + "<ul style=\"margin:0; padding:0 0 0 20px\">"
            + "<li>脸盆</li>"
            + "<li>痰孟</li>"
            + "<li>大便器（便盆）</li>"
            + "<li>小便器（尿壶）</li>"
            + "</ul>"
            + "<p><a href=\"product.html?product_cat=1\">塑料包装制品</a></p>"
            + " <ul style=\"margin:0; padding:0 0 0 20px\">"
            + "<li>液体塑料瓶</li>"
            + "<li>固体塑料瓶</li>"
            + "<li>塑料桶、塑料盒</li>"
            + "</ul>"
            + "<p><a href=\"product.html?product_cat=6\">医疗器械配套件</a></p>"
            + "<ul style=\"margin:0; padding:0 0 0 20px\">"
            + "<li>凝胶推注器</li>"
            + "</ul>"
            + "<p><a href=\"product.html?product_cat=6\">工程塑料精密注塑件</a></p>"
            + "<ul style=\"margin:0; padding:0 0 0 20px\">"
            + "<li>塑料壳体、零件、</br>保护帽（罩）</li>"
            + "</ul>"
            + "<p>塑料模具设计制造</p>"
            + "</div>";
    var contact = "<div class=\"left_nav\">"
            + "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"
            + "<tr>"
            + "<td width=\"10%\">  <img src=\"source/1arrow_r_on.gif\" alt=\"\">  </td>"
            + "<td width=\"90%\"><span>联系方式</span></td>"
            + "</tr>"
            + "</table>"
            + "</div>"
            + "<div class=\"left_content\">"
            + "<ul style=\"list-style-type:none; margin:0; padding:0\">"
            + "<li><span>联系人：</span>方经理</li>"
            + "<li><span>电话：</span>029-89309711</li>"
            + "<li><span>手机：</span>17792573394</li>"
            + "<li><span>生产地址：</span>陕西省西咸新区沣东新城斗门西街48号</li>"
            + "<li><span>销售地址：</span>西安市汉城北路西部医疗器械保健品交易中心1316-1号</li>"
            + "</ul>"
            + "</div>"
    var link = "<div class=\"left_nav\">"
            + "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"
            + "<tr>"
            + "<td width=\"10%\">  <img src=\"source/1arrow_r_on.gif\" alt=\"\">  </td>"
            + "<td width=\"90%\"><span>相关链接</span></td>"
            + "</tr>"
            + "</table>"
            + "</div>"
            + "<div class=\"left_content\">"
            + "<ul style=\"list-style-type:none; margin:0; padding:0;\">"
            + "<li><a href=\"http://xa.58.com/sou/?key=%E5%BC%98%E6%96%B9%E5%A1%91%E8%83%B6\" target=\"_blank\"><span>弘方塑胶58同城招聘信息</span></a></li>"
            + "</ul>"
            + "</div>"
    var ret = "<div class=\"main_left\">"
    if (need_cat == 1) {
        ret += category;
    }
    if (need_con == 1) {
        ret += contact;
    }
    if (need_link == 1) {
        ret += link;
    }
    ret += "</div>"
    document.write(ret);
}

function footer() {
    //var foot_text = "<div class=\"footer\">"
    //    + "<div style=\"margin-bottom: 5px; margin-top: 5px\">版权 © 陕西弘方塑胶有限公司</div>"
    //    + "<div style=\"text-align: center;font-size: 13px; background-color: white; color: black; padding: 0px\">陕ICP备17000599号</div>"
    //     +   "</div>";
        var foot_text = "<div class=\"footer\">  版权 © 陕西弘方塑胶有限公司 </div>"
                + "<div style=\"text-align: center;font-size: 13px; margin-top: 5px\">陕ICP备17000599号</div>"
    document.write(foot_text);
}