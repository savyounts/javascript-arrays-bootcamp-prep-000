var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  var chocolateBars2 = ['element', ...chocolateBars]
  return chocolateBars2
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift('element')
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

function 