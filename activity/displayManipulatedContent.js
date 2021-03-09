let fs=require("fs");
let pathmodule=require("path");
let readlinemodule=require("readline");

function displaysingularcontent(path){
    let lineReader = readlinemodule.createInterface({
        input:fs.createReadStream(path)
      });
      lineReader.on('line', function (currLine) {
          if(currLine!=""){
            console.log( currLine);
          }
        
      });
}

function numberlines(path){
    let i=1;
    let lineReader = readlinemodule.createInterface({
        input:fs.createReadStream(path)
      });
      lineReader.on('line', function (currLine) {
            let currlne=i+" "+currLine
            console.log(currlne);
            i++;
          
        
      });
}

function numbernonemptylines(path){
    let i=1;
    let lineReader = readlinemodule.createInterface({
        input:fs.createReadStream(path)
      });
      lineReader.on('line', function (currLine) {
          if(currLine!=""){
            let currlne=i+" "+currLine
            console.log(currlne);
            
            i++;
          }else{
              console.log(currLine);
          }
        
      });
}

function dispayManCont(path,mode){
    switch(mode){
        case "-s":
            displaysingularcontent(path);
            break;
        case "-n":
            numberlines(path);
            break;
        case "-b":
            numbernonemptylines(path);
            break;
        default:
            console.log("no switch command executed");
    }

}

module.exports={
    fn:dispayManCont
}