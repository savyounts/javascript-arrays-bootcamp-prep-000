var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray () {
  var chocolateBars2 = ['hershey', ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift('hershey')
}

function addElementToEndOfArray () {
  var chocolateBars2 = [...chocolateBars, "hershey"]
  
}

function destructivelyAddElementToEndOfArray () {
   chocolateBars.push('hershey')
}