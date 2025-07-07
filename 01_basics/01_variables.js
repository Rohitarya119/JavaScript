const accountId=144553
let accountEmail="rohit@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"

let accountState;


// accountId=2 //not allowed
/*
prefer no to use var because of issue in 
the block scope and functional scope

*/
accountEmail="hc@hc.com"
accountPassword="21221"
accountCity="bengaluru"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
console.log("rohit")

