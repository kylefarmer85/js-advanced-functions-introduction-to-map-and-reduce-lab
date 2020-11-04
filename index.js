// Your code here
// const mapToNegativize = (arr) => {
//   return arr.map(num => {
//     return -Math.abs(num)
//   })
// }

const mapToNegativize = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * -1)
  }
  return result
}

const mapToNoChange = (arr) => {
  return arr
}

const mapToDouble = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2)
  }
  return result
}

// const mapToDouble = (arr) => {
//   return arr.map(num => num * 2)
// }

const mapToSquare = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] ** 2)
  }
  return result
}

// const mapToSquare = (arr) => {
//   return arr.map(num => num ** 2)
// }

const reduceToTotal = (arr, startingPoint=0) => {
  let result = startingPoint
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result
}

const reduceToAllTrue = (arr) => {
  for (let i = 0; i < arr.length; i++ ) {
    if (!arr[i]) return false
  }
  return true
}

const reduceToAnyTrue  = (arr) => {
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i]) return true
  }
  return false
}

