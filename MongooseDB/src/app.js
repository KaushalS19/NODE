const async = require("hbs/lib/async");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/SKN")
  .then(() => {
    console.log("Connection is Established Successfully.....");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    lowercase : true,
    trim : true,
    enum : ["mobile","ac","tv"]  , // enum is like the selective list which contain some amount of data and if that data doesn't match then it will give validation fail error code.
    minlength:2,

  },
  Price: Number,
  Qty: Number,
  Availability: Boolean,
  Mf_Date: {
    type: Date,
    default: Date.now(),
  },
});

const productList = mongoose.model("productList", productSchema);

const addProduct = async () => {
  try {
    const mobile = new productList({
      Name: "Apple iphone 13",
      Price: 72000,
      Qty: 03,
      Availability: true,
    });

    const result = await mobile.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

addProduct();

const addAllProducts = async () => {
  try {
    const AC = new productList({
      Name: "LG smart AC",
      Price: 40000,
      Qty: 01,
      Availability: true,
    });
    const iPad = new productList({
      Name: "iPad Air",
      Price: 30000,
      Qty: 01,
      Availability: true,
    });
    const iMac = new productList({
      Name: "iMac 2022",
      Price: 130000,
      Qty: 01,
      Availability: true,
    });

    const result = await productList.insertMany([AC, iPad, iMac]);
  } catch (error) {
      console.log(error);
  }
};

// addAllProducts();

const viewData = async (_id) => {
    try {
        const result = await productList.find({_id});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// viewData("6281dca332af83691c4f83ab");

const viewQueryData = async () => {
    try {
        const result = await productList.find({Price : {$gte:60000}})
        .select({Name:1,Qty:1})
        .sort({Name : 1})
        .limit(10);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// viewQueryData();

const deleteData = async() => {
    try {
       // const result = await productList.deleteMany({Name : "Apple iphone 12"});
       const result = await productList.findByIdAndDelete("6281dca332af83691c4f83ab");

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// deleteData();


const updateData = async() => {
    try {
        const result = await productList.updateOne({Name : "LG smart AC"},{Price : 42000});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// updateData();



