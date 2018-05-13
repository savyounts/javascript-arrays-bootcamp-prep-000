var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray () {
  var chocolateBars2 = ['hershey', ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars['foo',1] = 'hershey'
}

function addElementToEndOfArray () {
  var chocolateBars2 = [...chocolateBars, "hershey"]
  
}

function destructivelyAddElementToEndOfArray () {
   chocolateBars[5] = 'hershey'
}