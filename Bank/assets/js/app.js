const bankAccounts = {
    accounts: [
        {
            fullName: "Lingerew Getie",
            balance: 40000,
            accountNumber: 001
        },
        {
            fullName: "Mekedes Zeleke",
            balance: 30000,
            accountNumber: 002
        }
    ],
}

function generateAccount(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}
function allAccounts() {
    const accounts = bankAccounts.accounts
    return accounts.length === 0 ? "No account has been created" : accounts
}
function creatAccount(accountData) {
    if (accountData.balance < 50) {
        return "Initial deposit must be at least 50 birr"
    } else {
        accountData.accountNumber = generateAccount(1000, 100000)
        bankAccounts.accounts.push(accountData)
        return "Account has been created"
    }
}

function balance(accountNumber) {
    const selectedAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber === accountNumber)
    if (selectedAccountNumber.length === 0) {
        return "The account doesn't exist.Want to creat a new one? press 1"
    } else {
        return selectedAccountNumber[0].balance;
    }
}

function deposit(accountNumber, money) {
    const selectedAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber === accountNumber)
    if (selectedAccountNumber.length === 0) {
        return "The account doesn't exist.Want to creat a new one? press 1"
    } else {
        if (money <= 0 || money <= 50) {
            return "Please enter a minimum of 50 birr"
        } else {
            let accountIndex = bankAccounts.accounts.findIndex(account => account.accountNumber == accountNumber)
            bankAccounts.accounts[accountIndex].balance += money
            return money+" birr amount of money had been deposited to account number "+accountNumber
        }
    }
}

function withdraw(accountNumber, money) {
    const selectedAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber === accountNumber)
    if (selectedAccountNumber.length === 0) {
        return "The account doesn't exist.Want to creat a new one? press 1"
    } else {
        if (money <= 0) {
            return "Please enter a valid amount"
        } else {
            let accountIndex = bankAccounts.accounts.findIndex(account => account.accountNumber == accountNumber)
            let currentBalance = bankAccounts.accounts[accountIndex].balance
            let result = currentBalance - money
            if (result > 50) {
                bankAccounts.accounts[accountIndex].balance = result
                return money + " birr had been withdrawn from account number " + accountNumber+ "\n Current Balance: " +result
            } else {
                return "Sorry! you have insufficient amount of money to withdraw. please try again with another amount"
            }
        }
    }
}

function transfer(sender, receiver, amount) {
    let selectedSenderAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber == sender)
    if (selectedSenderAccountNumber.length === 0) {
        return "The sender account you selected doesn't exist"
    } else {
        let selectedReceiverAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber == receiver)
        if (selectedReceiverAccountNumber.length === 0) {
            return "The receiver account you selected doesn't exist"
        } else {
            if (amount <= 0 || amount <= 50) {
                return "please enter at least minimum of 50 birr to send"
            } else {
                let accountIndex = bankAccounts.accounts.findIndex(account => account.accountNumber == sender)
                let currentBalance = bankAccounts.accounts[accountIndex].balance
                let result = currentBalance - amount
                console
                if (result > 50) {
                    console.log(withdraw(sender, amount))
                    console.log(deposit(receiver, amount))
                    return amount+" amount of money has been transferred from " +selectedSenderAccountNumber[0].fullName+ " Account Number " +sender + " to"+ selectedReceiverAccountNumber[0].fullName+ " Account Number " +receiver
                } else {
                    return "you have insufficient amount of money to transfer. please try again with another amount"
                }
            }
        }
    }
}
(function () {
    cont = true
    while (cont) {
        let choice = parseInt(prompt("Welcome to my simple bank system \n Choose what you want to do: \n 1) Creat Account  \n 2) See balance \n 3) Withdraw money \n 4) Deposit money \n 5) Transfer Money \n press any other key to quit"))

        if (choice === 1) {
            let accountData = {
                fullName: null,
                balance: null,
            }
            accountData.fullName = prompt("Enter Your full Name: ")
            accountData.balance = parseFloat(prompt("Enter initial Deposit: "))
            const result = creatAccount(accountData)
            console.table(bankAccounts.accounts)
            console.log(result)
            alert(result)
        
        } else if (choice === 2) {
            let accountNumber = parseInt(prompt("Enter Account Number: "))
            console.log("*********************************************")
            console.log("Your balance is " +balance(accountNumber))
            alert("Your balance is "+balance(accountNumber))

        } else if (choice === 3) {
            let accountNumber = parseInt(prompt("Enter Account Number: "))
            let selectedAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber == accountNumber)
            if (selectedAccountNumber.length === 0) {
                alert("the account you selected doesn't exist")
                console.log("the account you selected doesn't exist")
            } else {
                let amount = parseFloat(prompt("Selected Account: "+selectedAccountNumber[0].fullName+ "\n Account Number: "+selectedAccountNumber[0].accountNumber +"\n Enter the amount you want to withdraw: "))
                let result = withdraw(accountNumber, amount)
                console.log(result)
                alert(result)
            }
        } else if (choice == 4) {
            let accountNumber = parseInt(prompt("Enter Account Number: "))
            let selectedAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber == accountNumber)
            if (selectedAccountNumber.length === 0) {
                alert("the account you selected doesn't exist")
                console.log("the account you selected doesn't exist")
            } else {
                let amount = parseFloat(prompt("Selected Account: " +selectedAccountNumber[0].fullName +" \n Account Number: "+selectedAccountNumber[0].accountNumber+ "\n Enter the amount you want to deposit: "))
                let result = deposit(accountNumber, amount)
                console.log(result)
                alert(result)
            }
        } else if (choice == 5) {
            let sender = parseInt(prompt("Enter Sender Account Number: "))
            let receiver = parseInt(prompt("Enter Receiver Account Number: "))
            let money = parseInt(prompt("Enter amount of money to transfer: "))

            let result = transfer(sender, receiver, money)
            console.log(result)
            alert(result)
        } else {
            console.log("Exiting")
            cont = false
        }
    }

}());