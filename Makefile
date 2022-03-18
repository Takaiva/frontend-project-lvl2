install:
	npm ci
publish:
	npm publish --dry-run
diff:
	node bin/gendiff
lint:
	npx eslint .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest -- --coverage

