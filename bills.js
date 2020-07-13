let bills = [250000, 710000, 125000]
let totalBills = [] 
let tips = [10, 15, 20]

console.log("\n                   RESTAURANT BILL                        ")
console.log("----------------------------------------------------------")
console.log("Restaurant\t   Bill\t\t  Tip\t\tTotal Bill")
console.log("----------------------------------------------------------")
total = payment(bills)
console.log("----------------------------------------------------------")
getAllTotals(total)


function payment(bills) {
    for (index in bills) {
        if (bills[index] > 500000) {
            bill = bills[index]
            tip = tips[0]
            total = getTotalBill(bill, tip)
            totalBills.push(total)
            console.log(`     ${++index} \t\tRp.${bill} \tRp.${myTip} \tRp.${total}`)
        } else if (bills[index] >= 250000 && bills[index] <= 500000) {
            bill = bills[index]
            tip = tips[1]
            total = getTotalBill(bill, tip)
            totalBills.push(total)
            console.log(`     ${++index} \t\tRp.${bill} \tRp.${myTip} \tRp.${total}`)
        } else if (bills[index] < 250000) {
            bill = bills[index]
            tip = tips[2]
            total = getTotalBill(bill, tip)
            totalBills.push(total)
            console.log(`     ${++index} \t\tRp.${bill} \tRp.${myTip} \tRp.${total}`)
        }
    }
    return totalBills
}

function getTotalBill(bill, tip) {
    myTip = bill * tip / 100
    total = bill + myTip
    return total
}

function getAllTotals(total) {
    let sum = 0
    for (index in total) {
        sum += total[index]
    }
    console.log(`\t\t\t\t\tTotal\tRp.${sum}`)
}
