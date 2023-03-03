require("dotenv").config();
const {Configuration,OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_SECRET_KEY
})

const openai = new OpenAIApi(configuration);

exports.startChat = async function (req, res) {
    const {prompt} = req.body;
    
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
      })
      return res.status(201).send(response.data.choices[0].text);
    } catch (error) {
      return res.status(500).send(`ERROR : ${error.message}` );
    }
  };