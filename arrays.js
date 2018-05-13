var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var Array = ['array','element']

function addElementToBeginningOfArray() {
  var Array = ['foo', ...Array]
  return 'foo', 1
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift('foo')
  return chocolateBars
}

function addElementToEndOfArray() {
  var chocolateBars2 = [...chocolateBars,'element']
  return chocolateBars
  
}

function destructivelyAddElementToEndOfArray() {
   chocolateBars.push('element')
   return chocolateBars
}

function accessElementInArray() {
  console.log(chocolateBars[2])
  
}

function destructivelyRemoveElementFromBeginningOfArray() {
  chocolateBars.shift();
  return chocolateBars
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
