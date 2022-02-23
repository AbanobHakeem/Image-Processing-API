"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filesAndFolders_1 = require("../utilities/filesAndFolders");
var validValues_1 = require("../utilities/validValues");
var isQueryValid = function (req, res, next) {
    var filename = req.query.filename;
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    console.log("(postiveNumber ".concat((0, validValues_1.postiveNumber)(width), " && postiveNumber ").concat((0, validValues_1.postiveNumber)(height), "  && isInFolder ").concat((0, filesAndFolders_1.isInFolder)('full', filename + '.jpg'), ")"));
    if ((0, validValues_1.postiveNumber)(width) && (0, validValues_1.postiveNumber)(height) && (0, filesAndFolders_1.isInFolder)('full', filename + '.jpg'))
        next();
    else
        res.redirect('/api/queryErorr');
};
exports.default = isQueryValid;
