// Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays. For example, let's look at the below three arrays. Here 6 is the smallest number that's common in all the arrays.

//O(n) time, O(1) space

function smallestCommonNum(arr1, arr2, arr3) {
  //set pointers
  let smallestArr1 = 0;
  let smallestArr2 = 0;
  let smallestArr3 = 0;

  //save temps
  let smallestArr1Val;
  let smallestArr2Val;
  let smallestArr3Val;


  while (arr1.length > smallestArr1 && arr2.length > smallestArr2 && arr3.length > smallestArr3) {
    // console.log("1:", smallestArr1Val, "2:", smallestArr2Val, "3:", smallestArr3Val)
    //set temps
    smallestArr1Val = arr1[smallestArr1];
    smallestArr2Val = arr2[smallestArr2];
    smallestArr3Val = arr3[smallestArr3];

    //check if in common
    if (smallestArr1Val === smallestArr2Val && smallestArr2Val === smallestArr3Val && smallestArr1Val === smallestArr3Val) {
      return smallestArr1Val;
    } else {

      if (smallestArr1Val <= smallestArr2Val && smallestArr1Val <= smallestArr3Val) {
        smallestArr1++;
      }
      else if (smallestArr2Val <= smallestArr1Val && smallestArr2Val <= smallestArr3Val) {
        smallestArr2++;
      }
      else if (smallestArr3Val <= smallestArr1Val && smallestArr3Val <= smallestArr2Val) {
        smallestArr3++;
      }

    }
  }

  return -1;

}

//smallestCommonNum([6,7,10,25,30,63], [-1,4,5,6,7,8,50,64], [1,6,10,14]); //6
//smallestCommonNum([5,7,10,25,30,63], [-1,4,5,6,7,8,50,64], [1,6,10,14]); //-1
//smallestCommonNum([5,7,10,25,30,63,64], [-1,4,5,6,7,8,50,64], [1,6,10,14,64]); //64