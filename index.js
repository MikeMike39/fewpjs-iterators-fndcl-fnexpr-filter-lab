// Returns matching drivers if case does not match but letters do; returns an empty array if there is no match
function findMatching(source, sought) {
  return source.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
  );
}
// Returns a driver if beginning provided letters match; does not return drivers if only middle or ending letters match
function fuzzyMatch(source, testString) {
  return source.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}
// Accesses the data structure to check if name matches
function matchName(source, soughtName) {
  return source.filter((record) => record.name === soughtName);
}
