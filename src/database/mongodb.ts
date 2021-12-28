import mongoose from "mongoose";

export default (databaseUri: string) => {
  const connect = () => {
    mongoose
      .connect(databaseUri)
      .then(() => {
        return console.info(`Successfully connected to MongoDB`);
      })
      .catch((err: Error) => {
        console.error(`Error connecting to database : ${err.message}`);
        console.error(`Unsuccessfully connecting to MongoDB`);

        return process.exit(1);
      });
  };

  connect();
};
