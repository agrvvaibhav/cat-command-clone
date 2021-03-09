let fs=require("fs");
let pathmodule=require("path");

function isFileOrNot(path){
    return fs.lstatSync(path).isFile();
}

function filepathexist(path){
    return fs.existsSync(path);
}

function valid(input,currDir){
    if(input[0]!=undefined){
        if(input[0]=='-s'||input[0]=='-n'||input[0]=='-b'){
            if(input[2]=="-w"){
                if(filepathexist(pathmodule.join(currDir,input[1]))&&filepathexist(pathmodule.join(currDir,input[3]))){
                    if(isFileOrNot(pathmodule.join(currDir,input[1]))&&isFileOrNot(pathmodule.join(currDir,input[3]))){
                        return "mc";
                    }
                    return "fde";
                }
                return "fde";

            }
            let filepath=pathmodule.join(currDir,input[1]);
            if(filepathexist(filepath)&&isFileOrNot(filepath)){
                return "dmc";
            }
            return "fde";

        }
        if(input[1]=="-w"||input[1]=="-a"){
            if(filepathexist(pathmodule.join(currDir,input[0]))&&isFileOrNot(pathmodule.join(currDir,input[0]))){
                if(input[1]=="-w"){
                    return "mc";
                }
                if(filepathexist(pathmodule.join(currDir,input[2]))&&isFileOrNot(pathmodule.join(currDir,input[2]))){
                    return "mc"
                }
                return "fde";
            }
            return "fde";
        }

        for(let i=0;i<input.length;i++){
            let filepath=pathmodule.join(currDir,input[i]);
            if(!filepathexist(filepath)||!isFileOrNot(filepath)){
                return "fde";
            }
        }
        return "dc";
    }
    return "fde";
    
}

module.exports={
    fn:valid
}

