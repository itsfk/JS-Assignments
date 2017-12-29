function delete_row(no)
{
 document.getElementById("row"+no+"").innerHTML="";
}
function expand(){
//    var text=document.getElementById("my").value
//    alert(text)
document.getElementById("my").value="Faiz"
}
function updateColor (){
    var para= document.getElementById("message")
    //para.className = para.className + " fontcolor";
    para.className ="xyz"
}
var count=0
function incr()
{
count=count+1
document.getElementById("clicks").innerHTML=count
}
function decr()
{
    count=count-1
    document.getElementById("clicks").innerHTML=count
}