let hi=document.getElementById("passwordplace");
function myfunc(){
    let producedPassword="";
    let passwordCharacters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"abcdefghijklmnopqrstuvwxyz!@#$%^&*|?";
    let requiredLength=document.getElementById("requiredLength").value;   
    for(let m=1 ; m<=requiredLength; m++){
        let onePasswordCharacter= Math.round(Math.random()*passwordCharacters.length+1);
        producedPassword+=passwordCharacters.charAt(onePasswordCharacter);
    }
    return producedPassword;
}
function generate(){
    let bye=document.getElementById("requiredLength").value
    if(bye===""||bye=="undefined"){
        alert("select the required length first");
    }
    else{hi.value=myfunc();}
}
function copyfunc(){
    if(hi.value===""){
        alert("first generate then copy")
    }
    else{hi.select();
    document.execCommand("copy");
    alert("password is copied")
    }
}