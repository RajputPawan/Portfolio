# Pawan Rajput - DevOps Portfolio

![GitHub Actions](https://github.com/RajputPawan/Portfolio/actions/workflows/python-app.yml/badge.svg)
[![codecov](https://codecov.io/gh/RajputPawan/Portfolio/branch/main/graph/badge.svg?token=YOUR_CODECOV_TOKEN)](https://codecov.io/gh/RajputPawan/Portfolio)

Welcome to my professional portfolio website! This project showcases my skills, projects, and experience as a DevOps Engineer.

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **CI/CD Pipeline**: Automated testing and deployment with GitHub Actions
- **Project Showcase**: Highlighting key projects and technologies
- **Contact Form**: Easy way to get in touch

## 🚀 Getting Started

### Prerequisites

- Python 3.9 or higher
- pip (Python package manager)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/RajputPawan/Portfolio.git
   cd Portfolio
   ```

2. **Create a virtual environment**
   ```bash
   # On Windows
   python -m venv venv
   .\venv\Scripts\activate
   
   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the development server**
   ```bash
   python app.py
   ```

5. **Open your browser**
   Visit `http://127.0.0.1:5000` to view your portfolio locally.

## 🛠️ Technologies Used

- **Backend**: Python, Flask
- **Frontend**: HTML5, Tailwind CSS, JavaScript
- **DevOps**: GitHub Actions, Docker
- **Testing**: pytest, Codecov

## 📦 CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The workflow includes:

1. **Build**: Set up Python and install dependencies
2. **Lint**: Check code quality with flake8
3. **Test**: Run unit tests with pytest and generate coverage reports
4. **Deploy**: (Optional) Deploy to Vercel or your preferred hosting service

### Setting Up GitHub Actions

1. **Fork this repository** to your GitHub account
2. **Enable GitHub Actions** in your repository settings
3. **Add secrets** (if needed for deployment):
   - `VERCEL_TOKEN`: For Vercel deployment
   - `CODECOV_TOKEN`: For code coverage reporting

## 🧪 Running Tests

```bash
# Install test dependencies
pip install -r requirements.txt

# Run tests
pytest

# Run tests with coverage report
pytest --cov=.
```

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Other Platforms

This application can be deployed to any platform that supports Python applications, such as:
- Heroku
- PythonAnywhere
- AWS Elastic Beanstalk
- Google App Engine

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- GitHub: [@RajputPawan](https://github.com/RajputPawan)
- LinkedIn: [Pawan Rajput](https://www.linkedin.com/in/pawan-rajput-b3918a251)
- Email: pawan.rajput@example.com