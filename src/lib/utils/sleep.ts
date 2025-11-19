export async function sleep(ms: number) {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
}

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ## MEASURING TIME ##
// - console.timeEnd('FileUploadTime')
// - console.time('FileUploadTime')
// performance.now()

export async function waitT(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

// this will not work - it will throw an error
export async function waitRejected(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

console.time();
await wait(500);
console.timeEnd();
