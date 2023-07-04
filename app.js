window.addEventListener("load", function () {
    console.log(localStorage.getItem("loginUser"))
    var userLogin = localStorage.getItem("loginUser")
    if (userLogin) {
        window.location.replace("./dashboard.html")
    }

})

function signup(){
    window.location.href = "./signup.html";
}
function login(){
    window.location.href = "./index.html";
}





function register(){
    var Name = document.getElementById("Name").value
    var Email = document.getElementById("Email").value
    var Number = document.getElementById("Number").value
    var Password = document.getElementById("Password").value


    var user = {
        Name,
        Email,
        Number,
        Password,
    }
      var getuser = JSON.parse(localStorage.getItem("user"))
    if (getuser === null) {
        var arr = []
        arr.push(user)
        localStorage.setItem("user", JSON.stringify(arr))
        alert("user signup")
        window.location.href = "./index.html"
    } else {
        var findUser = getuser.find(function (value) {
            if (value.Email === Email) {
                return true
            }
        })

        if (findUser === undefined) {
            getuser.push(user)
            localStorage.setItem("user", JSON.stringify(getuser))
            alert("User Signup")
            window.location.href = "./index.html"
        } else {
            alert("Email alredy taken")
        }
    }
}



function login() {
    var email = document.getElementById("Email").value
    var password = document.getElementById("Password").value

    var getUser = JSON.parse(localStorage.getItem("user"))

    var user = getUser.find(function (value) {
        if (value.email === email && value.password === password) return true
    })

    if (user !== -1) {
        alert("successfully login")
        localStorage.setItem("loginUser", JSON.stringify(user))
        window.location.replace("./dashboard.html")
    } else {
        alert("email OR password does not match")
    }
}