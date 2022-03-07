const tick = Date.now();
export const timeLog = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);
