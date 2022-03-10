install:
	npm ci
publish:
	npm publish --dry-run
diff:
	node bin/gendiff
lint:
	npx eslint .

