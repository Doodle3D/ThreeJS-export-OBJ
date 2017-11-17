SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "threejs-export-stl/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17",
      "file-saver": "npm:file-saver@1.3.3",
      "three": "npm:three@0.83.0"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "threejs-export-stl": {
      "main": "threejs-export-stl.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "jszip": "npm:jszip@3.1.3",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0"
  },
  packages: {
    "npm:jszip@3.1.3": {
      "map": {
        "pako": "npm:pako@1.0.4",
        "core-js": "npm:core-js@2.3.0",
        "es6-promise": "npm:es6-promise@3.0.2",
        "readable-stream": "npm:readable-stream@2.0.6",
        "node-readable-stream": "npm:readable-stream@2.0.6",
        "lie": "npm:lie@3.1.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:lie@3.1.0": {
      "map": {
        "immediate": "npm:immediate@3.0.6"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.2.1",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.1"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8",
        "ripemd160": "npm:ripemd160@1.0.1"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.7",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:crypto-browserify@3.11.1": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hmac": "npm:create-hmac@1.1.6",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.6",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "elliptic": "npm:elliptic@6.4.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.7"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "sha.js": "npm:sha.js@2.4.8",
        "create-hash": "npm:create-hash@1.1.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1",
        "create-hash": "npm:create-hash@1.1.3",
        "pbkdf2": "npm:pbkdf2@3.0.12"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "hash.js": "npm:hash.js@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.7",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:pbkdf2@3.0.12": {
      "map": {
        "ripemd160": "npm:ripemd160@2.0.1",
        "create-hmac": "npm:create-hmac@1.1.6",
        "sha.js": "npm:sha.js@2.4.8",
        "create-hash": "npm:create-hash@1.1.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "sha.js": "npm:sha.js@2.4.8",
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    }
  }
});
