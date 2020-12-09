function isTouchingg(object1,object2) {
    if(Math.abs(object1.x-object2.x)<object2.width/2+object1.width/2&&Math.abs(object1.y-object2.y)<object2.height/2+object1.height/2){
      return true;
    }
    else{
      return false;
    }
  }
  function bounceOfff(object1,object2) {
      if(Math.abs(object1.x-object2.x)<object2.width/2+object1.width/2){
        object2.shapeColor = "red";
        object1.shapeColor = "red";
        object2.velocityX = object2.velocityX * (-1);
        object1.velocityX = object1.velocityX * (-1);
      }
      else{
        object2.shapeColor = "green";
        object1.shapeColor = "green";
      }
    }