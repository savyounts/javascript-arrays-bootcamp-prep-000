var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElemetnToBeginningOfArray () {
  var chocolateBars = ['hershey', ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray() {
  choclateBars[1] = 'hershey'
}

function addElementToEndOfArray () {
  var chocolateBars = [...chocolateBars, "hershey"]
  
}

function destructivelyAddElementToEndOfArray () {
   choclateBars[5] = 'hershey'
}