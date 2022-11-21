var inputname = document.getElementById("name")
var btnCriar = document.getElementById(btnCriar)

var userphoto = document.getElementById("userphoto")
var userName = document.getElementById("userName")
var userLocation = document.getElementById("userLocation")
var userBio = document.getElementById("userBio")
var userLink = document.getElementById("userLink")

btnCriar.addEventListener("click", () => {
    
   fetch(`https://api.github.com/user/${inputname}`)
    .then((Response) => Response.json())
    .then((data)=>{
       userphoto.setAttribute("src",data.avatar_url)
       userLink.setAttribute("href", data.html_url)
       userName.innerHTML = data.userName
       userBio.innerHTML = data.userBio
       userLocation.innerHTML = data.
       
    });
}); 