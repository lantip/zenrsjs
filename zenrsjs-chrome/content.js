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
    var elementsArray = ['p','h1','h2','h3','h4','h5','h6','li','td','dt','blockquote','pre'];
    var arrayLength = elementsArray.length;
    var t = setTimeout(function(){
        try {
            for (var i = 0; i < arrayLength; i++) {
                $('body').find(elementsArray[i]).replaceText('u','oe');
                $('body').find(elementsArray[i]).replaceText('j','dj');
                $('body').find(elementsArray[i]).replaceText('y','j');
                $('body').find(elementsArray[i]).replaceText('c','tj');
                $('body').find(elementsArray[i]).replaceText('kh','ch');
                $('body').find(elementsArray[i]).replaceText('U','Oe');
                $('body').find(elementsArray[i]).replaceText('J','Dj');
                $('body').find(elementsArray[i]).replaceText('Y','J');
                $('body').find(elementsArray[i]).replaceText('C','Tj');
                $('body').find(elementsArray[i]).replaceText('KH','Ch');
            }
        }
        catch(err) {
            console.log(err.message);
        }
    }, 200);
  }
});