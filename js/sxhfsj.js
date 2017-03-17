/**
 * Created by chenzhenhong on 17/1/15.
 */

function openShutManager(oSourceObj, id1, id2, tip1,tip2){
    var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
    var targetObj1 = typeof id1 == "string" ? document.getElementById(id1) : id1;
    var targetObj2 = typeof id2 == "string" ? document.getElementById(id2) : id2;
    if(targetObj1.style.display == "none"){
        targetObj1.style.display = "block";
        targetObj2.style.display = "none";
        sourceObj.innerHTML = tip2;
    } else if(targetObj2.style.display == "none") {
        targetObj1.style.display="none";
        targetObj2.style.display = "block";
        sourceObj.innerHTML = tip1;
    }
}

function plaform_style(id, id2) {
    var targetObj = typeof id == "string" ? document.getElementById(id) : id;
    var targetObj1 = typeof id2 == "string" ? document.getElementById(id2) : id2;
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i) ? true : false;
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i) ? true : false;
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) ? true : false;
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
        }
    };
    if (isMobile.any()) { //判断是否为android,BlackBerry,ios,windows
        //要执行的代码
        targetObj.style.width = "95%";
        if(targetObj1) {
            targetObj1.style.width = "95%";
        }
    } else {
        targetObj.style.width = "80%";
        if(targetObj1) {
            targetObj1.style.width = "80%";
        }
    }
}
