
all: $(wildcard pages/*/*.bemdecl.js)

BEM_BUILD=bem build -d $1/$2.bemdecl.js -o $1 -n $2 -l blocks -t css -t js

%.bemdecl.js: FORCE
	$(call BEM_BUILD,$(@D),$(*F))

	cd $(@D) ; \
		cat $(*F).js | xargs cat >> $(*F).js_ ; \
			mv $(*F).js_ $(*F).js

.PHONY: all FORCE
