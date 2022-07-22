const eId = () => {
  setTimeout(() => {
    var eId = [10, 20, 30, 40, 50];
    // console.log(eId);
    setTimeout(
      (indexNumber) => {
        var eDetail = {
          name: "Kaushal",
          email: "kaushalsojitra92@gmail.com",
        };
        console.log(
          `my Id is ${indexNumber} and name is ${eDetail.name} and email is ${eDetail.email}`
        );

        setTimeout(
          (name) => {
            console.log(`my Name is ${eDetail.name} and My Salary is 9000`);
          },
          2000,
          eDetail.name
        );
      },
      2000,
      eId[2]
    );
  });
};

eId();
