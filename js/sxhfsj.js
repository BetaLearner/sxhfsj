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