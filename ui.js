class UI{
    constructor(){
        this.profile = document.querySelector ('#profile')
    }
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
            <span class="badge badge-info mb-3">Following: ${user.following}<span>
            <br><br>        
            </div>  
        </div>
      </div>`
    }
}