# Flat Dummy Blog

A minimal blog built with Next.js, featuring smooth page transitions and server-side rendering. Posts are fetched from a public API and displayed with a clean, flat design.

## Live Site

[dummy-blog.yrios.dev](https://dummy-blog.yrios.dev)

## Tech Stack

| Library                                                                 | Purpose                                            |
| ----------------------------------------------------------------------- | -------------------------------------------------- |
| [Next.js](https://nextjs.org/)                                          | React framework with SSR for initial data fetching |
| [Framer Motion](https://www.framer.com/motion/introduction/)            | Smooth layout animations and page transitions      |
| [TanStack Query](https://tanstack.com/query/latest/docs/react/overview) | Client-side data fetching and caching              |
| [React Icons](https://react-icons.github.io/react-icons)                | Icon collection                                    |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/   # Reusable UI components
├── hooks/        # Data fetching hooks (posts, single post)
├── pages/        # Next.js file-based routing
├── services/     # API layer
├── styles/       # Component and global CSS
└── types/        # TypeScript type definitions
```
