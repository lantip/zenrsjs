/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.command && (msg.command == "lamaken")) {    
    String.prototype.replaceItAll = function(s,r){return this.split(s).join(r)}
    $.fn.replaceText = function(search, replace, text_only) {  
        return this.each(function(){  
            var v1, v2, rem = [];
            $(this).find("*").andSelf().contents().each(function(){
                if(this.nodeType === 3) {
                    v1 = this.nodeValue;
                    //v2 = v1.replace(search, replace);
                    v2 = v1.replaceItAll(search,replace);
                    if(v1!=v2) {
                        if(!text_only && /<.*>/.test(v2)) {  
                            $(this).before( v2 );  
                            rem.push(this);  
                        }
                        else this.nodeValue = v2;  
                    }
                }
            });
            if(rem.length) $(rem).remove();
        });
    };
    var t = setTimeout(function(){
        try {
        $('body').find('p').replaceText('u','oe');
        $('body').find('p').replaceText('j','dj');
        $('body').find('p').replaceText('y','j');
        $('body').find('p').replaceText('c','tj');
        $('body').find('p').replaceText('kh','ch');
        $('body').find('p').replaceText('U','Oe');
        $('body').find('p').replaceText('J','Dj');
        $('body').find('p').replaceText('Y','J');
        $('body').find('p').replaceText('C','Tj');
        $('body').find('p').replaceText('KH','Ch');
        }
        catch(err) {
            console.log(err.message);
        }
    }, 500);
  }
});