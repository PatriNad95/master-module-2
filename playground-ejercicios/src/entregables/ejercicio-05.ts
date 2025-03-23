console.log("************** DELIVERABLE 05 *********************");

class SlothMachine {
  coins: number;
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const results: boolean[] = [
      Math.random() < 0.7,
      Math.random() < 0.5,
      Math.random() < 0.6,
    ];

    let message: string;

    if (results.every(Boolean)) {
      message = `Congratulations!!! You won ${this.coins} coins!!`;
      this.coins = 0;
    } else {
      message = "Good luck next time!!";
    }
    console.log(message);
  }
}

const machine1: SlothMachine = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
