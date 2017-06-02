var nodemailer = require('nodemailer');
var routes ={};
routes.login=function(req,res) {
	try
	{
    userInfo.Username = req.params.username;
    userInfo.email = req.params.email;
    userInfo.message = req.params.message;
  }
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dineshepdv@gmail.com',
      pass: 'Myth48mickey#'
    }
  });
  var subject1='hai this is '+userInfo.username+'my email id is '+userInfo.email+'thank you';
  var message=userInfo.message;
  var mailOptions = {
    from: 'dineshepdv@gmail.com',
    to: 'dinesh.gmx@gmail.com',
    subject:subject1,
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
