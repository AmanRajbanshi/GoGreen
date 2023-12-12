const NewsLetterModel = require("../../models/newsletterRoute/newsletterRoute");
const router = require("express").Router();

router.post("/newsletter", async (req, res) => {
  try {
    const response = await NewsLetterModel.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send("This Email Has Already Subscribed");
    }
    res.status(200).json(error.message);
  }
});

module.exports = router;
