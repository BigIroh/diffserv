JSX=jsx
BROWSERIFY=node_modules/browserify/bin/cmd.js
JS_DEP_COMMON=$(shell find src/js/common -name "*.js")
JS_DEP_IFRAME=$(shell find src/js/iframe -name "*.js")
JS_DEP_WINDOW=$(shell find src/js/window -name "*.js")

all: build/html/iframe.html \
	build/js/window.js


build/html/iframe.html: build/js/iframe.js
	@mkdir -p $(@D)
	@echo "<!doctype html><html><body><script>" > $@
	@cat $< >> $@
	@echo "</script><body></html>" >> $@

build/js/iframe.js: $(JS_DEP_IFRAME) $(JS_DEP_COMMON)
	@mkdir -p $(@D)
	$(BROWSERIFY) src/js/iframe/main.js --debug > $@

build/js/window.js: $(JS_DEP_WINDOW) $(JS_DEP_COMMON)
	@mkdir -p $(@D)
	$(BROWSERIFY) src/js/window/main.js --debug > $@

clean: 
	rm -rf build/*

.PHONY: clean all