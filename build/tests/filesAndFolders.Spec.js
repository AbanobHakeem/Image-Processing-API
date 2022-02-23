"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filesAndFolders_1 = require("./../utilities/filesAndFolders");
describe('suite for the isInFolder function', function () {
    it('describes the isInFolder if the file is the folder', function () {
        expect((0, filesAndFolders_1.isInFolder)('full', 'img1.jpg')).toEqual(true);
    });
    it('describes the isInFolder if the file is not the folder', function () {
        expect((0, filesAndFolders_1.isInFolder)('full', 'img5000.jpg')).toEqual(false);
    });
});
describe('suite for the prepareThumbs function', function () {
    it('describes the prepareThumbs if the folder is not fuoud it creats is', function () {
        expect((0, filesAndFolders_1.prepareThumbs)()).toBeTruthy();
    });
});
describe('suite for the imageName function', function () {
    it('describes the imageName genrates the image new name', function () {
        expect((0, filesAndFolders_1.imageName)('img1', 100, 100)).toEqual('img1_100_100.jpg');
    });
});
