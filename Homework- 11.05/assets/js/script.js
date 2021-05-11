$(document).ready(function () {
    let loginData = {
        userName: "Sevda-HHH",
        pass: "Code2017A"
    }
    console.log(loginData)

    console.log(JSON.stringify(loginData))
    fetch("https://randomuser.me/api/").then(res => {
        return res.json();
    })
        .then(r => {
            var user = r.results[0]
            logInData = {
                userName: user.login.username,
                pass: user.login.password
            }
            sessionStorage.setItem("user", JSON.stringify(logInData))
            $("#usrName b").text(user.login.username);
            $(".imgProfile").attr("src", user.picture.large)
            var result = `  <li id="userName"> ${user.login.username} </li>
            <li>${user.name.title}. ${user.name.first}</li>
            <li> ${user.name.last} </li>
            <li">${user.phone} </li>
            <li>${user.gender} </li>`
            $("#personlaData").append(result)
            return logInData
        })
        .then(
            res => {
                $(".loginbtn").click(function signInCheck() {
                    var passwordd = $("#usrPass").val();
                    var usernamee = $("#usrName").val();
                    console.log(passwordd)
                    console.log(usernamee)
                    console.log(res.userName)
                    console.log(res.pass)
                    if (passwordd.toLowerCase() == res.pass.toLowerCase() && usernamee.toLowerCase() == res.userName.toLowerCase()) {
                        window.location = "file:///C:/Users/OMEN/Desktop/Homework-%20May%2011/11-05-2021-Sevda-HHH/Homework-%2011.05/index.html"
                    }
                })

            }

        )


    // console.log("obn")
    // $(".loginbtn").click(function () {
    //     var userName = $("#usrName").val()
    //     var userPass = $("#usrPass").val()
    //     console.log(userName + " " + userPass)
    // })

})