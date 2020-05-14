const Alexa = require('ask-sdk-core');
const express = require('express');
const { ExpressAdapter } = require('ask-sdk-express-adapter');

const verifier = require('alexa-verifier-middleware');

const app = express();

var alexaRouter = express.Router();

app.use('/alexa',alexaRouter);

app.use(verifier);

alexaRouter.get('/weather_info', function(req,res) {
    
});

app.listen(3000);
//const skillBuilder = Alexa.SkillBuilders.custom();
//const skill = skillBuilder.create();

//const adapter = new ExpressAdapter(skill, true, true);
//verifier(cert_url)
//app.post('/', adapter.getRequestHandlers());

//app.listen(3001);