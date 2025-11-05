Play Next.js is a free and **Open-source SaaS starter kit and boilerplate, designed and built for SaaS startups**, apps, businesses, and more. With its premium design and essential UI components and pages, it provides everything you need to kickstart a feature-rich SaaS website.

[![Play Next.js](https://github.com/NextJSTemplates/play-nextjs/blob/main/nextjs-play.png)](https://play.nextjstemplates.com)

## Free SaaS Boilerplate and Starter Kit for Next.js 🚀

Play Next.js SaaS Boilerplate and Starter Kit is a free, open-source solution ideal for startups, SaaS companies, and more. It offers essential UI components, authentication and database integration, and Stripe integration. Its superior design and functionality make it a go-to choice for launching a feature-rich SaaS website efficiently.

### [🚀 View Live Demo](https://play.nextjstemplates.com/)

### [🔌 Documentation](https://nextjstemplates.com/docs)

### All Essential Integrations - DB, Auth, Payment, MDX, and more ⚡

Play Next.js SaaS Starter kit includes all the key integrations required to build a fully functional SaaS platform.

- **PostgreSQL for Database**: Comes with PostgreSQL integration with Prisma which is a powerful and open-source relational database system ensures data integrity and reliability.

- **NextAuth for Authentication**: Play Next.js utilizes NextAuth, a versatile solution that provides secure login and user management.

- **MDX for Blogs**: MDX uniquely combines Markdown and JSX, Play Next.js comes with complete blogging solution to create and maintain blog using MDX.

- **Stripe for Subscription Payments**: Stripe, a globally trusted payment processing platform, offers robust security features and smooth checkout experiences.

These integrations work together to simplify development and enhance the user experience.

### Essential SaaS Pages & Components and Styled Using Tailwind CSS 🎨

This Next.js SaaS Boilerplate and Starter Kit is **styled using Tailwind CSS**, a highly flexible and customizable utility-first CSS framework. Leveraging the power of Tailwind, each component and page of this kit, including **login, signup, blog, about, and others, has been handcrafted to offer top-notch aesthetics** while maintaining peak usability.

### Crafted Using [🎨 TailGrids Components](https://tailgrids.com)

Play Next.js SaaS boilerplate, you can enjoy a professional-looking website that offers seamless operation, all while significantly reducing your web development time and effort.

---

### 🚀 Deploy Now

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fa10i-labs%2FSaaS-template-nextjs)

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/A10i-labs/SaaS-template-nextjs)

### Setup Instructions

Follow these steps to set up and run this template on your local machine:

1. Begin by downloading and extracting the template from **Next.js Templates**.

2. Once you've done that, navigate into the template directory using the **cd** command.

3. Install the necessary dependencies by running the following commands:

```bash
    npm install --legacy-peer-deps
```

**Note:** As of right now React 19 causes peer dependencies issues with some packages, so the `legacy-peer-deps` flag is required.

4. Now you're ready to start the project on your local server. Use the following command to get it up and running:

```bash
    npm run dev
```

This will launch the template on [localhost:3000](http://localhost:3000).

### Environment Variables Setup

Create a `.env.local` file in the root directory to configure your application. Here are the required environment variables:

#### Required Variables

```env
# NextAuth Secret (Required for JWT encryption/decryption)
NEXTAUTH_SECRET=your-random-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Database Connection (PostgreSQL)
DATABASE_URL=your-postgresql-connection-string

# OAuth Providers (Optional - for social login)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Email Configuration (Required for contact form and magic link)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-specific-password
EMAIL_FROM=your-email@gmail.com
```

#### How to Get Each Variable

**1. NEXTAUTH_SECRET** - Generate a random secret key:

- Using OpenSSL: `openssl rand -base64 32`
- Using Node.js: `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`
- Or use any secure random string generator (minimum 32 characters)

**2. DATABASE_URL** - PostgreSQL connection string:

- Format: `postgresql://username:password@host:port/database`
- Use services like [Supabase](https://supabase.com), [Neon](https://neon.tech), or [Railway](https://railway.app) for free PostgreSQL databases

**3. GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET** - For Google OAuth:

- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a new project → APIs & Services → Credentials
- Create OAuth 2.0 Client ID
- Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

**4. GITHUB_CLIENT_ID & GITHUB_CLIENT_SECRET** - For GitHub OAuth:

- Go to GitHub → Settings → Developer settings → OAuth Apps
- Click "New OAuth App"
- Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
- Copy Client ID and generate Client Secret

**5. Email Configuration** - For sending emails (contact form, magic links):

- **EMAIL_SERVER_HOST**: SMTP server (e.g., `smtp.gmail.com` for Gmail)
- **EMAIL_SERVER_PORT**: Usually `587` (TLS) or `465` (SSL)
- **EMAIL_SERVER_USER**: Your email address
- **EMAIL_SERVER_PASSWORD**: **App Password** (NOT your regular password)
  - For Gmail: Enable 2-Step Verification → Generate App Password
  - For Outlook: Enable 2FA → Create App Password
  - For custom domains: Use your email provider's SMTP settings
- **EMAIL_FROM**: Email address to send from (usually same as EMAIL_SERVER_USER)

**Note:** Never commit `.env.local` to version control. It's already included in `.gitignore`.

For detailed email setup instructions, see [CONTACT_FORM_FIX_GUIDE.md](./CONTACT_FORM_FIX_GUIDE.md)

### Deployment on PaaS

If your project is hosted on a GitHub repository, you can deploy it using free and user-friendly platforms like [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/). Both provide generous free tiers for hosting Next.js projects.

### License Information

Play is Free is completely free and open-source. Feel free to use it for both personal and commercial projects.

### Show Your Support

If you appreciate this project, please consider starring this repository. Your support encourages our team to continue creating more content like this and helps us to reach more users like you!

## Explore More Templates

For a wider range of options, feel free to browse our collection of [Next.js Templates, Boilerplates and Starter Kits](https://nextjstemplates.com/templates).

### Update Log

**06 August 2025** - v2.2.1

- fix: [#21](https://github.com/NextJSTemplates/play-nextjs/issues/21) - Moved context providers to `/src/app/providers.tsx`
- Removed initial loader

**10 April 2025**

- Fix peer deps issue
- Update Next.js for security patch

**29 Jan 2025**

- Upgraded to Next.js 15
- Using `Link` instead of `a` tag
- Fixed all minor bugs

**21 March 2024**

- Upgraded to Next.js 14
- Updated stripe integration
- Fixed auth issues
- Updated all the packages
- Update ts config & fix all the issues
- Update signin & signup page Design
- Integrated Magic link signin
- & Forgot password
