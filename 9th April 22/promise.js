const empId = new Promise((resolve, reject) => {
  setTimeout(() => {
    var eId = [10, 20, 30, 40, 50];
    resolve(eId);
    // reject("err");
  }, 2000);
});

const empDetail = () => {
  return new Promise((resolve, reject) => {
    setTimeout((eId) => {
      var eDetail = {
        name: "Kaushal",
        email: "kaushalsojitra92@gmail.com",
      };
      console.log(
        `my Id is ${eId} and name is ${eDetail.name} and email is ${eDetail.email}`
      );
    });
  });
};

empId
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
