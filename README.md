# md-mailgun
mailgun request to me

_Usage :_
```
require('md-mailgun')( from, subject, message, function (data) {
    if(data === 'Forbidden') {
      res.send('Sorry ... You are not authorize to send mail');
    } else {
      res.send('A mail has been send to administrator');
    }
  })
````

