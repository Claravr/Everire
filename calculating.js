var stats = {
  "Endurance": 4,
  "Strength": 4,
  "Agility": 4,
  "Magic": 4,
  "Mind": 4,
  "Charisma": 4,
  "BonusPoints": 20
};

var formular = {
  "f1": +3,
  "f2": +2,
  "f3": +1,
  "f4": -0,
  "f5": -1,
  "f6": -3,
  "f7": -5,
  "f8": -8,
  "f9": -11,
  "f10": -15
};
displayStats();
var submitSwitch = false;
var enoughpoints = true;

function checkBonusPointsFromBeingInvalid() {
  if (stats.bonusPoints <= 0) {
    submitSwitch = false;
  }
}

function displayStats() {
  document.getElementById("endurance").value = stats.Endurance;
  document.getElementById("strength").value = stats.Strength;
  document.getElementById("agilility").value = stats.Agility;
  document.getElementById("magic").value = stats.Magic;
  document.getElementById("mind").value = stats.Mind;
  document.getElementById("charisma").value = stats.Charisma;
  finalsBonusPoints();
  document.getElementById("points").innerHTML = "Bonus Points " + stats.BonusPoints;
  console.log("Displayed Stats!");
}

function finalsBonusPoints() {
  stats.BonusPoints = stats.BonusPoints

}

if (stats.bonusPoints = 0) {
  document.getElementById("points").style.color = "green";
}


function bonusPointsCosts() {
  stats.BonusPoints = enduranceCosts + strengthCosts + agilityCosts + mindCosts + magicCosts + charismaCosts - 100;



}

/////////////////////////////////////////////////////////////////////////////



function plusstatsEndurance() {
  if (stats.Endurance <= 9) {
    if (enoughpoints === true) {
      stats.Endurance++;
      bonusPointsEnduranceCosts();
      bonusPointsCosts();
      displayStats();

    }
  }


}

function minusstatsEndurance() {
  if (stats.Endurance >= 2) {
    if (enoughpoints === true) {
      stats.Endurance--;
      bonusPointsEnduranceCosts();
      bonusPointsCosts();
      displayStats();

    }
  }
}


function plusstatsStrength() {
  if (stats.Strength <= 9) {
    if (enoughpoints === true) {
      stats.Strength++;
      bonusPointsStrengthCosts();
      bonusPointsCosts();
      displayStats();
    }
  }



}

function minusstatsStrength() {
  if (stats.Strength >= 2) {
    if (enoughpoints === true) {
      stats.Strength--;
      bonusPointsStrengthCosts();
      bonusPointsCosts();
      displayStats();
    }
  }

}

function plusstatsAgility() {
  if (stats.Agility <= 9) {
    if (enoughpoints === true) {
      stats.Agility++;
      bonusPointsAgilityCosts();
      bonusPointsCosts();
      displayStats();
    }
  }

}

function minusstatsAgility() {
  if (stats.Agility >= 2) {
    if (enoughpoints === true) {
      stats.Agility--;
      bonusPointsAgilityCosts();
      bonusPointsCosts();
      displayStats();
    }
  }

}

function plusstatsMagic() {
  if (stats.Magic <= 9) {
    if (enoughpoints === true) {
      stats.Magic++;
      bonusPointsMagicCosts();
      bonusPointsCosts();
      displayStats();
    }
  }

}

function minusstatsMagic() {
  if (stats.Magic >= 2) {
    if (enoughpoints === true) {
      stats.Magic--;
      bonusPointsMagicCosts();
      bonusPointsCosts();
      displayStats();
    }
  }

}

function plusstatsMind() {
  if (stats.Mind <= 9) {
    if (enoughpoints === true) {
      stats.Mind++;
      bonusPointsMindCosts();
      bonusPointsCosts();
      displayStats();
    }
  }

}

function minusstatsMind() {
  if (stats.Mind >= 2) {
    if (enoughpoints === true) {
      stats.Mind--;
      bonusPointsMindCosts();
      bonusPointsCosts();
      displayStats();
    }
  }

}

