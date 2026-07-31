// Total of Incomes 
var income1 = document.getElementById('value1-income')
var income2 = document.getElementById('value2-income')
var resultIncome = document.getElementById("result-income")

var n1Income = Number(income1.textContent)
var n2Income = Number(income2.textContent)

var sumIncome = n1Income + n2Income

resultIncome.innerText = (sumIncome)

// Total Variable Expenses
var variable1 = document.getElementById('value1-variable')
var variable2 = document.getElementById('value2-variable')
var variable3 = document.getElementById('value3-variable')
var resultVariable = document.getElementById("result-variable")

var n1Variable = Number(variable1.textContent)
var n2Variable = Number(variable2.textContent)
var n3Variable = Number(variable3.textContent)

var sumVariable = n1Variable + n2Variable + n3Variable

resultVariable.innerText = (sumVariable)

// Total Expenses
var expenses1 = document.getElementById('value1-expenses')
var expenses2 = document.getElementById('value2-expenses')
var resultExpenses = document.getElementById('result-expenses')

expenses2.innerText = (sumVariable)

var n1Expenses = Number(expenses1.textContent)
var n2Expenses = Number(expenses2.textContent)

var sumExpenses = n1Expenses + n2Expenses

resultExpenses.innerText = sumExpenses


// Total Left To Spend
var n1Left = Number(document.getElementById('value1-left').textContent)
var n2Left = Number(document.getElementById('value2-left').textContent)
var resultLeft = document.getElementById("result-left")

var minusLeft = sumIncome - sumExpenses

resultLeft.innerText = minusLeft

// Total Cash Flow
var cashflow1 = document.getElementById('value1-cashflow')
var cashflow2 = document.getElementById('value2-cashflow')
var cashflow3 = document.getElementById('value3-cashflow')
var resultDifference = document.getElementById('result-difference')

cashflow1.innerText = (sumIncome)
cashflow2.innerText = (n1Left)
cashflow3.innerText = (sumExpenses)

var minusCashflow = sumIncome - (n1Left + sumExpenses)

resultDifference.innerText = minusCashflow