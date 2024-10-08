function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("regiseter is done");
      resolve("success!!");
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   return reject("something went wrong");
      console.log("send Email done");
      resolve();
    }, 5000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login is done");
      resolve();
    }, 3000);
  });
}

function UserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("get user data");
      resolve();
    }, 1000);
  });
}

function Display() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("display data is done");
      resolve();
    }, 1000);
  });
}

//callback hell
// register(() => {
//   sendEmail(() => {
//     login(() => {
//       UserData(() => {
//         Display();
//       });
//     });
//   });
// });

// register().then(sendEmail).then(login).then(UserData).then(Display);

//async await
async function main() {
  try {
    const message = await register();

    await sendEmail();
    await login();
    await UserData();
    await Display();
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

main()
  .then(() => {
    console.log("all set!!");
  })
  .catch((err) => {
    console.log(err);
  });

console.log("all done for now");

// main()
//   .then(() => {
//     console.log("all done for now");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
