const connection = require("../../config/contactmysqldb");
const router = require("express").Router();
const { v4 } = require("uuid");
const AuthModel = require("../../models/authModel/AuthModel");

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  const id = v4();
  console.log(req.body.email);
  try {
    if (name === undefined || message === undefined || email === undefined) {
      res.send("No data");
    } else {
      sql = `INSERT INTO contactus (id,name,email, message) VALUES ('${id}','${name}', '${email}','${message}')`;
      connection.query(sql, (err, result) => {
        if (err) {
          throw err;
        } else {
          res.send(result);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

//Get All Contacts

router.get("/contact", (req, res) => {
  try {
    sql = "SELECT * FROM contactus";
    connection.query(sql, (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send(result);
      }
    });
  } catch (error) {
    res.json(error);
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const response = await AuthModel.find();
    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
