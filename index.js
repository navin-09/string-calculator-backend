const express = require("express");
const app = express();
const calculator = require("./calculator");
app.use(express.text());

app.post("/add", (req, res) => {
  try {
    const sum = calculator.add(req.body);
    res.status(200).send(sum.toString());
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
