const express = require('express')
const cors = require('cors')
const app = express()
const OpenAI = require("openai")

app.use(express.json())
app.use(cors())


const port = 5000;
app.listen(port, () => console.log(`Earthblox app listening on port ${port}!`));

app.post('/createAssistant', async (req, res) => {
    const name = req.body.name;
    const instruction = req.body.instruction;
    const model = req.body.model;
    const description = req.body.description;
    create_req_json = {
        "name": name,
        "instruction": instruction,
        "model": model,
        "description": description,
        "response_format": { "type": "json_object" }
    }
    const openai = new OpenAI();
    const assistant = await openai.beta.assistants.create(create_req_json)
    console.log(assistant)
    res.json(assistant)
});
