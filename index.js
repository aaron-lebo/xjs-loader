var escodegen = require('escodegen');
var execSync = require('child_process').execSync;

module.exports = function(source) {
    var res = execSync('mix xjs ' + this.resourcePath);
    var ast = JSON.parse(res);
    return escodegen.generate(ast);
};
