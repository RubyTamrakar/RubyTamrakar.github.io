let accButton = document.getElementById("create");
accountInfoList = [];
let accEventHandler = (function() {
    'use strict'
    return {
        createAccount: function(name, amount) {
            let accName = name;
            let balance = amount;
            accountInfoList.push({ name: accName, balance: balance });
            return accountInfoList;
        }
    }
})();
accButton.addEventListener("click", function() {
    let accName = document.getElementById("name").value;
    let deposit = document.getElementById("deposit").value;
    accEventHandler.createAccount(accName, deposit);
    document.getElementById("myTextArea").value = '';
    accountInfoList.forEach(account => {
        document.getElementById("myTextArea").value += `Account name: ${account.name}, Balance: ${account.balance} \n`;
    });
});