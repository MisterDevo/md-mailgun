module.exports = function (from, subject, message, cb) {

  const https = require('https');
  var qs = require('querystring');

  var options = {
    hostname: 'api.mailgun.net',
    port: 443,
    path: '/v3/' + process.env.MAILGUN_DOMAIN + '/messages',
    method: 'POST',
    auth : 'api:key-' + process.env.MAILGUN_ACCESS_KEY,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  var reqMail = https.request(options, (respMail) => {
    respMail.on('data', (d) => {
      process.stdout.write(d);
      cb(respMail.statusCode);
    });
  });

  reqMail.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });

  // write data to request body
  reqMail.write(qs.stringify({
          from: from + '<postmaster@' + process.env.MAILGUN_DOMAIN + '>',
          to: 'MisterDevo <mister.devo@gmail.com>',
          subject: subject,
          text: message
        }));

  reqMail.end();
}