function plusstatsCharisma() {
  if (stats.Charisma <= 9) {
    if (enoughpoints === true) {
      stats.Charisma++;
      bonusPointsCharismaCosts();
      bonusPointsCosts();
      displayStats();
    }

  }

}

function minusstatsCharisma() {
  if (stats.Charisma >= 2) {
    if (enoughpoints === true) {
      stats.Charisma--;

      bonusPointsCharismaCosts();
      bonusPointsCosts();
      displayStats();
    }

  }

}




var enduranceCosts = 20;

function bonusPointsEnduranceCosts() {

  switch (stats.Endurance) {
    case 1:
      if (stats.Endurance === 1) {
        enduranceCosts = 20;
        enduranceCosts = enduranceCosts + formular.f1;
      }
      break;
    case 2:
      if (stats.Endurance === 2) {
        enduranceCosts = 20;
        enduranceCosts = enduranceCosts + formular.f2;
      }
      break;
    case 3:
      if (stats.Endurance === 3) {
        enduranceCosts = 20;
        enduranceCosts = enduranceCosts + formular.f3;
      }
      break;
    case 4:
      if (stats.Endurance === 4) {
        enduranceCosts = 20;
        enduranceCosts = enduranceCosts + formular.f4;
      }
      break;
    case 5:
      if (stats.Endurance === 5) {
        enduranceCosts = 20;
        enduranceCosts = enduranceCosts + formular.f5;
      }
      break;
    case 6:
      if (stats.Endurance === 6) {
        enduranceCosts = 20;
        enduranceCosts = enduranceCosts + formular.f6;
      }
      break;
    case 7:
      if (stats.Endurance === 7) {
        enduranceCosts = 20;
        enduranceCosts = enduranceCosts + formular.f7;
      }
      break;
    case 8:
      if (stats.Endurance === 8) {
        enduranceCosts = 20;
        enduranceCosts = enduranceCosts + formular.f8;
      }
      break;
    case 9:
      if (stats.Endurance === 9) {
        enduranceCosts = 20;
        enduranceCosts = enduranceCosts + formular.f9;
      }
      break;
    case 10:
      if (stats.Endurance === 10) {
        enduranceCosts = 20;
        enduranceCosts = enduranceCosts + formular.f10;
      }
      break;


  }

}

var strengthCosts = 20;

function bonusPointsStrengthCosts() {

  switch (stats.Strength) {
    case 1:
      if (stats.Strength === 1) {
        strengthCosts = strengthCosts + formular.f1;
        strengthCosts = 20;
      }
      break;
    case 2:
      if (stats.Strength === 2) {
        strengthCosts = 20;
        strengthCosts = strengthCosts + formular.f2;
      }
      break;
    case 3:
      if (stats.Strength === 3) {
        strengthCosts = 20;
        strengthCosts = strengthCosts + formular.f3;
      }
      break;
    case 4:
      if (stats.Strength === 4) {
        strengthCosts = 20;
        strengthCosts = strengthCosts + formular.f4;
      }
      break;
    case 5:
      if (stats.Strength === 5) {
        strengthCosts = 20;
        strengthCosts = strengthCosts + formular.f5;
      }
      break;
    case 6:
      if (stats.Strength === 6) {
        strengthCosts = 20;
        strengthCosts = strengthCosts + formular.f6;
      }
      break;
    case 7:
      if (stats.Strength === 7) {
        strengthCosts = 20;
        strengthCosts = strengthCosts + formular.f7;
      }
      break;
    case 8:
      if (stats.Strength === 8) {
        strengthCosts = 20;
        strengthCosts = strengthCosts + formular.f8;
      }
      break;
    case 9:
      if (stats.Strength === 9) {
        strengthCosts = 20;
        strengthCosts = strengthCosts + formular.f9;
      }
      break;
    case 10:
      if (stats.Strength === 10) {
        agilityCosts = 20;
        strengthCosts = strengthCosts + formular.f10;
      }
      break;


  }
}

var agilityCosts = 20;

