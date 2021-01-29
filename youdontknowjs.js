/*
Write a program to calculate the total price of your phone purchase. 
You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. 
You’ll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.

• After you’ve calculated your purchase amount, add in the tax, then print out the calculated purchase amount,
 properly formatted.
• Finally, check the amount against your bank account balance to see if you can afford it or not.

• You should set up some constants for the “tax rate,” “phone price,” “accessory price,” 
and “spending threshold,” as well as a variable for your “bank account balance.”
• You should define functions for calculating the tax and for formatting the price with 
a “$” and rounding to two decimal places.
• Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) 
covered in “Input” on page 6. You may prompt the user for their bank account balance, 
for example. Have fun and be creative! 
*/


 
const accessories = 29.99;
const spendingTreshhold = 300;
let bankAcc = 900;
const currency = '$';
const phoneList = {iPhone6: 99.99, Samsung: 35, iPad: 67};
const taxRate = function (tax) {
    let tot = phoneList * tax;
    return tot;
};

let buyPhone = prompt('What phone do you want to buy?', 'iPhone6');
while (buyPhone !== 'q' && buyPhone !== 'quit') {
    //Specify an input for their bank account.
    for(let i in phoneList){
        if (buyPhone === i) {
            console.log(`Okay, ${buyPhone} cost ${currency}${phoneList[i]}`);
            try {
                taxRate(0.08);
            } catch (error) {
                console.log(`There's an Error here.`);
            }
            
            // prompt('message', _default)
        // }else{
        //     console.log('Didnt find it');
    }
    //
    }

    buyPhone = prompt('What phone do you want to buy?', 'iPhone6');
    
}

console.log('You Quit!');




//It is already a step in the right direction. Done a great job getting to this extent. with my code analogy.

// const totalPrice = function (amount) {
//     //

// };



