const sendMailer = require('./sendMailer.js');
const manFinder = require('./manFinder.js');
const mustache = require('mustache');
const fs = require('fs');

let mailTemplate = fs.readFileSync('./mailTemplate.html', "utf-8");
let viewModel = {
    manFinder: manFinder
};
let content = mustache.render(mailTemplate, viewModel);
console.log(viewModel);
console.log(content);
sendMailer.send({
    text:content
});