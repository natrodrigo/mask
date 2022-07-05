const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json()

const app = express();

const PORT = 5000 || process.env.PORT;
const HOST = '0.0.0.0';

app.use(cors())

app.post('/mascara', jsonParser, (req, res) => {

    res.json({ "result": mascara(req.body.mask,req.body.num)})

})


function mascara(mask,num){
    mask = mask.toString()
    num = num.toString()

    let result = ''
    for (let i=0,j=0; i < mask.length; i++){
        if(mask[i] == '#' && num[j] != undefined){
            result += num[j]
            j++;
        }
        else if(num[j] == undefined){
            //pass
        }
        else result += mask[i]
    }
return result
}

app.listen(PORT, HOST);