function yardGreeting(input) {
    
    let price = input[0] * 7.61;
    let discount =  0.18 * price;
    let finalPr = price - discount;
    let finalPrice ="The final price is: " +  finalPr + " lv.";
    let yourDiscount = "The discount is: " + discount + " lv.";
        console.log(finalPrice);
        console.log(yourDiscount);
        
}
yardGreeting(["150"])