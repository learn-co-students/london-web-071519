const express = require("express");
const app = express();
console.log(process.argv);
const port = process.argv[2].split("=")[1];

app.get("/", (req, res) => {
  res.json({
    hello: "yes",
    lesson: true,
    arrayOfNumbers: [1, 2, 3]
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
