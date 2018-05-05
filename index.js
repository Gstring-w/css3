var li = Array.prototype.slice.call(document.getElementsByTagName('li'));
console.log(li);
li.forEach(function (ele, index) {
    // 
    console.log(ele);
    
    ele.onmouseenter = function(e){
        var str = 'in';
       ele.className = addClass(e,ele,str);
    }
    ele.onmouseleave = function (e){
        var str = 'out';
        ele.className = addClass(e, ele, str);
    }
})
function getDir(e, ele){
    var x = e.offsetX - (ele.offsetWidth / 2 ),
        y = e.offsetY - (ele.offsetHeight / 2 );
    return ((Math.round((Math.atan2(y, x) * (180/Math.PI) /90)) + 3) % 4) ;
}
function addClass(e,ele,str){
    var value = '';
    switch(getDir(e,ele)){
        case 1:
            value = str + '-left';
            break;
        case 2:
            value = str + '-top';
            break;
        case 3:
            value = str + '-right';
            break;
        case 0:
            value = str + '-bottom';
            break;
    }
    return value;
}