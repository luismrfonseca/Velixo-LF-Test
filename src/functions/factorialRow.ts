export async function factorialRowWorker(n: number): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL("../worker/factorial.worker.ts", import.meta.url), {
      type: 'module'
    });

    worker.postMessage(n);

    worker.onmessage = (event) => {
      resolve(event.data);
    };

    worker.onerror = (error) => {
      reject(error);
    };
  });
  }