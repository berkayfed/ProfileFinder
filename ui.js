class UI {
    constructor(){
        this.alert = document.querySelector("#alert")
        this.profileContainer = document.querySelector("#profileContainer")
    }

    showProfile(profile){
        this.profileContainer.innerHTML = `
        
        <div class = "card card-body">
             <div class="row">
                <div class = "col-md-3">
                    <a href = "https://placeholder.com/">
                    <img src= "https://via.placeholder.com/350x150" class="img-thumbnail"></a>

                 </div>

             </div>
            <div class="mol-md-9>
                <h4>Contact</h4>
                <ul class="list-group">
                   <li class="list-group-item">
                   name: ${profile.name}
                   </li>
                   <li class="list-group-item">
                   usarname: ${profile.usarname}
                   </li>
                   <li class="list-group-item">
                   email:${profile.email}
                   </li>
                   <li class="list-group-item">
                   adress:${profile.address.street}
                   ${profile.address.street}
                   ${profile.address.city}
                   ${profile.address.zipcode}
                   </li>
                   <li class="list-group-item">
                   website:${profile.website}
                   </li>
                   

                </ul>
            </div>
        </div>
        
        
        `
    }

    showAlert(text){
        this.alert.innerHTML = `${text} is not found.`
    }
    clear(){
        this.profileContainer.innerHTML="";
        this.alert.innerHTML="";
    }
}