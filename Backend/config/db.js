/* eslint-disable import/extensions */
import mongoose from "mongoose";
import keys from "./keys.js";
import schedule from "node-schedule";

export default async () => {
  try {
    await mongoose.connect(keys.mongoURI);
    //batch jobs
    schedule.scheduleJob("* * 1 1,4,7,9 *", async () => {
      console.log("Reset totalScore in commit db");
    });
  } catch (err) {
    console.error(err.message);
  }
};
