const express = require("express");
const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "healthy" }));

app.get("/greet", (req, res) => {
  const name = req.query.name || "World";
  res.json({ message: `Hello, ${name}!` });
});

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => console.log(`Server listening on ${port}`));
}

module.exports = app;
