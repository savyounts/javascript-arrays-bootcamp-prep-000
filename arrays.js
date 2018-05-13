var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var array = [...array,element]
  return array

  
}

function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element)
   return array
}

function accessElementInArray(array, index) {
  console.log(array[index])
  return index
  
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array, element){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array, element){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array, element){
  array.slice(-1)
  return array
}



