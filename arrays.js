var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element) {
  [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  Array.unshift(element)
  return Array
}

function addElementToEndOfArray(array, element) {
  var array = [...array,element]

  
}

function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element)
   return array
}

function accessElementInArray(array, element) {
  console.log(array[2])
  
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
  array.slice(0, array.lenth -1)
  return array
}
