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

# Clean, build fresh, deploy dist/ to production (gce.edu.pk), then auto-tag the
# release. clean runs first so a deploy never ships stale/orphaned pages. The
# sitemap is generated during `build` itself (see astro.config.mjs). First-time:
# `netlify link` once to connect the site.
#
# Auto-tag: after a successful deploy, if package.json `version` is a major/minor
# release (X.Y.0) that isn't tagged yet, create a signed tag `v<version>` and push
# it. Patch versions and already-tagged versions are skipped (no error). NOTE:
# this only runs on `make deploy` — deploying by pushing to master (Netlify CI)
# does NOT tag. See CLAUDE.md -> Releases & tags.
deploy: clean build
	netlify deploy --prod --dir=dist
	@V=v$$(node -p "require('./package.json').version"); \
	case "$$V" in *.0) ;; *) echo "release: $$V is a patch — not tagging"; exit 0 ;; esac; \
	git rev-parse -q --verify "refs/tags/$$V" >/dev/null 2>&1 && { echo "release: $$V already tagged"; exit 0; }; \
	echo "release: tagging $$V"; git tag -s "$$V" -m "Release $$V" && git push origin "$$V"
