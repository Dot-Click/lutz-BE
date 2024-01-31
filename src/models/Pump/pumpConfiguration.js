const { mongoose, Schema } = require("mongoose");

const pumpConfigurationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    flowCapacity: {
      type: Number,
      required: true,
    },
    dischargePressure: {
      type: Number,
      required: true,
    },
    pumpedLiquid: {
      type: String,
      required: true,
    },
    ctrlFunctionality: {
      remote: {
        type: Boolean,
        required: true,
      },
      analogInput: {
        type: Boolean,
        required: true,
      },
      analogOutput: {
        type: Boolean,
        required: true,
      },
      relayOutput: {
        type: Boolean,
        required: true,
      },
      pulseControl: {
        type: Boolean,
        required: true,
      },
      graphicalDisplay: {
        type: Boolean,
        required: true,
      },
      monitoring: {
        type: Boolean,
        required: true,
      },
      loadedValves: {
        type: Boolean,
        required: true,
      },
    },
    fieldBus: {
      type: Boolean,
      required: true,
    },
    fieldBusType: {
      type: String,
    },
    nPumps: {
      type: Number,
    },
    inletOutlet: {
      type: String,
    },
    panelType: {
      type: String,
      required: true,
    },
    mounting: {
      type: String,
      required: true,
    },
    ballValves: {
      pipeMaterial: {
        type: String,
        required: true,
      },
      valvesType: {
        type: String,
        required: true,
      },
      pulsation: {
        type: String,
        required: true,
      },
    },
    witnessTesting: {
      type: Boolean,
      required: true,
    },
    splashShield: {
      type: Boolean,
      required: true,
    },
    manifold: {
      type: Boolean,
      required: true,
    },
    // optional
    etoDesc: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);
const PumpConfiguration = mongoose.model(
  "PumpConfiguration",
  pumpConfigurationSchema
);

module.exports = PumpConfiguration;
