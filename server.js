const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const path = require("path");
const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.use(express.static(__dirname + "/js"));
app.use(express.static(__dirname + "/css"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
