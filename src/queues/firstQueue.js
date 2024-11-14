function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default {
  name: "myFirstQueue",
  async job(job) {
    // console.log(job);
    console.log("jobId:", job.id);
    console.log("jobName:", job.name);
    console.log("jobData:", job.data);
    job.updateProgress(0);
    await sleep(1000);
    job.updateProgress(20);
    await sleep(1000);
    // if (Math.random() > 0.25) {
    //   throw new Error("random > 0.25");
    // }
    job.updateProgress(40);
    await sleep(1000);
    job.updateProgress(60);
    await sleep(1000);
    job.updateProgress(80);
    await sleep(1000);
    job.updateProgress(100);
  },
};
