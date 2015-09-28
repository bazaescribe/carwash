function scrollChange(){
  var distanceY = window.scrollY;
  var shrinkOn = 100;
  var header = document.getElementById('menuBar');
  var headerSize = $("#menuBar").height();

  if (distanceY > shrinkOn) {
    $("#menuBar").animate({ height:'60px'}, 0);
    $("#menuBar").css('background', 'rgba(40, 40, 40, 0.95)');
    $("#logo").animate({ height:'40px'}, 0);
  } else {
    if (headerSize < 101) {
      $("#menuBar").animate({ height:'100px'}, 0);
      $("#menuBar").css('background', 'rgba(0, 0, 0, 0)');
      $("#logo").animate({ height:'80px'}, 0);
    }
  }
}

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("#menuBar");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();

function scrollMenu(){
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  var breakpoint = 100;

  console.log(top);

  if(top >= breakpoint){ //Cuando baja
    $("#menuBar").animate({ height:'45'}, 600);
    //console.log("Baja");
  }else{ //Cuando sube
    $("#menuBar").animate({ height:'0'}, 600);
    //console.log("Sube");
  }
}

//$(menu).animate({left: "-=300px"}, 300);
