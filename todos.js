function addelem()
{
    let lie=document.createElement("li");
    let tod=document.getElementById("work").value;
    let dat=document.createTextNode(tod);
    lie.className="linethro";
    lie.appendChild(dat);
    if(tod===" ")
    alert("please write something");
    else
document.getElementById("job").appendChild(lie);
document.getElementById("work").value=" ";
let clos=document.createElement("input");
let done=document.createElement("input");
done.className="don";
clos.className="close";
clos.setAttribute("type","button");
clos.setAttribute("value","remove");
done.setAttribute("type","button");
done.setAttribute("value","done");
lie.appendChild(clos);
lie.appendChild(done);
let donework=document.getElementsByClassName("don");
let adrem=document.getElementsByClassName("close");
for (var i = 0; i < adrem.length; i++) {
    adrem[i].onclick=function()
    {
        this.parentElement.style.display="none";
    }
    
}
for ( i = 0; i < donework.length; i++) {
    donework[i].onclick=function()
    {
        this.parentElement.style.textDecoration="line-through";
    }
    
}

}

