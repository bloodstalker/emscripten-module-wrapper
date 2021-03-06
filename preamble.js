
var global_info;

// Here we should add the function that will add hooks to record the memory usage

var memory_record

function startMemoryRecord() {
    memory_record = { heap8: [], heap16: [], heap32 : [] }
}

startMemoryRecord()

var trace_memory = true;

function makeWrapper(view, id) {
    return new Proxy(view, {
        get: function(target, name) {
            if (trace_memory) console.log("Getting ", name, "from", id)
            memory_record[id].push(name)
            return target[name]
        },
        set: function(target, name, value) {
            if (trace_memory) console.log("Setting ", name, "from", id)
            memory_record[id].push([name,value])
            target[name] = value
        }
    })
}

function addHeapHooks() {
    // console.log(HEAP8[0])
    HEAP8 = makeWrapper(HEAP8, "heap8")
    HEAP16 = makeWrapper(HEAP16, "heap16")
    HEAP32 = makeWrapper(HEAP32, "heap32")
}

