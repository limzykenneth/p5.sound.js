import * as Tone from "tone";

class Amplitude {
  constructor() {
    this.amplitude = new Tone.Meter({normalRange:true});
  }

  setInput(input) {
    //if input == GainNode then connect else go to next input
    if (Object.values(input)[0].input.constructor.name === "GainNode") {
      this.input.connect(Object.values(input)[0].input);
    }
    else {
      console.log("input is not a GainNode")
    }
    this.amplitude.connect(Object.values(input)[0].input);
  }

  getLevel() {
    return this.amplitude.getValue();
  }
}

export default Amplitude;