let fs=require("fs");
let pathmodule=require("path");
let readlinemodule=require("readline");


function displaysingularcontent(path){
    let lineReader = readlinemodule.createInterface({
        input:fs.createReadStream(path)
      });
      lineReader.on('line', function (ahi) {
          if(ahi!=""){
            console.log(ahi);
          }
        
      });
}

function numberlines(path){
    let i=1;
    let lineReader = readlinemodule.createInterface({
        input:fs.createReadStream(path)
      });
      lineReader.on('line', function (ahi) {
         let mystr=i+" "+ahi;
            console.log(mystr);
            i++;
          
        
      });
}

function numbernonemptylines(path){
    let i=1;
    let lineReader = readlinemodule.createInterface({
        input:fs.createReadStream(path)
      });
      lineReader.on('line', function (ahi) {
          if(ahi!=""){
            let mystr=i+" "+ahi;
            console.log(mystr);
            i++;
          }else{
              console.log(ahi);
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

dispayManCont(pathmodule.join(__dirname,"vanki.txt"),"-n");