// mysql workbench

// Create a function, a function is an independent unit of code that can be used when "called" upon
// Every function, method, class, etc. are objects. {}
// A parameter is a dependency that you pass into a function inside of the (), example function(parameter)
// A parameter can be anything
function myFirstFunction(parameter, param2, param3, mySecondFunction) {
    // Const creates a variable that CANNOT be changed.
    const myparam = parameter
    console.log("myparam = ", myparam)
    let arr5 = mySecondFunction()
    console.log(arr5[1])

   const innerObject = { 
        innerFunction() {
            return "I called my inner function"
        }
    }
    // An array in JS works like a List in Java, and an array in Java, there is no need to specify a limit when creating an array.
    // Let creates a variable that CAN be changed.
    // let array = [1, 2, 3, 4, "5", 6, [7, 8], 9, 10]
    // let secondArray = [11, 12, 9]
    // Var works similiar to Let, not used as much anymore as Let is a newer way. var means Variable.
    // var arrayTwo = []
    // Syntax for a For loop.
    // for (let i = 0; i < array.length - 1; i++) {
    //     if (array[i].isArray()) {
    //         let innerArray = array[i] // [7,8]
    //         for(let j = 0; j < innerArray.length -1; j++) {
    //             if(innerArray[j] === 8) {
    //                 console.log(8)
    //             }
    //         }
    //     }
    // }
    // let firstArray = [1, 2, 3, 4, "5", 6, [7, 8], 9, 10]
    // let secondArray = [11, 12, 9]
    /// Double For loop second scenario
    
    // for (let i = 0; i < firstArray.length - 1; i++) {
    //         for(let j = 0; j < secondArray.length -1; j++) {
    //             if(secondArray[j] === firstArray[i]) {
    //                 console.log("True")
    //             }
    //         }
    // }
    
    let arr3 = [1, 2, 5, 4, 9]
    let arr4 = [9, 4, 5, 8, 1]
    // Write a solution to check if adding two number from each array = 10 for each scenario print true
    for(let i = 0; i < arr3.length; i++){
        for(let j = 0; j < arr4.length; j++){
            if(arr3[i] + arr4[j] === 10){
                if (arr3[i] === 1) {
                    console.log("First Print")
                } else if (arr3[i] === 5) {
                    console.log("Middle Print")
                } else if (arr3[i] === 9) {
                    console.log("Last Print")
                }
            }
        }
    }
    return innerObject
}


// To call a function you instantiate it, create an actual version of the function.
let thing = "something"

const myFirstFunctionCalled = myFirstFunction(thing, 3, ["text", 10, true], mySecondFunction)
console.log(myFirstFunctionCalled.innerFunction())

function mySecondFunction() {
    return [1,2,3]
}
// const multipleTimesCalled = myFirstFunction()
/*
Scope is a concept in programming for what area of the code has access to certain things.
*/

// let myTopScopeVariable = []

// function myScopeFunction() {
//     myTopScopeVariable
//     let myShitLowerTierScopeVariable = []
// }

// myShitLowerTierScopeVariable

// let greeter = "hey hi"
// let times = 4

// if (times > 3) {
//     greeter = 'say Hello instead'

// }

// console.log(greeter) //"say Hello instead"
