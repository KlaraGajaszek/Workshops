import { input } from '../utils'

// Input array from utils
// Output: Two item from array then when we will multiply them the score isEqual 2020

// first idea 
export const sum2020 = (arr: Array<number>, targetValue: number) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      const num1 = arr[i]
      const num2 = arr[j]

      if (num1 + num2 === targetValue) return num1 * num2
    }
  }
}

// second idea, when we have other value the equal isn't good

const setArray = new Set(input)
console.log("setArray", setArray)

export const sum2020Part2 = (arr: Array<num>, targetValue: number) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const num1 = arr[i] //1010
    const num2 = targetValue - num1; //1010
    if (setArray.has(num2)) return num1 * num2

  }
}


// third part the best result
const sortedInput = input.sort((a, b) => a - b)
export const sum2020Part3 = (l: number = 0, r: number = sortedInput.length - 1, targetValue: number = 2020, array: Array<number> = sortedInput) => {

  const rightValue = array[r]
  const leftValue = array[l]

  const sum = rightValue + leftValue

  if (sum === targetValue) return { rightValue, leftValue }
  else if (sum < targetValue) return sum2020Part3(l + 1, r, targetValue, array)
  else if (sum > targetValue) return sum2020Part3(l, r - 1, targetValue, array)
}

// next task
// Then we want to have 3 number and then when we will multiply them the score isEqual 2020

export const getThreeValues = (targetValue: number = 2020, array: Array<number> = input) => {
  // to do 
  // for (let i = 0; i < array.length; i++) {
  //   const number = array[i]
  //   const newYear = 2020 - number
  //   const product = sum2020Part3(newYear)
  //   console.log("product", product)


  // }

}



