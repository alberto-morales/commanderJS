var conf = require('./settings.js');
if (typeof conf == 'undefined') {
console.log("no tenemos conf");
} else {
console.log("tenemos conf");
}
for (nombrePropiedad in conf) {
   console.log("la propiedad '"+nombrePropiedad+"' tiene valor '"+conf.propiedad+"'");
}
console.log("conf.settings.fileName es '"+conf.settings.fileName+"'");
