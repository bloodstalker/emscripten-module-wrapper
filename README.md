## emscripten module wrapper

This is a wrapper to collect information needed to run WebAssembly modules generated by emscripten.

The idea is that we should be able to run any emscripten generated wasm module, and then post the results as a verified computation using TrueBit. First the script `prepare.sh` adds the wrapper to the js file that was generated by emscripten. Then this file
can be ran using Node.js. This will collect the information about calls and memory changes that can be recorded, and used for verified computations. The script first uses the ocaml interpreter to generate a wasm file that has our runtime linked in. Then this file can be ran using the ocaml off-chain interpreter.

Usage:
```
bash prepare.sh file.js
```