function bonusPointsAgilityCosts() {

  switch (stats.Agility) {
    case 1:
      if (stats.Agility === 1) {
        agilityCosts = agilityCosts + formular.f1;
        agilityCosts = 20;
      }
      break;
    case 2:
      if (stats.Agility === 2) {
        agilityCosts = 20;
        agilityCosts = agilityCosts + formular.f2;
      }
      break;
    case 3:
      if (stats.Agility === 3) {
        agilityCosts = 20;
        agilityCosts = agilityCosts + formular.f3;
      }
      break;
    case 4:
      if (stats.Agility === 4) {
        agilityCosts = 20;
        agilityCosts = agilityCosts + formular.f4;
      }
      break;
    case 5:
      if (stats.Agility === 5) {
        agilityCosts = 20;
        agilityCosts = agilityCosts + formular.f5;
      }
      break;
    case 6:
      if (stats.Agility === 6) {
        agilityCosts = 20;
        agilityCosts = agilityCosts + formular.f6;
      }
      break;
    case 7:
      if (stats.Agility === 7) {
        agilityCosts = 20;
        agilityCosts = agilityCosts + formular.f7;
      }
      break;
    case 8:
      if (stats.Agility === 8) {
        agilityCosts = 20;
        agilityCosts = agilityCosts + formular.f8;
      }
      break;
    case 9:
      if (stats.Agility === 9) {
        agilityCosts = 20;
        agilityCosts = agilityCosts + formular.f9;
      }
      break;
    case 10:
      if (stats.Agility === 10) {
        agilityCosts = 20;
        agilityCosts = agilityCosts + formular.f10;
      }
      break;


  }

}
var mindCosts = 0;

function bonusPointsMindCosts() {

  switch (stats.Mind) {
    case 1:
      if (stats.Mind === 1) {
        mindCosts = mindCosts + formular.f1;
        mindCosts = 20;
      }
      break;
    case 2:
      if (stats.Mind === 2) {
        mindCosts = 20;
        mindCosts = mindCosts + formular.f2;
      }
      break;
    case 3:
      if (stats.Mind === 3) {
        mindCosts = 20;
        mindCosts = mindCosts + formular.f3;
      }
      break;
    case 4:
      if (stats.Mind === 4) {
        mindCosts = 20;
        mindCosts = mindCosts + formular.f4;
      }
      break;
    case 5:
      if (stats.Mind === 5) {
        mindCosts = 20;
        mindCosts = mindCosts + formular.f5;
      }
      break;
    case 6:
      if (stats.Mind === 6) {
        mindCosts = 20;
        mindCosts = mindCosts + formular.f6;
      }
      break;
    case 7:
      if (stats.Mind === 7) {
        mindCosts = 20;
        mindCosts = mindCosts + formular.f7;
      }
      break;
    case 8:
      if (stats.Mind === 8) {
        mindCosts = 20;
        mindCosts = mindCosts + formular.f8;
      }
      break;
    case 9:
      if (stats.Mind === 9) {
        mindCosts = 20;
        mindCosts = mindCosts + formular.f9;
      }
      break;
    case 10:
      if (stats.Mind === 10) {
        mindCosts = 20;
        mindCosts = mindCosts + formular.f10;
      }
      break;


  }
}
var magicCosts = 0;

function bonusPointsMagicCosts() {

  switch (stats.Magic) {
    case 1:
      if (stats.Magic === 1) {
        magicCosts = 20;
        magicCosts = magicCosts + formular.f1;
        
      }
      break;
    case 2:
      if (stats.Magic === 2) {
        magicCosts = 20;
        magicCosts = magicCosts + formular.f2;
      }
      break;
    case 3:
      if (stats.Magic === 3) {
        magicCosts = 20;
        magicCosts = magicCosts + formular.f3;
      }
      break;
    case 4:
      if (stats.Magic === 4) {
        magicCosts = 20;
        magicCosts = magicCosts + formular.f4;
      }
      break;
    case 5:
      if (stats.Magic === 5) {
        magicCosts = 20;
        magicCosts = magicCosts + formular.f5;
      }
      break;
    case 6:
      if (stats.Magic === 6) {
        magicCosts = 20;
        magicCosts = magicCosts + formular.f6;
      }
      break;
    case 7:
      if (stats.Magic === 7) {
        magicCosts = 20;
        magicCosts = magicCosts + formular.f7;
      }
      break;
    case 8:
      if (stats.Magic === 8) {
        magicCosts = 20;
        magicCosts = magicCosts + formular.f8;
      }
      break;
    case 9:
      if (stats.Magic === 9) {
        magicCosts = 20;
        magicCosts = magicCosts + formular.f9;
      }
      break;
    case 10:
      if (stats.Magic === 10) {
        magicCosts = 20;
        magicCosts = magicCosts + formular.f10;
      }
      break;


  }
}

