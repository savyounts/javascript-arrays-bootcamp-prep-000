var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  var chocolateBars2 = ['foo', ...chocolateBars]
  return chocolateBars2
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift('foo')
  return chocolateBars
}

function addElementToEndOfArray() {
  var chocolateBars2 = [...chocolateBars,'element']
  return chocolateBars2
  
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
  return choclateBars2
}

function destructivelyRemoveElementFromEndOfArray(){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(){
  chocolateBars2 = chocolateBars.slice(0, chocolateBars.lenth -1)
  return chocolateBars
}
