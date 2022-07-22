const empDetail = new Promise((resolve, reject) => {
    
      const myDetail = {
        Id: 10,
        name: "Kaushal Sojitra",
        email: "kaushalsojitra92@gmail.com",
        salary: 20000,
      };
      var bio = `My Employee Id is ${myDetail.Id}, name is ${myDetail.name}, email id is ${myDetail.email} and Salary is ${myDetail.salary}.`;
    //   resolve(bio);
      var err = "Sorry, Something went wrong....";
      reject(err);
 
  });
  
const result = async () =>{
    try{
        const data = await empDetail;
        console.log(data);
    } catch (err){
        console.log(err);
    }
}
  
result();