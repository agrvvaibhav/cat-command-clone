#! /usr/bin/env node

let fs=require("fs");
let pathmodule=require("path");
let myDisCon=require("./displaycontent");
let myManCon=require("./manipulateContent");
let myDisManCon=require("./displayManipulatedContent");
let mycommandtype=require("./validinput");

let mycurrDir=process.cwd();

let input=process.argv.slice(2);
// console.log(input);

function isFileOrNot(path){
    return fs.lstatSync(path).isFile();
}

function mCommType(input){
    if(input[1]=="-w"){
        myManCon.fn(pathmodule.join(mycurrDir,input[0]),pathmodule.join(mycurrDir,input[2]),"override");
    }else{
        if(input[1]=="-a"){
            myManCon.fn(pathmodule.join(mycurrDir,input[0]),pathmodule.join(mycurrDir,input[2]),"append");
        }else{
            myManCon.fn(pathmodule.join(mycurrDir,input[1]),pathmodule.join(mycurrDir,input[3]),"spaceoverride");
        }
    }
}


let command=mycommandtype.fn(input,mycurrDir);
// console.log("command=",command);


switch(command){
    case "dc":
        myDisCon.fn(input,mycurrDir)
        break;
    case "dmc":
        myDisManCon.fn(pathmodule.join(mycurrDir,input[1]),input[0]);
        break;
    case "mc":
        mCommType(input);
        break;
    case "fde":
        console.log("error : file does not exist");
        break;
    default: 
        console.log("some error occured");
}
