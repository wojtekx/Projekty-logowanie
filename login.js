
const users = [
    {
        login: "admin",
        password: "admin"
    },
    {
        login: "wojtek",
        password: "kogut"
    },

]

$(document).ready(function () {
    localStorage.removeItem('user');
});
function checkUsers(e) {
    e.preventDefault();
    const user = {
        login: $('#inputLog').val(),
        password: $('#inputPass').val()
    }
    const findUser = users.find(u => u.login === user.login)
    if (findUser) {
        if (user.password === findUser.password) {
            localStorage.setItem('user', user.login);
            window.location.href = 'newProject.html';
        }
        else {
            $('#wrong').html('Niepoprawne haslo')
        }

    }
    else {
        $('#wrong').html('Niepoprawny login lub haslo')
    }

};

