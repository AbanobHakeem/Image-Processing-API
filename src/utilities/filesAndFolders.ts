import {promises as fsPromises,existsSync} from 'fs';
const isInFolder=(foldername:string,filename:string):boolean =>{
  try {
    const path =`public/${foldername}/${filename}`
    return existsSync(path);
    } catch(err) {
    console.error(err);
    return false;
  }

}
const prepareThumbs = async ()=> {
  try {
    if(!existsSync('public/thumb'))
    await fsPromises.mkdir('public/thumb').then(()=>{
      return existsSync('public/thumb')
    });
  } catch(err) {
    console.error(err);
    return existsSync('public/thumb')
  }
  
}
const genrateModdfiedImageName=(filename:string,width:number,height:number)=>{
  return filename+'_'+width+'_'+height+'.jpg'
}
export {isInFolder,prepareThumbs ,genrateModdfiedImageName as imageName}