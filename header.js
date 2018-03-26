

function loadHeader() {
    var heade = $("header");
    var logoContainer = $(".logo-container");
    var vally1, vally2;
 //   heade.mouseover( function(event){
//    clearInterval(vally2);

    vally1 = setInterval(function() {
             var width = logoContainer.width(); 
             console.log("width = "+width);
             var toadd = Math.ceil(4 *Math.cos(Math.PI/2* ((300-width)/300) ))/2;
             console.log(" aa - " + toadd);
             if(width<=100){
                 logoContainer.width(100);
                 clearInterval(vally1);
             } else {
                logoContainer.width(width-toadd);
             }
    }, 5)
  /*      event.stopPropagation();
    });
    heade.mouseout( function(event){
    clearInterval(vally1);
    vally2 = setInterval(function(event) {
             var width = logoContainer.width(); 
             console.log("width = "+width);
             var toadd = Math.ceil(7*Math.cos(Math.PI/2* ((300-width)/300) ))/2;
             console.log(" aa - " + toadd);
             if(width+toadd>=300){
                 logoContainer.width(300);
                 clearInterval(vally2);
             } else {
                logoContainer.width(width+toadd);
             }
        }, 5)
        event.stopPropagation();
    });*/ 
}
