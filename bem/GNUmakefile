
all: pages/index/index.css pages/index/index.js

pages/index/index.css: FORCE
	bem build -d $(@D)/index.bemdecl.js -o $(@D) -n index -l blocks -t css

pages/index/index.js: FORCE
	bem build -d $(@D)/index.bemdecl.js -o $(@D) -n index -l blocks -t js
	cd $(@D); cat $(@F) | xargs cat >> $(@F)_ ; mv $(@F)_ $(@F)

.PHONY: all FORCE
