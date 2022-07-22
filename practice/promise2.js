const student = new Promise((resolve,reject) => {
    setTimeout((empId) => {
        var empId  = 20;
    },2000);
    resolve(id);
});

student.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});