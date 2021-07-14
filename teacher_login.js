function addTeacher()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "teacher_room.html";
}

function logout()
{
    window.location = "login.html";
}