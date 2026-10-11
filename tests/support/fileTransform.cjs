// Une image importée devient son nom de fichier, pour pouvoir la reconnaître dans les tests
const path = require('path');

module.exports = {
    process(_source, filename) {
        return { code: `module.exports = ${JSON.stringify(path.basename(filename))};` };
    },
};
