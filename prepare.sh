#!/bin/sh

sed -e 's/{{PRE_RUN_ADDITIONS}}/\n#include "pre-run.js"/g' \
    -e 's/{{PREAMBLE_ADDITIONS}}/var global_info;/g' \
    -e 's/var exports = null;/var exports = null; global_info = info;/g' \
    main.js > main.tmp.js

cpp -P main.tmp.js > main.prep.js