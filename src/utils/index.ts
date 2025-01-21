export async function wait(second: number) {
    return new Promise<void>((accept) => {
      setTimeout(() => {
        accept()
      }, second * 1000)
    })
  }
  