const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Setup static directory to serve your HTML, CSS, and assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve main portfolio dashboard from the public folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle real-time contact form inputs
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Evaluators can see incoming data logged cleanly in the backend console terminal
    console.log(`============= NEW PORTFOLIO CONTACT =============`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Message: ${message}`);
    console.log(`=================================================`);

    res.status(200).json({ 
        success: true, 
        msg: `Thanks for reaching out, ${name}! Your message was successfully routed through Node.js.` 
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Bhoomika's Portfolio Server spinning up on port ${PORT}`);
    console.log(`🌐 Open http://localhost:${PORT} in your browser!`);
});
