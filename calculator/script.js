let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'


// input number
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}


// get percentage
const percentage = document.querySelector('.percentage')
percentage.addEventListener('click', () => {
    getPercentage(currentNumber)
    updateScreen(currentNumber)
})
// percentage function
const getPercentage = (number) => {
    if (number !== '0') {
        currentNumber = parseFloat(number) / 100
    } else {
        currentNumber = number
    }
}


// get operator
const operators = document.querySelectorAll('.operator')
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        // get event clicked operator
        inputOperator(event.target.value)
    })
})
// input operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}


// calculate function
const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;

        default:
            result = '0'
            break;
    }
    currentNumber = result
    calculationOperator = ''
}


//get clear btn
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})
// clear all function
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}


//get decimal
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

// input decimal function
const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}


// get delete-btn
const deleteBtn = document.querySelector('.delete-btn')
deleteBtn.addEventListener('click', () => {
    if (currentNumber !== '0') {
        deleteFunction()
    }
    updateScreen(currentNumber)
})
// delete function
const deleteFunction = () => {
    currentNumber = currentNumber.slice(0, -1)
    if(currentNumber.length === 0){
        currentNumber = '0'
    }
}

// get equalSign
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})


// get calculator screen
const calculatorScreen = document.querySelector('.calculator-screen')
// update screen
const updateScreen = (number) => {
    calculatorScreen.value = number
}


// get numbers
const numbers = document.querySelectorAll('.number')
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        // get event clicked number
        inputNumber(event.target.value)
        // get event clicked number and update the screen
        updateScreen(currentNumber)
    })
})

