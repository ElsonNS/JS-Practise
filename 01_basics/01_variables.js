const accountId = 144553;
let accountEmail = "nselson26@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState; //undefined
// accountId = 2 // not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);

/*
    Prefer not use var keyword because of problems in block and functional scope.
*/
