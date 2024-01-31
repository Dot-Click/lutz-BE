const PumpConfiguration = require("../models/Pump/pumpConfiguration");
const sendMail = require("../utils/sendMail");
const SuccessHandler = require("../utils/SuccessHandler");
const ErrorHandler = require("../utils/ErrorHandler");

const addConfiguration = async (req, res) => {
  try {
    const {
      flowCapacity,
      dischargePressure,
      pumpedLiquid,
      // Controls and Functionality (wrap in object )
      remote, //boolean
      analogInput, //boolean
      analogOutput, //boolean
      relayOutput, //boolean
      pulseControl, //boolean
      graphicalDisplay, //boolean
      monitoring, //boolean
      loadedValves, //boolean
      // Field Bus
      fieldBus, //boolean
      fieldBusType,

      // number of pumps
      nPumps,
      inletOutlet,
      panelType,
      mounting,
      // Ball / Valves (wrap in object )
      pipeMaterial,
      valvesType,
      pulsation,
      // additional option
      witnessTesting, //boolean
      splashShield, //boolean
      manifold, //boolean

      // ETO
      etoDesc,
      quantity,
    } = req.body;
    const data = await PumpConfiguration.create({
      user: req.user._id,
      flowCapacity,
      dischargePressure,
      pumpedLiquid,
      // Controls and Functionality (wrap in object )

      ctrlFunctionality: {
        remote,
        analogInput,
        analogOutput,
        relayOutput,
        pulseControl,
        graphicalDisplay,
        monitoring,
        loadedValves,
      },
      fieldBus,
      fieldBusType,

      nPumps,
      inletOutlet,
      panelType,
      mounting,
      // Ball / Valves (wrap in object )
      ballValves: {
        pipeMaterial,
        valvesType,
        pulsation,
      },
      // additional option
      witnessTesting,
      splashShield,
      manifold,

      // ETO
      etoDesc,
      quantity,
    });
    return SuccessHandler(
      { message: "Configuration added", data: data },
      200,
      res
    );
  } catch (error) {
    return ErrorHandler(error.message, 500, req, res);
  }
};

module.exports = {
  addConfiguration,
};
