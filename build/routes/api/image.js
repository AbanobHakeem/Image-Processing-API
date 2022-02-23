"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var filesAndFolders_1 = require("../../utilities/filesAndFolders");
var image = express_1.default.Router();
image.get('/', function (req, res) {
    var filename = req.query.filename;
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    var modfiedName = (0, filesAndFolders_1.imageName)(filename, width, height);
    if ((0, filesAndFolders_1.isInFolder)('', modfiedName)) {
        res.sendFile('thumb/' + modfiedName, { root: 'public' });
    }
    else {
        (0, filesAndFolders_1.prepareThumbs)();
        (0, sharp_1.default)(path_1.default.join('public', 'full', filename + '.jpg'))
            .resize(width, height)
            .toFile(path_1.default.join('public', 'thumb', modfiedName), function (err, info) {
            console.error(err);
        }).toBuffer()
            .then(function (result) {
            res.sendFile('thumb/' + modfiedName, { root: 'public' });
        }).catch(function (err) {
            console.error(err);
        });
        ;
    }
});
exports.default = image;
