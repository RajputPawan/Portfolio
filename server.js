// Load environment variables if .env file exists
try {
  require('dotenv').config();
} catch (e) {
  // dotenv is optional, continue without it
}

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Debug: Log views directory
console.log('Views directory:', path.join(__dirname, 'views'));
console.log('Templates directory:', path.join(__dirname, 'templates'));

// Set up Handlebars view engine with custom helpers
const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: [
    path.join(__dirname, 'views/partials')
  ],
  helpers: {
    eq: function (a, b) {
      return a === b;
    }
  }
});

// Debug: Check if views exist
const viewsDir = path.join(__dirname, 'views');
console.log('Views directory exists:', fs.existsSync(viewsDir));
if (fs.existsSync(viewsDir)) {
  console.log('Files in views directory:', fs.readdirSync(viewsDir));
}

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', [
  path.join(__dirname, 'views'),
  path.join(__dirname, 'templates')
]);

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  console.log('Rendering home page');
  res.render('home', {
    title: 'Home',
    active: 'home',
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  console.log('Rendering about page');
  res.render('about', {
    title: 'About',
    active: 'about',
    currentYear: new Date().getFullYear()
  });
});

// 404 handler
app.use((req, res, next) => {
  console.log(`404: ${req.originalUrl}`);
  res.status(404).render('404', {
    title: 'Not Found',
    active: '',
    currentYear: new Date().getFullYear()
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Available routes:');
  console.log(`- http://localhost:${PORT}/`);
  console.log(`- http://localhost:${PORT}/about`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ Error: Port ${PORT} is already in use!`);
    console.error(`   Try using a different port: PORT=3001 node server.js\n`);
  } else {
    console.error('\n❌ Server error:', err.message);
  }
  process.exit(1);
});

module.exports = app;
