

function loadHeader() {
    var heade = $("header");
    var logoContainer = $(".logo-container");
    var vally1, vally2;
    vally1 = setInterval(function() {
             var width = logoContainer.width(); 
             console.log("width = "+width);
             var toadd = Math.ceil(4 *Math.cos(Math.PI/2* ((400-width)/400) ))/2;
             console.log(" aa - " + toadd);
             if(width<=100){
                 logoContainer.width(100);
                 clearInterval(vally1);
             } else {
                logoContainer.width(width-toadd);
             }
    }, 5)
}

