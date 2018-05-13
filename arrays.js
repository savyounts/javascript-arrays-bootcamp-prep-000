var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElemetnToBeginningOfArray () {
  var chocolateBars2 = ['hershey', ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray() {
  choclateBars[1] = 'hershey'
}

function addElementToEndOfArray () {
  var chocolateBars2 = [...chocolateBars, "hershey"]
  
}

function destructivelyAddElementToEndOfArray () {
   choclateBars[5] = 'hershey'
}