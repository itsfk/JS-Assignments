function submit(){
  var firsttext=document.getElementById("a").value
  var secondtext=document.getElementById("b").value
  var thirdtext=document.getElementById("c").value
  var fourthtext=document.getElementById("d").value
  console.log(firsttext)
  document.write(firsttext)
  document.write("<br>")
  document.write(secondtext)
  document.write("<br>")
  document.write(thirdtext)
  document.write("<br>")
  document.write(fourthtext)
}
function showMore(){
  //shows the #more
  document.getElementById('more').style.display = "block";
}
function delete_row(no)
{
 document.getElementById("row"+no+"").innerHTML="";
}
function edit_row(no)
{
  document.getElementById("theform").style.display = "block";
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
	
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}
function showForm() {
  document.getElementById("theform").style.display = "block";
  }
  function myFun(){
 document.getElementById("a").innerHTML="Hello World"

  }
function expand1(){
  document.getElementById("a").innerHTML="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
}
function expandLoris() {
  
   var para = document.getElementById("slowLoris");
   para.innerHTML= "<span style='background-color:lightpink;'>Hello World</span>";
   
}
function alpha(){
  document.getElementById("abc").style.fontSize="2em"
}