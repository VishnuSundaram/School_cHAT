function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "room.html";
}

function teacher()
{
    window.location = "teacher_login.html";
}

function logout()
{
    window.location = "login.html";
}