charismaCosts = 0;

function bonusPointsCharismaCosts() {

  switch (stats.Charisma) {
    case 1:
      if (stats.Charisma === 1) {
        charismaCosts = 20;
        charismaCosts = charismaCosts + formular.f1;
        
      }
      break;
    case 2:
      if (stats.Charisma === 2) {
        charismaCosts = 20;
        charismaCosts = charismaCosts + formular.f2;
      }
      break;
    case 3:
      if (stats.Charisma === 3) {
        charismaCosts = 20;
        charismaCosts = charismaCosts + formular.f3;
      }
      break;
    case 4:
      if (stats.Charisma === 4) {
        charismaCosts = 20;
        charismaCosts = charismaCosts + formular.f4;
      }
      break;
    case 5:
      if (stats.Charisma === 5) {
        charismaCosts = 20;
        charismaCosts = charismaCosts + formular.f5;
      }
      break;
    case 6:
      if (stats.Charisma === 6) {
        charismaCosts = 20;
        charismaCosts = charismaCosts + formular.f6;
      }
      break;
    case 7:
      if (stats.Charisma === 7) {
        charismaCosts = 20;
        charismaCosts = charismaCosts + formular.f7;
      }
      break;
    case 8:
      if (stats.Charisma === 8) {
        charismaCosts = 20;
        charismaCosts = charismaCosts + formular.f8;
      }
      break;
    case 9:
      if (stats.Charisma === 9) {
        charismaCosts = 20;
        charismaCosts = charismaCosts + formular.f9;
      }
      break;
    case 10:
      if (stats.Charisma === 10) {
        charismaCosts = 20;
        charismaCosts = charismaCosts + formular.f10;
      }
      break;


  }
}





var generatedSheet = "";

