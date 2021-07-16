
function printName(name) {
  console.log(name)
}
//or
// exports.printName = (name) => {
//   console.log(name)
// }

exports.lastName = 'Martins';
//or
// const lastName ='Martins';

module.exports = {printName, lastName};