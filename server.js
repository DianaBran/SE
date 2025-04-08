const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/smartphone_finder.html");
});


// Route to handle form submission
app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log(formData); // Log the received data to the console (for demonstration)

    // Here you can process and save the formData as needed

    res.send('Data received');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
