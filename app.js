// Init
const github = new GitHub,
      ui = new UI

// Search Input
const searchUser = document.querySelector("#searchUser");

// Search Input Event Listener
searchUser.addEventListener("submit", (e) => {
  // Get User Text
  const UserText = e.target.value;
  if(UserText !== ''){
    //make http call
    github.getUser(UserText)
    .then(data=>{
        if (data.profile.message === 'Not Found') {
            // show alert
           
        } else {
           //show profile 
           ui. showProfile(data.profile)
        }
    })
  }
  else{
      //clear profile

  }


});
