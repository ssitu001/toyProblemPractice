exactChange.js

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

// Otherwise, return change in coin and bills, sorted in highest to lowest order.
// let cash = [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]];

var cashRegValue =arr => 
  arr.reduce( (start, subArr) => {
    return start + subArr[1];
  }, 0).toFixed(2); 


const checkCashRegister = (price, cash, cid) => {
  let change = +(cash - price).toFixed(2);
  let drawerValue = Number(cashRegValue(cid));
  let changeArray = [];
  let exchange = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };
  
  if (change > drawerValue) {
    return "Insufficient Funds";
  } else if (change === drawerValue) {
    return "Closed";
  } else {
    for(let i = cid.length-1; i>= 0; i--) {
      //console.log("before deduction",cid[i]);
      let currencyValue = cid[i][0];
      let fromRegister = +(cid[i][1]).toFixed(2);
      let toGive = Math.floor(change / exchange[currencyValue]);
      //console.log("take",take);
      let amountToDeduct = (toGive * exchange[currencyValue]).toFixed(2);
      //console.log("deduct", deduct)
      if (toGive > 0) {
        if (fromRegister >= amountToDeduct) {
          changeArray.push([currencyValue, +amountToDeduct]);
          change = (change - amountToDeduct).toFixed(2);
          //console.log("change", change)
          //deduct from register
          fromRegister -= amountToDeduct;
        } else {
            if (fromRegister === 0) {
              return "Insufficient Funds";
            } else {
              changeArray.push([currencyValue, +fromRegister]);
              change = (change - fromRegister).toFixed(2);
            //zero out from register
              fromRegister = 0;
            }

        }
      }
      //console.log("after deduction", cid[i])
  
    }
    
  }
  //console.log(changeArray)
    return changeArray;
}


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

//[["QUARTER", 0.50]]

// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.
// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
// checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].
// checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return "Insufficient Funds".
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return "Insufficient Funds".
//checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return "Closed".