var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "vendors/backbone",
            "main": "backbone.js"
        },
        {
            "name": "jquery",
            "location": "vendors/jquery",
            "main": "jquery.js"
        },
        {
            "name": "lodash",
            "location": "vendors/lodash",
            "main": "./lodash.js"
        },
        {
            "name": "text",
            "location": "vendors/text",
            "main": "text.js"
        }
    ],
    "version": "0.2.11",
    "shim": {
        "backbone": {
            "deps": [
                "jquery",
                "lodash"
            ],
            "exports": "Backbone"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages, shim: jam.shim});
}
else {
    var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}