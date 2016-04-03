var execSync = require('child_process').execSync;

module.exports = function(source) {
    return execSync('mix xjs ' + this.resourcePath);
};
