var Body = {
    setBackgroundColor : function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $("body").css("background-color", color)
    },
    setColor: function(color){
        // document.querySelector('body').style.color = color
        $("body").css("color", color)
        $("h1").css("color", color)
    }
}
var Links = {
    setColor : function(color){
        // var i = 0;
        // var alist = document.querySelectorAll('a');
        // while(i < alist.length){
        // alist[i].style.color = color;
        // i++;
        // }
    $("a").css("color", color)
    }
}

function nightDayHandler(self){
    if(self.value == 'night'){
        Body.setBackgroundColor('#191a1c');
        Body.setColor('white');
        Links.setColor('powderblue');
        self.value='day'
        }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('#191a1c');
        Links.setColor('#739931');
        self.value='night'
    }
}