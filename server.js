const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let latestFeed = {
  updatedAt: null,
  source: "No live feed connected",
  events: []
};

app.get("/api/odds", (req, res) => {
  res.json(latestFeed);
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Scanner running on port ${PORT}`);
});
