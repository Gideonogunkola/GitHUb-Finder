// Init
const github = new GitHub,
      ui = new UI

// Search Input
const searchUser = document.querySelector("#searchUser"),
      form = document.querySelector('#form');


// Search Input Event Listener
form.addEventListener("submit", (e) => {
  // Get User Text
  const UserText = searchUser.value;

  if(UserText !== ''){
    //make http call
    github.getUser(UserText)
    .then(data=>{
        if (data.profile.message === 'Not Found') {
            // show alert
            ui.showAlert('User not found', 'alert alert-danger')
           
        } else {
           //show profile 
           ui. showProfile(data.profile)
        }
    })
  }
  else{
      //clear profile
      ui.clearProfile()

  }

e.preventDefault()
});
