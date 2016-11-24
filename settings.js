var zet = require('./settings.json');
console.log("zet.fileName='"+zet.fileName+"'");
var result = { };
for (nombrePropiedad in zet) {
   result[nombrePropiedad] = zet[nombrePropiedad];
   console.log("seteamos nombrePropiedad '"+nombrePropiedad+"' con valor '"+zet[nombrePropiedad]+"'");
}
console.log("el resultado final es '"+result.fileName+"'");
exports.settings = result;

