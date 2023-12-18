let fs = require('fs')

let SPELL_ID = 44*12+1
let CLASS_ID = "113";


fs.readFile("dofusDatabase/dataScrapper/roubScrap.txt", (err, data) => {
    if (err){
        console.log(err);
    } else {
        let d = data.toString();
        let cleanedData = d.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, ""); // Remove tags
        cleanedDataTable = cleanedData.split("\n").map(x => x.trim()).filter(x => !!x && x[0] != ("{")); // Remove tags

        // Iterate over table and construct json
        let spellsData = []
        let currentSpellData = {}
        let newSpell = true
        let inAlt = false
        let spellDataIdx = 0
        cleanedDataTable.map((x, idx) => {
            if (x == "@") {newSpell = true; SPELL_ID+=1; inAlt=!inAlt;spellDataIdx = -1;}
            if (newSpell) {
                if (currentSpellData.id) spellsData.push(currentSpellData);
                currentSpellData = {
                    id: SPELL_ID+"", 
                    classId: CLASS_ID, 
                    altSpellId: (SPELL_ID + (inAlt ? -1 : 1))+"",
                    name: "",
                    description: "",
                    spellIcon: "dofusDatabase/spellIcons/"+SPELL_ID+".png",
                    apCost: 0,
                    cooldown: 0,
                    minRange: 0,
                    maxRange: 0,
                    numPerTurn: 1,
                    numPerTurnPerPlayer: 0,
                    baseCrit: 0,
                    lineOfSight: false,
                    modifiableRange: false,
                    areaIcon: "cell",
                    launchDirection: "",
                }
                newSpell = false;
            }

            // Preset spellDataIdx for consistency
            if (x.includes("Probabilité de coup critique")) {
                spellDataIdx = 100;
            } else if (x.includes("Intervalle de relance")) {
                spellDataIdx = 200;
            } else if (x.includes("Utilisations par tour")) {
                spellDataIdx = 300;
            } else if (x.includes("Portée modifiable")) {
                spellDataIdx = 400;
            }
            switch (spellDataIdx){
                case 0:
                    currentSpellData.name = x;
                    break;
                case 3:
                    let splitted = x.split(" ");
                    let fixPadding = 0;
                    if (splitted.length < 5) {
                        fixPadding = 2;
                        currentSpellData.minRange = "0000";
                    } else {
                        currentSpellData.minRange = parseInt(splitted[0]);
                    }
                    currentSpellData.maxRange = parseInt(splitted[2-fixPadding]);
                    if(splitted[5-fixPadding]) {
                        currentSpellData.apCost = parseInt(splitted[5-fixPadding].replace("AP", " "));
                    }
                    break;
                case 4:
                    currentSpellData.description = x;
                    break;
                case 5: // Looping here for multi-part description
                    if (!x.includes("Niveau requis")) {
                        spellDataIdx -= 1;
                        currentSpellData.description += " "+x;
                    }
                    break;
                case 101 : // critProbability
                    currentSpellData.baseCrit = parseInt(x.replace("%", ""));
                    break;
                case 201 : // critProbability
                    currentSpellData.cooldown = parseInt(x);
                    break;
                case 301 : // perTurn
                    currentSpellData.numPerTurn = parseInt(x);
                    break;
                case 303 : // perTurnPerPlayer
                    currentSpellData.numPerTurnPerPlayer = parseInt(x);
                    break;
                case 401 : // poModif
                    currentSpellData.modifiableRange = x=="Oui";
                    break;
                case 403 : // ldv
                    currentSpellData.lineOfSight = x=="Oui";
                    break;
                case 405 : // inLine
                    currentSpellData.launchDirection = x=="Oui" ? "line" : "all";
                    break;
                default:
                    break;
            }
            spellDataIdx += 1;
        })

        cleanedData = cleanedDataTable.join("\n").replace("@", "\n\n\n");
        fs.writeFile("dofusDatabase/dataScrapper/cleaned"+CLASS_ID+".txt", cleanedData, () => {});
        fs.writeFile("dofusDatabase/dataScrapper/jsoned"+CLASS_ID+".json", JSON.stringify(spellsData), () => {});
    }
});