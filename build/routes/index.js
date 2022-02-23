"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_1 = __importDefault(require("./api/image"));
var isQueryValid_1 = __importDefault(require("../middlewares/isQueryValid"));
var routes = express_1.default.Router();
routes.use('/image', isQueryValid_1.default, image_1.default);
routes.get('/queryErorr', function (req, res) {
    res.send('Query Erorr try fix it and try again');
});
exports.default = routes;
