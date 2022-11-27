const Rout = require("express").Router();

const PublicSchema = require("../modules/PublicProjectSchema");

Rout.get("/allProject", async (req, res) => {
  try {
    const allProject = await PublicSchema.find({});

    res.status(200).json({ allProject });
  } catch (error) {
    console.log(error);
  }
});

module.exports = Rout;
