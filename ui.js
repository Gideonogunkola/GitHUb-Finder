class UI{
    constructor(){
        this.profile = document.querySelector ('#profile')
    }

    //Show Profile
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="avartar" class="img-fluid mb-2">
            <a href="${user.html_url}"  target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
          
            <span class="badge badge-primary mb-3">Pulic Repos:${user.public_repos} </span>
            <span class="badge badge-secondary mb-3">Pulic Gists: ${user.public_gists}</span>
            <span class="badge badge-success mb-3">Followers: ${user.followers}</span>
            <span class="badge badge-info mb-3">Following: ${user.following}</span>
            <br><br>

            <ul class="list-group">
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Bio: ${user.bio}</li>
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
             </ul>     
            </div>  
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
      `;
    }

    //Show Alert
    showAlert(message, className){
        //clear the remaining alert
        this.clearAlert()
        //create div
        const div = document.createElement('div');
        //Add classes
        div.className = className
        //add content
        div.textContent = message
        //get parent
        const container = document.querySelector('.searchContainer');
        //get search
        const search = document.querySelector('.search');
        //inser alert
        container.insertBefore(div, search);
        setTimeout(()=>{
            this.clearAlert();
        }, 2000)
    }
 
    //clear alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    //Clear Profile
    clearProfile(){
        this.profile.innerHTML = "";
       
    }

}