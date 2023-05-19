var dashA=JSON.parse(localStorage.getItem('localStudent'))
display()
function display(){
   
result.innerHTML=`<table class="table" style="margin-top:30px;">
<th style="text-align:center;border: 2px solid white;">S/N</th>
<th style="text-align:center;border: 2px solid white;">Name</th>
<th style="text-align:center;border: 2px solid white;">Age</th>
<th style="text-align:center;border: 2px solid white;">Level</th>
<th style="text-align:center;border: 2px solid white;">Gender</th>
<th style="text-align:center;border: 2px solid white;">Action</th>    `
ptag.innerHTML=""

for (let index = 0; index < dashA.length; index++) {
// console.log(dash[index])

result.innerHTML+=`
  <table class="container table table-success" style="height:5px">
     <tr>
        <span class="black"> Happy New Year to <span class="splen"> ${(dashA[index].firstname)}</span></span>
       
         <td style="border: 2px solid white; text-align:center;width:70px">${index+1}</td>
         <td style="border: 2px solid white; text-align:center;width:70px" class="pass" >${(dashA[index].firstname)}</td>
         <td style="border: 2px solid white; text-align:center;width:70px" class="level">${(dashA[index].level)}</td>
         <td style="border: 2px solid white; text-align:center;width:70px">${(dashA[index].gmail)}</td>
         <td style="border: 2px solid white; text-align:center;width:70px">${(dashA[index].password)}</td>
         <td style="border: 2px solid white; width:10px"> <button class="btn btn-danger" onclick="remove(${index})">Delete</button><button class="btn btn-warning" style="position:relative;left:10px" onclick="edit(${index})">Edit</button></td>
     </tr>    
  </table> `               

}
}       

function remove (takeaway){
var yes=confirm("Are you sure of this process")
if(yes==true){
    // var dashb=dash
  //  var dashb=JSON.parse(localStorage.getItem('localStudent'))
   dashA.splice(takeaway,1)
   console.log(dashA)
  //  localStorage.setItem('localStudent',JSON.stringify(dashb))
   display()

}
else{
display()
}
}
function edit(userindex){
secod.innerHTML=` 
<input type="text" name="" id="sname">
<input type="text" name="" id="slevel">
<input type="text" name="" id="sgmail">
<input type="text" name="" id="spassword">
<button onclick="update(${userindex})">Update</button>`
localStorage.setItem('dashborad',JSON.stringify(dashA))
sname.value=dashA[userindex].firstname
slevel.value=dashA[userindex].level
sgmail.value=dashA[userindex].gmail
spassword.value=dashA[userindex].password  
}
function update(change){
var studentDetails2={
    firstname:sname.value,
    level:slevel.value,
    gmail:sgmail.value,
    password:spassword.value,
}
dashA.splice(change,1,studentDetails2)
display()
localStorage.setItem('dashborad',JSON.stringify(dashA))
secod.innerHTML=""
}
function showAlert(msg, className){
alertmsg.innerText=msg
alertmsg.className= className
}