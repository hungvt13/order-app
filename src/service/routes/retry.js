const retry = (
  fn,
  retriesLeft = import.meta.env.VITE_CHUNK_RETRIES,
  interval = import.meta.env.VITE_CHUNK_RETRIES_TIME,
) => new Promise((resolve, reject) => {
  fn()
    .then(resolve)
    .catch((error) => {
      setTimeout(() => {
        if (retriesLeft === 1) {
          // reject('maximum retries exceeded');
          reject(error);
          return;
        }

        // Passing on "reject" is the important part
        retry(fn, retriesLeft - 1, interval).then(resolve, reject);
      }, interval);
    });
});

export default retry;
