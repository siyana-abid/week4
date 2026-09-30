function login() {

    return new Promise(function(resolve, reject) {

        let isSuccess = true;

        if (isSuccess) {
            resolve("Login successful");
        } else {
            reject("Login failed");
        }
    });
}

login()
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });