// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
   return drivers.filter(element => element.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(driver, firstLetter){
   return driver.filter(letter => letter.toLowerCase().startsWith(firstLetter.toLowerCase()))
}

function  matchName(drivers, driverName){
   return drivers.filter(search => search.name === driverName );
}