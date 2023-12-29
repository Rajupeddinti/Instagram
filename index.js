
var random = Math.floor(Math.random() * 10+5)
document.querySelector('.posts').innerHTML = random
document.querySelector('.followers').innerHTML = Math.floor(Math.random()*1000+150)
document.querySelector('.following').innerHTML = Math.floor(Math.random()*150+2)
fetch('https://randomuser.me/api/').then(Response=>{
    Response.json().then (data=>{
       let user = data.results[0];
       console.log(user)
       document.querySelector('.profileName').innerHTML = user.name.first
       document.querySelector('.bioName').innerHTML = user.name.first+' '+user.name.last 
       document.querySelector('.profilePic').src = user.picture.medium
       document.querySelector('.city').innerHTML = user.location.city
       document.querySelector('.dateofBirth').innerHTML = user.dob.date

       for(let i =1 ;i<random;i++){
        let img = document.createElement('img')
        img.src = "https://picsum.photos/9"+i;  
        document.querySelector('.postsRaju').append(img);
       }
        
    });
})