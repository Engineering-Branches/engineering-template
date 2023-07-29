// litefs-js should be used server-side only. It imports `fs` which results in Remix
// including a big polyfill. So we put the import in a `.server.ts` file to avoid that
// polyfill from being included. 
export * from 'litefs-js'
export * from 'litefs-js/remix.js'
