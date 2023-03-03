const express = require("express");
const cors = require("cors");
require("dotenv").config()
const chatRoutes = require("./routes/chat")

const {Configuration,OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_SECRET_KEY
})

const openApi = new OpenAIApi(configuration);

const app =  express();
app.use(express.json());
app.use(cors({origin: true}));

app.use("/api/v1", chatRoutes);

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Welcome to OpenApi" });
  });

  app.all("*", (req, res) => {
    res.send({
      status: false,
      messsage: "Oops! you've hit an invalid route.",
    });
  });
  
  const port = process.env.PORT || 5000;

  app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
});