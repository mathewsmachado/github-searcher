export function throttle(callback: () => any, delay = 500): () => void {
  let lastExecutionTime = 0;

  return () => {
    const currentExecutionTime = new Date().getTime();
    const hasPassedNecessaryTime =
      currentExecutionTime - lastExecutionTime > delay;

    if (hasPassedNecessaryTime) {
      lastExecutionTime = currentExecutionTime;
      callback();
    }
  };
}

export function debounce(callback: () => any, delay = 500): () => void {
  let timeout: NodeJS.Timeout;

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => callback(), delay);
  };
}
