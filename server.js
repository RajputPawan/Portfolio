const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// View engine configuration
const viewsPath = path.join(__dirname, 'views');
const partialsPath = path.join(viewsPath, 'partials');
const layoutsPath = path.join(viewsPath, 'layouts');

const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: layoutsPath,
  partialsDir: partialsPath,
  helpers: {
    year: () => new Date().getFullYear(),
    eq: (left, right) => left === right
  }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Static assets
app.use(express.static(path.join(__dirname, 'public')));

// Shared page data
const siteMeta = {
  name: 'ZTDGCX',
  title: 'DevOps & Cloud Engineer',
  description: 'Building reliable infrastructure, automation pipelines, and delightful user experiences.'
};

const projectList = [
  {
    name: 'Cloud Native Observability',
    tech: ['Grafana', 'Prometheus', 'Helm'],
    summary: 'Designed a unified observability stack for Kubernetes clusters with multi-region failover.'
  },
  {
    name: 'GitOps Deployment Platform',
    tech: ['ArgoCD', 'Terraform', 'AWS'],
    summary: 'Implemented a GitOps workflow that reduced deployment lead time by 70%. '
  },
  {
    name: 'Self-Healing CI/CD',
    tech: ['GitHub Actions', 'Docker', 'Python'],
    summary: 'Created reusable CI/CD pipelines with automated rollbacks and infrastructure checks.'
  }
];

const contactLinks = {
  email: 'mailto:hello@example.com',
  github: 'https://github.com/ZTDGCX',
  linkedin: 'https://www.linkedin.com/in/sample-profile'
};

// Routes
app.get('/', (req, res) => {
  res.render('home', {
    page: 'home',
    siteMeta,
    hero: {
      heading: 'Hi, I am ' + siteMeta.name,
      subheading: siteMeta.title,
      ctaPrimary: {
        label: 'View Projects',
        href: '/projects'
      },
      ctaSecondary: {
        label: 'Get in touch',
        href: '/contact'
      }
    },
    skills: [
      {
        title: 'Automation & IaC',
        description: 'Terraform, Ansible, Pulumi, and reusable module design.'
      },
      {
        title: 'CI/CD at Scale',
        description: 'GitHub Actions, GitLab CI, Jenkins, and container registries.'
      },
      {
        title: 'Cloud Platforms',
        description: 'AWS, Azure, and GCP with cost visibility and governance.'
      }
    ]
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    page: 'about',
    siteMeta,
    timeline: [
      {
        title: 'Senior DevOps Engineer',
        org: 'Innovatech Labs',
        period: '2023 — Present',
        details: 'Leading platform reliability and defining SRE practices for a 40+ microservice architecture.'
      },
      {
        title: 'Cloud Engineer',
        org: 'Nimbus Solutions',
        period: '2020 — 2023',
        details: 'Migrated legacy workloads to AWS, introduced Infrastructure as Code, and built release automation.'
      }
    ]
  });
});

app.get('/projects', (req, res) => {
  res.render('projects', {
    page: 'projects',
    siteMeta,
    projects: projectList
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    page: 'contact',
    siteMeta,
    contact: contactLinks
  });
});

app.use((req, res) => {
  res.status(404).render('404', {
    page: '404',
    siteMeta
  });
});

function startServer(port = PORT) {
  return app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Portfolio site running on http://localhost:${port}`);
  });
}

if (require.main === module) {
  startServer();
}

module.exports = { app, startServer };
