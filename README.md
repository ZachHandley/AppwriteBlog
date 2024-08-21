# Appwrite Astro Starter Blog

This is a starter template for building a blog using Astro and Appwrite. It provides a solid foundation for creating a modern, performant blog with backend services powered by Appwrite.

## 🚀 Quick Start

To get started with this template, download or fork this repo and follow below

## 🔧 Setup

1. Customize `src/appwrite/appwriteConfig.ts` with your Appwrite project details.
2. Run the following command to set up your Appwrite collections:

   ```sh
   npx --package=appwrite-utils-cli@latest appwrite-migrate --it
   ```

3. In the CLI, select "Push local configuration to Appwrite" to create the necessary collections and attributes.
4. Customize the UI to fit your needs, and you're done!

> 💡 **Tip:** If you make any changes to the collection schema, you can use the "Generate schemas" option in the CLI to update your local configuration.

## ✨ Features

- ✅ Integration with Appwrite for backend services
- ✅ Pre-configured blog post collection
- ✅ Authentication ready
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Responsive design
- ✅ Markdown & MDX support
- ✅ 100/100 Lighthouse performance
- ✅ Sitemap and RSS Feed support

## 🗂️ Project Structure

```text
├── public/
├── src/
│   ├── appwrite/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

- `src/appwrite/`: Contains Appwrite configuration and utility functions
- `src/components/`: Reusable Astro components
- `src/content/`: Markdown and MDX content for blog posts
- `src/layouts/`: Page layouts
- `src/pages/`: Astro pages that generate routes
- `src/styles/`: Global styles and CSS utilities

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Appwrite Documentation](https://appwrite.io/docs)

## 🙏 Credits

This starter is based on the official Astro Blog template and integrated with Appwrite services.

## 📝 License

MIT License. See `LICENSE` for more information.
