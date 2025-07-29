'use client'

const useAnimation = (target: number, setProgress: any) => {
  let currentProgress = 0
  const interval = setInterval(() => {
    if (currentProgress < target) {
      currentProgress += 1
      setProgress(currentProgress)
    } else {
      clearInterval(interval)
    }
  }, 10)
}

export default useAnimation
