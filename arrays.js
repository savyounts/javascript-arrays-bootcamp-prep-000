var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  var array = chocolateBars
  [element, ...array]
  return
}

function destructivelyAddElementToBeginningOfArray() {
  Array.unshift('element')
  return Array
}

function addElementToEndOfArray() {
  var array = [...array,'element']
  return array
  
}

function destructivelyAddElementToEndOfArray() {
   array.push('element')
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
  chocolateBars2 = chocolateBars.slice(1)
  return choclateBars
}

function destructivelyRemoveElementFromEndOfArray(){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(){
  chocolateBars2 = chocolateBars.slice(0, chocolateBars.lenth -1)
  return chocolateBars
}
