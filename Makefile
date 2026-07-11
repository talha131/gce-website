# GCE website — common tasks.
# Deploys a locally-built dist/ to Netlify via the CLI (not Netlify CI), so
# build-time env vars (e.g. PUBLIC_GA_ID in .env) are baked in here, locally.

.PHONY: dev build clean deploy preview install

dev:            ## Start the local dev server (http://localhost:4321)
	npm run dev

build:          ## Production build → dist/
	npm run build

preview: build  ## Serve the production build locally
	npm run preview

clean:          ## Remove build output and caches
	rm -rf dist .astro node_modules/.vite

install:        ## Install dependencies
	npm install

# Clean, build fresh, then push dist/ straight to production (gce.edu.pk).
# clean runs first so a deploy can never ship stale/orphaned pages or assets.
# First-time: run `netlify link` once to connect this repo to the Netlify site.
deploy: clean build
	netlify deploy --prod --dir=dist
