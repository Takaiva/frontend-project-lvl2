install:
	npm ci
publish:
	npm publish --dry-run
diff:
	node bin/gendiff
lint:
	npx eslint .
test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test
