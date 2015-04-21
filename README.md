Now getting this:

```
rror (E_UNKNOWN) :: Encountered an unexpected error
error: column someparent.children does not exist
    at Connection.parseE (/Users/waynedouglas/filter-demo/api/node_modules/sails-postgresql/node_modules/pg/lib/connection.js:534:11)
    at Connection.parseMessage (/Users/waynedouglas/filter-demo/api/node_modules/sails-postgresql/node_modules/pg/lib/connection.js:361:17)
    at Socket.<anonymous> (/Users/waynedouglas/filter-demo/api/node_modules/sails-postgresql/node_modules/pg/lib/connection.js:105:22)
    at Socket.emit (events.js:107:17)
    at readableAddChunk (_stream_readable.js:163:16)
    at Socket.Readable.push (_stream_readable.js:126:10)
    at TCP.onread (net.js:529:20)

Details:  error: column someparent.children does not exist
```

whyyyyyyyyyyyyyy!!
