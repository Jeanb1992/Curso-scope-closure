// function moneyBox(coins) {
//  let saveCoins = 0;
//  saveCoins += coins;
//  console.log(`money box: $${saveCoins}`);

// }
// moneyBox(5);
// moneyBox(5);

function moneyBox(){
 let saveCoins= 0;
 function countCoins(coins){
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
 }
 return countCoins
}
const myMoenyBox =moneyBox();
myMoenyBox(5);
myMoenyBox(10);
const moneyBoxAna = moneyBox();
moneyBoxAna(3);