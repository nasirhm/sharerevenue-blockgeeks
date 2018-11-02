function checkAllBalances() {
    var i = 0;
    web3.eth.accounts.forEach(function (e) {
        console.log("  eth.accounts[" + i + "]: " + e + " \tbalance: " + web3.fromWei(web3.eth.getBalance(e), "ether") + " ether");
        i++;
    })
};