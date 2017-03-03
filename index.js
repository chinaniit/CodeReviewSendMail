const sendMailer = require('./sendMailer.js');
const manFinder = require('./manFinder.js');
const mustache = require('mustache');
const fs = require('fs');

let mailTemplate = fs.readFileSync(__dirname + '/mailTemplate.html', "utf-8");
let viewModel = {
    manFinder: manFinder
};
let content = mustache.render(mailTemplate, viewModel);

let mailSuffix = sendMailer.emailSuffix;
let tos = [];
for(let item of manFinder.all){
    tos.push(item + mailSuffix);
}

sendMailer.send({
    text:content,
    to: tos
});