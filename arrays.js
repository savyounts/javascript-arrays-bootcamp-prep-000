var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray() {
  Array.unshift(element)
  return Array
}

function addElementToEndOfArray() {
  var array = [...array,element]
  return array
  
}

function destructivelyAddElementToEndOfArray() {
   array.push(element)
   return array
}

function accessElementInArray() {
  console.log(array[2])
  
}

function destructivelyRemoveElementFromBeginningOfArray() {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(){
  chocolateBars2 = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(){
  chocolateBars2 = chocolateBars.slice(0, chocolateBars.lenth -1)
  return chocolateBars
}
