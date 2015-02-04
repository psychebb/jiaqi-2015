
(function(){
    var header = document.getElementsByTagName('header')[0];
    function scroll(){
        if(document.body.scrollTop > 288){
            if(header.className.indexOf('fix-tips') === -1){
                header.className += ' fix-tips';
            }
        }else{
            header.className = header.className.replace('fix-tips','');
        }
    }

    window.onscroll = scroll;

})();
