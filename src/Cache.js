

let FIVE_MIN = 1000 * 60 * 5

let _store = {},
    _lastUsed = {}

const Cache = {
    has: (key) => { 
        return Date.now() - _lastUsed[key] < FIVE_MIN
    },

    get: function (url) {
 
        _lastUsed[url] = Date.now()
        return _store[url]
    },
    set: function (url, value) {
        _store[url] = value
        _lastUsed[url] = Date.now()
    },
    flush: function () {
        let now = Date.now()
        for (let url in _lastUsed) {
            if (now - _lastUsed[url] > (FIVE_MIN)) {
                delete _lastUsed[url]
                delete _store[url]
            }
        }

    },

    
}

Cache.handler = setInterval(Cache.flush, FIVE_MIN) 

export default Cache