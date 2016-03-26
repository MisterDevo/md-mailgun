# md-mailgun
mailgun request to me

_Usage :_
```
require('md-mailgun')( from, subject, message, function (statusCode) {
    if(statusCode === 200) {
       res.send('A mail has been send to administrator');
     } else {
      res.send('Sorry ... You are not authorize to send mail');
    }
  })
````
