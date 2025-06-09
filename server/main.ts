import express from "express";

const app = express();

app.use(express.static("app"));
app.listen(8080, () => {
  console.log(`localhost:8080 is running`);
});
