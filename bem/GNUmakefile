
all: $(wildcard pages/*/*.bemdecl.js)

BEM_BUILD=bem build -d $1/$2.bemdecl.js -o $1 -n $2 -l blocks -t css -t js

EXPAND_FILE= cd $1 ; cat $2 | xargs cat >> $2_ ; mv $2_ $2

%.bemdecl.js: FORCE
	$(call BEM_BUILD,$(@D),$(*F))
	$(call EXPAND_FILE,$(@D),$(*F).js)

.PHONY: all FORCE
