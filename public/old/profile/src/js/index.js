var BASE_URL_HTTPS = "https://squash-social.herokuapp.com/"
var USER_DIRECT = "user/info/user/username"
var USERNAME_SELECT = 2;

//  Html Elements
var profile_image = document.getElementById('user_profile_image')
var username_text = document.getElementById('username_text')
var txt_following = document.getElementById('txt_following')
var txt_followers = document.getElementById('txt_followers')
var name_user = document.getElementById('name_user')
var joined_date = document.getElementById('joined_date')
var bio_user = document.getElementById('bio_user')

/*
var j = {
    "name_user": "Kauã Lima",
    "username": "kaualima",
    "email": "kauavitorioof@gmail.com",
    "status": 1,
    "profile_image": "https://firebasestorage.googleapis.com/v0/b/squash-social.appspot.com/o/Users%2FProfile%2FUser_5_9B4mUeyqVEM3owBJ0ps2krxNDJg2?alt=media&token=70c32793-ee51-417b-ab01-4e82a1886677",
    "bio_user": "Olá 👋,  sou CEO da @squash e responsável pelo desenvolvimento do app.\nContato: contato@kauavitorio.com\nWebsite: kauavitorio.com",
    "following": "11",
    "followers": "18K",
    "joined_date": "23/07/2021",
    "verification_level": "2",
    "active": 2,
    "type_acc": "1"
}*/

try{
    var url_request = `${window.location.pathname}`;
    if(url_request.split("/").length > 2){
        var split = url_request.split("/");
        
        console.log("USERNAME -> " + split[USERNAME_SELECT])

        postData(BASE_URL_HTTPS + USER_DIRECT + "?us=" + split[USERNAME_SELECT], {})
        .then(data => {});
    }else window.location.replace("https://squash.kauavitorio.com");
    document.getElementById('profile_header_buttom').href = window.location;
}catch(error){
    window.location.replace("https://squash.kauavitorio.com");
}

// Resquest User Info in APIs
async function postData(url, data = {}) {
    const response = await fetch(url, {
        method:"POST",
        body: JSON.stringify(data)
        }).then(result => {
            result.json().then((j) => {
                console.log("Completed with result:", result.json());
                SetUserInfo(j)
            })
            .catch((e) => console.log(e))
        }).catch(err => {
            // if any error occured, then catch it here
            console.error("Error -> " +  err);
        });
    return response.json(); // parses JSON response into native JavaScript objects
}

function SetUserInfo(j){
    if(j != null && j.username != null){
        console.log("INFO -> " + Object.keys(j).length)
        document.title = j.name_user + " (@" + j.username + ") - Squash"
        profile_image.src = j.profile_image
        username_text.innerHTML = j.username
        txt_following.innerHTML = j.following
        txt_followers.innerHTML = j.followers
        name_user.innerHTML = j.name_user
        bio_user.innerHTML = j.bio_user
        var split_date = j.joined_date.split("/")
        if(split_date.length > 2){
            var date = split_date[2] + "-" + split_date[1] + "-" + split_date[0]
            joined_date.innerHTML = "Entrou em " +  new Date(date).toLocaleString('pt-BR',{month:'long', year:'numeric'})
        }
    }
}