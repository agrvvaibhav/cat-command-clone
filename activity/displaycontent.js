let fs=require("fs");
let readlinemodule=require('readline');
let pathmodule=require("path");
 function displayCon(filenames,dir){
    for(let i=0;i<filenames.length;i++){
        console.log(fs.readFileSync(pathmodule.join(dir,filenames[i]),"utf-8"));
    }
 }

 module.exports={
     fn: displayCon
 }

  
  