const fs = require('fs');
const path = require('path');
const { create } = require('express-handlebars');

const OUTPUT_DIR = path.join(__dirname, '..', 'dist');
const VIEWS_DIR = path.join(__dirname, '..', 'views');
const PARTIALS_DIR = path.join(VIEWS_DIR, 'partials');
const LAYOUTS_DIR = path.join(VIEWS_DIR, 'layouts');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const hbs = create({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: LAYOUTS_DIR,
  partialsDir: PARTIALS_DIR,
  helpers: {
    year: () => new Date().getFullYear(),
    eq: (left, right) => left === right
  }
});

const siteMeta = {
  name: 'ZTDGCX',
  title: 'DevOps & Cloud Engineer',
  description: 'Building reliable infrastructure, automation pipelines, and delightful user experiences.'
};

const pages = [
  {
    template: 'home',
    context: {
      page: 'home',
      siteMeta,
      hero: {
        heading: 'Hi, I am ' + siteMeta.name,
        subheading: siteMeta.title,
        ctaPrimary: { label: 'View Projects', href: '/projects' },
        ctaSecondary: { label: 'Get in touch', href: '/contact' }
      },
      skills: [
        { title: 'Automation & IaC', description: 'Terraform, Ansible, Pulumi, and reusable module design.' },
        { title: 'CI/CD at Scale', description: 'GitHub Actions, GitLab CI, Jenkins, and container registries.' },
        { title: 'Cloud Platforms', description: 'AWS, Azure, and GCP with cost visibility and governance.' }
      ]
    },
    output: 'index.html'
  },
  {
    template: 'about',
    context: {
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
    },
    output: 'about/index.html'
  },
  {
    template: 'projects',
    context: {
      page: 'projects',
      siteMeta,
      projects: [
        {
          name: 'Cloud Native Observability',
          tech: ['Grafana', 'Prometheus', 'Helm'],
          summary: 'Designed a unified observability stack for Kubernetes clusters with multi-region failover.'
        },
        {
          name: 'GitOps Deployment Platform',
          tech: ['ArgoCD', 'Terraform', 'AWS'],
          summary: 'Implemented a GitOps workflow that reduced deployment lead time by 70%.'
        },
        {
          name: 'Self-Healing CI/CD',
          tech: ['GitHub Actions', 'Docker', 'Python'],
          summary: 'Created reusable CI/CD pipelines with automated rollbacks and infrastructure checks.'
        }
      ]
    },
    output: 'projects/index.html'
  },
  {
    template: 'contact',
    context: {
      page: 'contact',
      siteMeta,
      contact: {
        email: 'mailto:hello@example.com',
        github: 'https://github.com/ZTDGCX',
        linkedin: 'https://www.linkedin.com/in/sample-profile'
      }
    },
    output: 'contact/index.html'
  }
];

async function renderPages() {
  for (const page of pages) {
    const html = await hbs.render(path.join(VIEWS_DIR, `${page.template}.hbs`), page.context);
    const destination = path.join(OUTPUT_DIR, page.output);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, html, 'utf8');
  }

  // Render 404 separately
  const fallback = await hbs.render(path.join(VIEWS_DIR, '404.hbs'), {
    page: '404',
    siteMeta
  });
  fs.writeFileSync(path.join(OUTPUT_DIR, '404.html'), fallback, 'utf8');
}

function copyPublicAssets() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    return;
  }

  fs.cpSync(PUBLIC_DIR, path.join(OUTPUT_DIR), { recursive: true });
}

(async () => {
  try {
    await renderPages();
    copyPublicAssets();
    // eslint-disable-next-line no-console
    console.log('Static site generated in dist/');
  } catch (error) {
    console.error('Failed to build static site:', error);
    process.exit(1);
  }
})();
