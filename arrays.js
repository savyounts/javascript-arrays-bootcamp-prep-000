var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  var chocolateBars2 = ['element', ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift('element')
}

function addElementToEndOfArray() {
  var chocolateBars2 = [...chocolateBars,'element']
  
}

function destructivelyAddElementToEndOfArray() {
   chocolateBars.push('element')
}