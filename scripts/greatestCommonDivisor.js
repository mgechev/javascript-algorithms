function greatestCommonDivisor(a, b){
    if(b == 0)
        return a;
    else
        return greatestCommonDivisor(b, a%b);
} // 

// greatestCommonDivisor(14, 21);
  // greatestCommonDivisor(21, 14);
  // greatestCommonDivisor(14, 7);
  // greatestCommonDivisor(7, 0);
  // 7
//  greatestCommonDivisor(69, 169);
  //greatestCommonDivisor(169, 69);
  //greatestCommonDivisor(69, 31);
  //greatestCommonDivisor(31, 7);
  //greatestCommonDivisor(7, 3);
  //greatestCommonDivisor(3, 1);
  //greatestCommonDivisor(1, 2);
  //greatestCommonDivisor(2, 1);
  // 1

function greatestCommonDivisorBasic(a, b){
  var divisor = 2, 
      greatestDivisor = 1;

  //if u pass a -ve number this will not work. fix it dude!!
  if (a < 2 || b < 2)
     return 1;
  
  while(a >= divisor && b >= divisor){
   if(a %divisor == 0 && b% divisor ==0){
      greatestDivisor = divisor;      
    }
   divisor++;
  }
  return greatestDivisor;
}