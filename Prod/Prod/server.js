const dotenv = require("dotenv")
dotenv.config()
const https = require('https');

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');

const serverPort = process.env.REACT_APP_SERVER_PORT || 5000; 


const app = express();
app.use('*', cors());
app.use(express.json());
app.use('/', router);
// const IP = require('ip');

app.get('/', (req, res) => {
    // const ipAddress = IP.address();
    // res.send(ipAddress)
    res.json('Server is running on port 5000');
	console.log(request);
    response.setHeader("Content-Type", "application/json");
    response.send({ statusCode: 200, customMessage: 'Success', status: true });
	
})



var transport = {
    host: process.env.REACT_APP_HOST,
	port: process.env.REACT_APP_PORT,
    secure: true,
    auth: {
		user: process.env.REACT_APP_USER,
		pass: process.env.REACT_APP_PASS,
    },

	tls: {
		secure: false,
		ignoreTLS: true,
		rejectUnauthorized: false
	}
};

var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take messages');
	}
});

router.post('/api/send', async (req, res, next) => {
	var name = req.body.name;
	var email = req.body.email;
    var phone = req.body.phone;
	var subject = req.body.subject;
	var message = req.body.message;
	var senderEmail = `${name} <${process.env.REACT_APP_EMAIL}>`;
	var yourEmail = `${process.env.REACT_APP_YOURNAME} <${process.env.REACT_APP_EMAIL}>`;
	var content = `name: ${name} \n email: ${email} \n phone: ${phone} \n subject: ${subject} \n message: ${message} `;
	var mail = {
		from: senderEmail,
		to: process.env.REACT_APP_EMAIL, // This is email address where you will receive messages
		subject: `New Portfolio Message from ${name}`,
		text: content,
	};

	await new Promise((resolve, reject) => {
	transporter.sendMail(mail, (err, data) => {
		console.log(err);
		console.log(data);
		if (err) {
			res.json({
				status: 'fail',
			});
		} else {
			res.json({
				status: 'success',
			});

			//Send Auto Reply email
			transporter.sendMail(
				{
					from: yourEmail,
					to: email,
					subject: 'Message received',
					text: `Hi ${name},\nThank you for sending me a message. I will get back to you soon.\n\nBest Regards,\n${process.env.REACT_APP_YOURNAME}\n${process.env.REACT_APP_YOURSITE}\n\n\nMessage Details\nName: ${name}\n Email: ${email}\n Phone: ${phone}\n Message: Subject: ${subject}\n ${message}`,
					html: `<p>Hi ${name},<br>Thank you for sending me a message. I will get back to you soon.<br><br>Best Regards,<br>${process.env.REACT_APP_YOURNAME}<br>${process.env.REACT_APP_YOURSITE}<br><br><br>Message Details<br>Name: ${name}<br> Email: ${email}<br> Phone: ${phone}<br> Subject: ${subject}<br> Message: ${message}</p>`,
				},
				function (error, info) {
					if (error) {
						console.log(error);
					} else {
						console.log('Message sent: ' + info.response);
					}
				}
			);
		}
	});
});
});

//For testing locally
// app.listen(serverPort,  () =>
// 	console.log(`backend is running on port ${serverPort}`)
// );

// random port address
// let server = http.createServer(app);
// server.listen(0, () => {
//     console.log(server.address())
// })

const httpsServer = https.createServer(
    {
        key: fs.readFileSync(
            'key.pem'
        ),
        cert: fs.readFileSync(
            'cert.pem'
        ),
    },
    app
);

httpsServer.listen(serverPort, () =>
    console.log(`backend is running on port ${serverPort}`)
);