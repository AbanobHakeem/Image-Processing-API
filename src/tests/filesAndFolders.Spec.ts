
import {isInFolder,prepareThumbs , imageName} from './../utilities/filesAndFolders';

describe('suite for the isInFolder function', () => {
    it('describes the isInFolder if the file is the folder', () => {
        expect(isInFolder('full','img1.jpg')).toEqual(true);
    });
    it('describes the isInFolder if the file is not the folder', () => {
        expect(isInFolder('full','img5000.jpg')).toEqual(false);
    });

  
});
describe('suite for the prepareThumbs function', () => {
    it('describes the prepareThumbs if the folder is not fuoud it creats is', () => {
        expect(prepareThumbs()).toBeTruthy()
    });


  
});
describe('suite for the imageName function', () => {
    it('describes the imageName genrates the image new name', () => {
        expect(imageName('img1',100,100)).toEqual('img1_100_100.jpg');
    });
  
});
