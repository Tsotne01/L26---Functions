function calcTip(bills) {

    for (let i of bills) {
        // დატოვებული Tips
        tipsArr.push(i > 50 && i < 300 ? i * 0.15 : i * 0.2);
        // სულ დახარჯული. Bill + Tip
        spentSumArr.push(i > 50 && i < 300 ? i + (i * 0.15) : i + (i * 0.2));
    }

    // საშუალოდ დატოვებული tip
    function averageTip(tips) {
        let sum = 0;
        for (let x of tips) {
            sum += x
        }
        spentMoney.averageTip = sum / tipsArr.length
    }
    averageTip(tipsArr)
    console.log(`საშუალოდ დატოვებული Tip: ${spentMoney.averageTip}`)

    // საშუალოდ დახარჯული თანხა
    function averageSpent(spentSum) {
        let sum = 0;
        for (let x of spentSum) {
            sum += x
        }
        spentMoney.averageSpent = sum / spentSumArr.length
    }
    averageSpent(spentSumArr)
    console.log(`საშუალოდ დახარჯული თანხა: ${spentMoney.averageSpent}`)

}

const spentMoney = {
    bills: [22, 295, 176, 440, 37, 105, 10, 1100, 96, 52],
    tips: [],
    spentSum: []
}

let billsArr = spentMoney.bills
let tipsArr = spentMoney.tips
let spentSumArr = spentMoney.spentSum
calcTip(billsArr)