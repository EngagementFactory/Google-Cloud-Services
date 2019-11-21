var express = require('express')
var router = express.Router()

router.get('/classifyText', (req, res) => {
    res.send(classifyText(req.body));
})

async function classifyText(text)
{
    const language = require('@google-cloud/language');
    const client = new language.LanguageServiceClient();
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };
    return  await client.classifyText({document});
}

