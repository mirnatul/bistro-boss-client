/**
 * 1. install stripe and react stripe js
 * 2. create a checkout form with card element (card element contains: card number, expiration date, csv, zip code)
 * 3. create account on stripe and get the publishable key pk
 * 4. get card information
 * 5. create a payment method
 * 6. use test card to test payment
 * 7. on the server side install stripe
 * 8. create a payment intent api with payment method type
 * 9. make sure you provide amount in cents (multiply price with 100)
 * 10. send to client client_secret
 * 11. call payment intent api to get client secret and store it in a store.
 * 12. use confirmCardPayment api with client secret card info
 * 13. display confirm card error.
 * 14. display confirm card success
 * 14. do things after payment --->
 */