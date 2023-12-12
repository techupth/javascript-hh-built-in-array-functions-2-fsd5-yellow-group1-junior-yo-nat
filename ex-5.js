let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Maisy Sudhir",
];

function searchCrimeRecord(name) {
  if (crimeRecordNames.includes(name)) {
    return `${name} has a crime record !!!`;
  } else {
    return `${name} has no crime record.`;
  }
}

console.log(searchCrimeRecord("Theodora Milenko"));
console.log(searchCrimeRecord("Maisy Sudhir"));
console.log(searchCrimeRecord("John Doe"));

console.log(searchCrimeRecord("Dilan Sandra"));
console.log(searchCrimeRecord("Tinashe Benigno"));
