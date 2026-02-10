export class Sequence {
  private steps: (() => Promise<void>)[] = [];

  add(step: () => Promise<void>) {
    this.steps.push(step);
    return this;
  }

  async play() {
    for (const step of this.steps) {
      await step();
    }
  }
}

// Kullanım örneği
const seq = new Sequence();

seq
  .add(async () => {
    console.log("Intro başladı");
  })
  .add(async () => {
    await new Promise(r => setTimeout(r, 1000));
    console.log("1 saniye geçti");
  });

seq.play();
