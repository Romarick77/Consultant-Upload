
var application_root = __dirname,
    express = require("express"),
    bodyParser = require('body-parser'),
    fileUpload = require('express-fileupload'),
    models = require('./models/modelSchema');
    

var insertData = require('./models/insertData');
//var research = require('./models/researchData');

var app = express();

app.use(fileUpload());
app.use(bodyParser.json());

app.get('/api/consultant', function(req, res){
    res.sendStatus(200);   
	res.sendfile(__dirname+'/views/index.html');
});

/*app.post('/api/upload', function(req, res) {
	var sampleFile;
 
	if (!req.files) {
		res.send('No files were uploaded.');
		return;
	}
 
	sampleFile = req.files.sampleFile;
	sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
		if (err) {
			res.status(500).send(err);
		}
		else {
			res.send('File uploaded!');
		}
	});
}); */

app.post('/api/consultant', insertData.insert);

app.listen(3000);
console.log('Server running on port 3000');



