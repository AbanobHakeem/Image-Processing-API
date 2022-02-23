import express from 'express';  
import path from 'path'; 
import sharp from 'sharp';
import { isInFolder,prepareThumbs,imageName } from '../../utilities/filesAndFolders';
const image = express.Router();


image.get('/' ,(req, res) => { 
    const filename:string=req.query.filename as string;
    const width:number=parseInt(req.query.width as string) ;
    const height:number=parseInt(req.query.height as string) ;
    const modfiedName=imageName(filename,width,height);
    if(isInFolder('',modfiedName)){
        res.sendFile('thumb/'+modfiedName,{ root: 'public' })
    }
    else{
        prepareThumbs();
            sharp(path.join('public','full',filename+'.jpg'),)
            .resize(width, height)
            .toFile(path.join('public','thumb',modfiedName), (err, info) => { 
                console.error(err)
             }).toBuffer()
             .then((result) => {
                res.sendFile('thumb/'+modfiedName,{ root: 'public' }) 
             }).catch((err) => {
                console.error(err)
             });;
        
    }

    
});

export default image;