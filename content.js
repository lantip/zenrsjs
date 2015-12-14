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
    $('body').replaceText('u','oe');
    $('body').replaceText('j','dj');
    $('body').replaceText('y','j');
    $('body').replaceText('c','tj');
    $('body').replaceText('kh','ch');
    $('body').replaceText('U','Oe');
    $('body').replaceText('J','Dj');
    $('body').replaceText('Y','J');
    $('body').replaceText('C','Tj');
    $('body').replaceText('KH','Ch');
  }
});