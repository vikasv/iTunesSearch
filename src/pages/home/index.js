'use strict';

module.exports = function(req, res) {
    res.sendFile(`${__dirname}/index.html`);
}