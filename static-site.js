// This script will generate a static version of your site
const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Copy all static files to public directory
const staticDirs = ['css', 'js', 'images', 'assets'];
staticDirs.forEach(dir => {
  const src = path.join(__dirname, dir);
  if (fs.existsSync(src)) {
    // Copy directory recursively
    const dest = path.join(publicDir, dir);
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    // Copy files (simplified example)
    // In a real scenario, you'd want to use a proper file copy function
  }
});

// Create a simple index.html for GitHub Pages
const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pawan Rajput - DevOps Portfolio</title>
  <meta http-equiv="refresh" content="0; url='https://your-vercel-or-netlify-url.com'" />
</head>
<body>
  <p>Redirecting to portfolio... <a href="https://your-vercel-or-netlify-url.com">Click here if not redirected</a></p>
</body>
</html>
`;

fs.writeFileSync(path.join(publicDir, 'index.html'), indexHtml);

console.log('Static site generated in /public');
