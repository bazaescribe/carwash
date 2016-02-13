function scrollChange(){
  var distanceY = window.scrollY;
  var shrinkOn = 100;
  var header = document.getElementById('menuBar');
  var headerSize = $("#menuBar").height();

  if (distanceY > shrinkOn) {
    $("#menuBar").animate({ height:'60px'}, 0);
    $("#menuBar").css('background', 'rgba(255, 255, 255, 1)');
    $("#logo").animate({ height:'40px'}, 0);
  } else {
    if (headerSize < 101) {
      $("#menuBar").animate({ height:'100px'}, 0);
      $("#menuBar").css('background', 'rgba(0, 0, 0, 0)');
      $("#logo").animate({ height:'80px'}, 0);
    }
  }
}

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

function toggle(size){
  var sizes = [
      {
        "size":"chico",
        "price":"40",
        "acronim":"s"
      },
      {
        "size":"mediano",
        "price":"45",
        "acronim":"m"
      },
      {
        "size":"grande",
        "price":"50",
        "acronim":"l"
      },
      {
        "size":"más grande",
        "price":"55",
        "acronim":"xl"
      },
  ];

  var carSize = sizes[size].size;
  var carPrice = sizes[size].price;
  var carImage = "<img src='res/img/elmts/cars/" + sizes[size].acronim + ".png' alt='carro"+ sizes[size].acronim +"'/>";

  document.getElementById('car-size').textContent = carSize;
  document.getElementById('car-price').textContent = carPrice;
  document.getElementById('car-image').innerHTML = carImage;
}
