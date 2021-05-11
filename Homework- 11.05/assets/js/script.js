$(document).ready(function () {

    fetch("https://randomuser.me/api/").then(res => {
        return res.json();
    })
        .then(r => {
            var user = r.results[0];
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
            sessionStorage.setItem("userInfo", JSON.stringify(user))
            return logInData
        })
        .then(
            res => {
                $(".loginbtn").click(function () {
                    if ($("#usrPass").val().toLowerCase() == res.pass.toLowerCase() && $("#usrName").val().toLowerCase() == res.userName.toLowerCase()) {

                        window.location = "file:///C:/Users/OMEN/Desktop/Homework-%20May%2011/11-05-2021-Sevda-HHH/Homework-%2011.05/index.html"

                    }
                })
                var passs = $("#usrPass").val()
                return passs

            }
        ).then(a => {
            $("#showPass").click(function () {
                if ($(this).attr("class") == "form-check-input checked") {
                    $("#usrPass").attr("type", "password")
                    $(this).removeClass("checked")
                } else {
                    $(this).addClass("checked")
                    $("#usrPass").attr("type", "text")
                }
            })
        })
})