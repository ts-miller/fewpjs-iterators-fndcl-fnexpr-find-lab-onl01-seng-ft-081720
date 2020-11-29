const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const result = array.find( function(e) { return e['result'] === 'W' })
  return !!result ? result['year'] : result
}