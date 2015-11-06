// LICENSE : MIT
"use strict";
module.exports = {
    website: {
        html: {
            "head:end": '<link rel="canonical" href="' + this.options.canonicalURL + '">',
        }
    }
};