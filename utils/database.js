import mongoose from "mongoose";

export const connectToDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "yt_to_gpt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

// import mongoose from "mongoose";

// let isConnected = false; // track the connection

// export const connectToDB = async () => {
//   mongoose.set("strictQuery", true);

//   if (isConnected) {
//     console.log("MongoDB is already connected");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "yt_to_gpt",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     isConnected = true;

//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error);
//   }
// };