function createSheet() {


  //Vars
  var fullname = document.getElementById("fullname").value;
  var gender = document.getElementById("gender").value;


  var sheetSelectedArchtype = document.getElementById("Archtype");
  var sheetArchtype = sheetSelectedArchtype.options[sheetSelectedArchtype.selectedIndex].value;

  var sheetSelectedElementalAffinity = document.getElementById("ElementalAffinity");
  var sheetElementalAffinity = sheetSelectedElementalAffinity.options[sheetSelectedElementalAffinity.selectedIndex].value;

  var starterWeapon = "";
  var starterArmor = "";

  var healthpoints = stats.Endurance;
  var mana = stats.Magic;

  var attackRoll = "";

  var magicDefense = 0;





  var amd = 0;
  var apd = 0;
  var pysicalDefense = 0;

  if (sheetArchtype === "Melee") {
    document.getElementById("primayStats").value = "Endurance, Strength";
    document.getElementById("secondaryStats").value = "Agility";
    stats.Endurance=stats.Endurance+ 1;
    stats.Strength=stats.Strength+ 1;
    attackRoll = "Roll 1d20 + STR";
    starterWeapon = "(SW) Rusted Broadsword | 1d4 damage";
    starterArmor = "(HA) Rusted Chainmail (Max AGI 4)| APD: 6 | AMD: 3 | 2 Slots";

    var fakestat1 = stats.Endurance;
    var fakestat2 = stats.Strength;
    var fakestat3 = stats.Mind;
    var fakestat4 = stats.Magic;
    pysicalDefense=  fakestat1 / 2 + fakestat2 / 2 + 6;
    Math.round(pysicalDefense);
    magicDefense = fakestat3 / 2 + fakestat4 / 2 + 3;
    Math.round(magicDefense);

  }
  if (sheetArchtype === "Ranged" || "Rogue") {
    document.getElementById("primayStats").value = "Agility, Strength";
    document.getElementById("secondaryStats").value = "Endurance";
    stats.Strength= stats.Strength+ 1;
    stats.Agility= stats.Agility + 1;
    attackRoll = "Roll 1d20 + AGI";
    starterWeapon = "(AW) Blunt Dagger | 1d2 damage";
    starterArmor = "(LA) Tattered Jerkin | APD: 3 | AMD: 2 | 3 Slots";
    var fakestat1 = stats.Endurance;
    var fakestat2 = stats.Agility;
    var fakestat3 = stats.Mind;
    var fakestat4 = stats.Magic;
    pysicalDefense=  fakestat1 / 2 + fakestat2 / 2 + 3;
    Math.round(pysicalDefense);
    magicDefense = fakestat3 / 2 + fakestat4 / 2 + 2;
    Math.round(magicDefense);
  }
  if (sheetArchtype === "Caster") {
    document.getElementById("primayStats").value = "Magic, Mind";
    document.getElementById("secondaryStats").value = "Charisma";
    stats.Mind= stats.Mind+  1;
    stats.Magic= stats.Magic +  1;
    starterWeapon = "(AW) Cracked Wand | 1d2 damage | Channel Cost: 1 Mana - 1d3 damage";
    starterArmor = "(CA) Ragged Robe | APD: 1 | AMD: 4 | 2 Slots";
    attackRoll = "Roll 1d20 + MND";
    var fakestat1 = stats.Endurance;
    var fakestat2 = stats.Agility;
    var fakestat3 = stats.Mind;
    var fakestat4 = stats.Magic;
    pysicalDefense=  fakestat1 / 2 + fakestat2 / 2 +1;
    Math.round(pysicalDefense);
    magicDefense = fakestat3 / 2 + fakestat4 / 2 + 4;
    Math.round(magicDefense);
  }



















  generatedSheet = "Name: " + fullname + "\r\nGender: " + gender + "\r\nArchetype: " + sheetArchtype + "\r\nElemental Affinity: " + sheetElementalAffinity + "\r\n\r\n" +
    "Class Level (CL): 1" + "\r\nExperience (EXP): 0/0" + "\r\n\r\n" + "Endurance (END): " + stats.Endurance + "\r\nStrength (STR):  " + stats.Strength + "\r\nAgility (AGI):  " + stats.Agility +
    "\r\nMind (MND):  " + stats.Mind + "\r\nMagic (MAG):  " + stats.Magic + "\r\nCharisma (CHA):  " + stats.Charisma + "\r\n\r\n" + "Health Points (HP): " + healthpoints + "\r\n\r\nMana: " + mana + "\r\nPhysical Defense (PD): " + pysicalDefense + "\r\nMagic Defense (MD): " + magicDefense + "\r\n\r\nEquipped Armor: "
     + starterArmor + "\r\nEquipped Weapon: " + starterWeapon + "\r\n\r\n" + "Attack Roll:" + attackRoll + "\r\nEquipped Items: " + "\r\n\r\n" +"Abilities: "+ "\r\nPassives: "+ "\r\n" + "\r\n\r\n" + "Skills: "+"\r\n\r\n" + "Professions: " + "\r\nGathering Skills: " 
     + "\r\n\r\n" + "Possessions: " + "\r\nGold: 0"+ "\r\n\r\n" + "Log: ";


}
(function() {
  createSheet();

  var textFile = null,
    makeTextFile = function(text) {
      var data = new Blob([text], {
        type: 'text/plain'
      });

      // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.
      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
      }

      textFile = window.URL.createObjectURL(data);

      return textFile;
    };


  var create = document.getElementById('create'),
    textbox = document.getElementById('textbox');

  create.addEventListener('click', function() {
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(generatedSheet);
    link.style.display = 'block';
  }, false);
})();


/*  function calcD(arg1,arg2,arg3) {
    var stepone = arg1/2;
    console.log(stepone);
    Math.round(stepone)
    console.log(stepone);
    var steptwo = arg2/2;
    console.log(steptwo);
    Math.round(steptwo)
    console.log(steptwo);
    pysicalDefense = arg3 + stepone + steptwo;
    console.log(pysicalDefense);
  } */
////////////TEST//////////////////////////////////////
