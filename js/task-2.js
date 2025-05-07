function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee
    return `Shipping to ${country} will cost ${totalPrice} credits`

};
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
//Виклик getShippingMessage з будь якими-валідними аргументами повертає правильне значення
console.log(getShippingMessage("Ukraine", 540, 35)); // "Shipping to Ukraine will cost 575 credits"
console.log(getShippingMessage("Austria", 200, 24)); // "Shipping to Austria will cost 224 credits"