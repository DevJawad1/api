var alldetails=[]
if(localStorage.localStudent){
    var olddata=JSON.parse(localStorage.getItem('localStudent'))
     alldetails=olddata
}
function submit(){
   var studentDetails={
       firstname:user.value,  
       level:age.value,
       gmail:clas.value,
       password:gender.value,
   }
   if(user.value=="" || age.value=="" || clas.value=="" ||gender.value==""){
       ptag.innerHTML="Please fill all field"
       ptag.style.textAlign="center"
       showAlert('Please fill all field','alert alert-danger mt-3')
           setTimeout(()=> {
               showAlert('','')
           },3000)
   }   
   else{
    alldetails.push(studentDetails)
    localStorage.setItem('localStudent',JSON.stringify(alldetails))
    display()    
    user.value=""
    age.value=""
    clas.value=""
    gender.value=""

    location.href="signin.html"
 }

}

function display(){
    alert('you must remember your pin')
}
function remove (takeaway){
   var yes=confirm("Are you sure of this process")
   if(yes==true){
    alldetails.splice(takeaway,1)
    display()
   }
  else{
    display()
  }
}
function edit(userindex){
    secod.innerHTML=` 
    <input type="text" name="" id="sname">
    <input type="text" name="" id="sage">
    <input type="text" name="" id="sclass">
    <input type="text" name="" id="sgender">
    <button onclick="update(${userindex})">Update</button>`
    
    sname.value=alldetails[userindex].firstname
    slevel.value=alldetails[userindex].age
    sgmail.value=alldetails[userindex].class
    spassword.value=alldetails[userindex].gender
  
}
function update(change){
    var studentDetails2={
        firstname:sname.value,
        age:sage.value,
        class:sclass.value,
        gender:sgender.value,
    }
    alldetails.splice(change,1,studentDetails2)
    display()
    secod.innerHTML=""
}
function showAlert(msg, className){
    alertmsg.innerText=msg
    alertmsg.className= className
}
function deleteall(){
    var yes=confirm("Are you sure of this process")
    if(yes==true){
     alldetails.splice(0,alldetails.length)
     display()
    }
   else{
     display()
   }
}