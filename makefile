JSX=jsx
BROWSERIFY=node_modules/browserify/bin/cmd.js

javascripts/all.js: components
	echo "/*** THIS IS A COMPILED FILE ***/" > $@
	$(BROWSERIFY) src/js/main.js >> $@

components: $(shell find ./src/jsx -name "*.jsx")
	@mkdir -p build/js/components
	$(JSX) --extension=jsx src/jsx/ build/js/components

clean: 
	rm -rf build

.PHONY: clean