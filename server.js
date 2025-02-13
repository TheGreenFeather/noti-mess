import express from 'express';
import { createServer } from 'http';
import { SMTPClient } from 'emailjs';
import cors from 'cors';
import bodyParser from 'body-parser';

const port = 3000;

const app = express();
const httpServer = createServer(app);

const client = new SMTPClient({
	user: 'idkmaybeken@gmail.com',
	password: 'frrr dcst aolr qjxq',
	host: 'smtp.gmail.com',
	ssl: true,
});

app.use(bodyParser.json());
app.use(cors())

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.get('/api', (req, res) => {
//   res.send('Hello World');
// });

// app.get('/api/email-notify', (req, res) => {
//   res.send('Hello World');
// });

app.post('/api/email-notify', (req, res) => {
	const data = req.body;
  client.send(
    {
      text: data.text,
      from: data.from,
      to: data.to,
      subject: data.subject,
    },
    (err, message) => {
      if (err) res.send(JSON.stringify(err));
      res.send(JSON.stringify(message));
    }
  );
	
	
});

httpServer.listen(port, () => {
	console.log('server is running at', httpServer.address().port);
});