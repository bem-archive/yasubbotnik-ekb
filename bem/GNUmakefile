
all: $(wildcard pages/*/*.bemdecl.js)

BEM_BUILD=bem build -d pages/$1/$1.bemdecl.js -o pages/$1 -n $1 -l blocks -t css -t js

%.bemdecl.js: FORCE
	$(call BEM_BUILD,$(*F))

	cd $(@D) ; \
		cat $(*F).js | xargs cat >> $(*F).js_ ; \
			mv $(*F).js_ $(*F).js

.PHONY: all FORCE
