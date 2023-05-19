var local=JSON.parse (localStorage.getItem('localStudent', JSON.parse))
var storage=localStorage.setItem('myStorage',local)
console.log(local)

function submit(){
   var score=passWord.value
   var mailing=mail.value
   var found=false
   for (let index = 0; index < local.length; index++) {
    if(passWord.value==local[index].password && mail.value==local[index].gmail){
        window.location.href="dash.html"
        found=true
        break;
    }
    if(found==true){
        // showAlert('Correct','alert alert-success mt-3')
        // setTimeout(()=> {
        //     showAlert('','')
        // },3000)
    }
    else{
        showAlert('Wrong details','alert alert-danger mt-3')
        setTimeout(()=> {
            showAlert('','')
        },3000)
    }
  }
}
function showAlert(msg, className){
    alertmsg.innerText=msg
    alertmsg.className= className
}