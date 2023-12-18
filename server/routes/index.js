let fs = require("fs");

let express = require("express");
let router = express.Router();
let { dirname } = require("path");
const appDir = dirname(require.main.filename);
let spellsByClass = {};
let spellsLoaded = false;
let spellbarMapping = {};
let spellbarsLoaded = false;

router.use("/:id", (req, res, next) => {
  next();
});

router
  .get("/", async (req, res) => {
    if (!spellsLoaded) {
      await fs.readFile("dofusDatabase/spellsData.json", (err, data) => {
        if (err) {
          console.log(err);
        }
        spellsByClass = JSON.parse(data);
        spellsLoaded = true;
        res.json(spellsByClass);
      });
    } else {
      res.json(spellsByClass);
    }
  })
  .get("/spellIcon/:img", async (req, res) => {
    res.sendFile(appDir + "/models/spellIcons/" + req.params["img"] + ".png");
  })
  .get("/bdsIcon/:class/:img", async (req, res) => {
    let imgNum = parseInt(req.params["img"]);
    switch (req.params["class"]) {
      case "forgelance":
        imgNum += 44;
      case "ouginak":
        imgNum += 44;
      case "huppermage":
        imgNum += 44;
      case "eliotrope":
        imgNum += 44;
      case "steamer":
        imgNum += 44;
      case "zobal":
        imgNum += 44;
      case "roublard":
        imgNum += 44;
      case "pandawa":
        imgNum += 44;
      case "xelor":
        imgNum += 44;
      case "sram":
        imgNum += 44;
      case "enutrof":
        imgNum += 44;
      case "osamodas":
        imgNum += 44;
      case "sadida":
        imgNum += 44;
      case "sacrieur":
        imgNum += 44;
      case "feca":
        imgNum += 44;
      case "cra":
        imgNum += 44;
      case "iop":
        imgNum += 44;
      case "eniripsa":
        imgNum += 44;
    }
    res.sendFile(appDir + "/models/spellIcons/" + imgNum + ".png");
  })
  .get("/bdsMap", async (req, res) => {
    if (!spellbarsLoaded) {
      await fs.readFile("dofusDatabase/spellBarData.json", (err, data) => {
        if (err) {
          console.log(err);
        }
        spellbarMapping = JSON.parse(data);
        spellbarsLoaded = true;
        res.json(spellbarMapping);
      });
    } else {
      res.json(spellbarMapping);
    }
  });

module.exports = router;
