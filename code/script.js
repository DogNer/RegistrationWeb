window.onload = function() {
    var JSONData = JSON.parse(localStorage.getItem('JSONData')) || [{
        "name": "",
        "email": "",
        "password": ""
    }];

    console.log(JSONData);

    document.getElementById('btnSubmit').addEventListener('click', function(event) {
        try {
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let pass = document.getElementById('password').value;
            let pass2 = document.getElementById('passwordConfirm').value;

            if (name == "" || email == "" || pass == "" || pass2 == "") {
                throw new Error("Please fill out all fields");
            }

            if (pass != pass2) {
                throw new Error("Passwords do not match");
            }

            JSONData.push({
                "name": name,
                "email": email,
                "password":  pass
            });

            localStorage.setItem('JSONData', JSON.stringify(JSONData));
        }
        catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    });
};