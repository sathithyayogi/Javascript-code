// discountPercentage = (ListedPrice - SellingPirce)/ListedPrice * 100

// variable declration done
// apply formular done
// log the output

const ListedPrice = 1050;
const sellingPrice = 1012;

const discountPercentage =  (ListedPrice - sellingPrice) / ListedPrice * 100;

console.log(`The discounted is ${Math.round(discountPercentage)}%`);