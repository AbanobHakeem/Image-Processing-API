import express from 'express';
import { isInFolder } from '../utilities/filesAndFolders';
import { postiveNumber } from '../utilities/validValues';
const isQueryValid= (
    req: express.Request, 
    res: express.Response, 
    next: Function
): void => {
    const filename:string=req.query.filename as string;
    const width:number=parseInt(req.query.width as string) ;
    const height:number=parseInt(req.query.height as string) ;
    console.log(`(postiveNumber ${postiveNumber(width)} && postiveNumber ${postiveNumber(height)}  && isInFolder ${isInFolder('full',filename+'.jpg')})`)
    if(postiveNumber(width) && postiveNumber(height) && isInFolder('full',filename+'.jpg'))
        next()
    else
        res.redirect('/api/queryErorr')
};
export default isQueryValid;