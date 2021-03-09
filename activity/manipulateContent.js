let fs=require("fs");
let pathmodule=require("path");

function overrideFile(path1,path2){
    if(!fs.existsSync(path2)){
        fs.openSync(path2,'w');
    }
    let mytext=fs.readFileSync(path1,"utf-8");
    fs.writeFileSync(path2,mytext);
}

function appendContent(path1,path2){
    let mytext=fs.readFileSync(path1,"utf-8");
    fs.appendFileSync(path2,mytext);
}

function spaceoverride(path1,path2){
    let mytext=fs.readFileSync(path1,"utf-8");
    // console.log(mytext);
    let regexchar=/\s+/g;
    let replacchar=" "
    let newText=mytext.replace(regexchar,replacchar);
    
    fs.writeFileSync(path2,newText);
}


function manipulateContent(path1,path2,mode){
    switch(mode){
        case "override":
            overrideFile(path1,path2);
            break;
        case "append":
            appendContent(path1,path2);
            break;
        case "spaceoverride":
            spaceoverride(path1,path2);
            break;

    }
}

module.exports={
    fn:manipulateContent
}
