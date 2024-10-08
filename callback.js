console.log("all done for now");

function register(callback) {
  setTimeout(() => {
    console.log("regiseter is done");
    callback();
  }, 1000);
}

function sendEmail(callback) {
  setTimeout(() => {
    console.log("send Email done");
    callback();
  }, 5000);
}

function login(callback) {
  setTimeout(() => {
    console.log("login is done");
    callback();
  }, 3000);
}

function UserData(callback) {
  setTimeout(() => {
    console.log("user data is done");
    callback();
  }, 1000);
}

function Display() {
  setTimeout(() => {
    console.log("display data is done");
  }, 1000);
}

//callback hell
register(() => {
  sendEmail(() => {
    login(() => {
      UserData(() => {
        Display();
      });
    });
  });
});
