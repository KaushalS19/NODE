let eId = () => {
   var Id = [10,20,30];
    var Detail = {
        name : "Kaushal",
        email : "kaushalsojitra92@gmail.com",
    }
    setTimeout(() => {
        console.log(`My name is ${Detail.name}. My Id is ${Id[0]} and email address is ${Detail.email}.`);
    },3000);
    var Salary = 2000;
    setTimeout(() => {
        console.log(`My salary is ${Salary}.`);
    },2000);
}

eId();