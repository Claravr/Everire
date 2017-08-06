//Made by Clara Blackthorn
var END = 4;
var STR = 4;
var AGI = 4;
var MAG = 4;
var MND = 4;
var CHA = 4;
var debug = true;
var points = 20;
var hidden = false;

//Debug
var mtest = 20 + 1;
var mtest2 = 20 - 1;

if (debug = false) {
  console.log("END: " + END);
  console.log("STR: " + STR);
  console.log("AGI: " + AGI);
  console.log("MAG: " + MAG);
  console.log("MND: " + MND);
  console.log("CHA: " + CHA);
  console.log("Points: " + points);
  console.log("Math test: " + mtest + "= 21 " + mtest2 + "= 19");
};
displayStats();
var enoughpoints = true;

function pluscheckpoints(args) {

  if (args == 5 && points < 1) {
    enoughpoints = false;
  }
  if (args = 6 && points < 3) {
    enoughpoints = false;
  }
  if (args = 7 && points < 5) {
    enoughpoints = false;
  }
  if (args = 8 && points < 8) {
    enoughpoints = false;
  }
  if (args = 9 && points < 11) {
    enoughpoints = false;
  }
  if (args = 10 && points < 15) {
    enoughpoints = false;
  }

}

var plusgi = document.querySelector(".plusgrayout");
var minusgi = document.querySelector(".minusgrayout");

function plusgrayitout() {

  plusgi.style.backgroundColor = "#888888";
};

function minusgrayitout() {

  minusgi.style.backgroundColor = "#888888";
};

function plusEND() {
  pluscheckpoints(plusEND);
  if (END <= 9) {
    if (enoughpoints = true) {
      END++;
      pointCosts(END);
      displayStats();
      minusgrayitout();
    }
  }
  document.getElementById('minusEND').removeAttribute("onclick");


}

function minusEND() {
  if (END >= 2) {
    if (enoughpoints = true) {
      END--;
      pointCosts(END);
      displayStats();
      plusgrayitout();
    }
  }
  document.getElementById('plusEND').removeAttribute("onclick");
}


function plusSTR() {
  if (STR <= 9) {
    if (enoughpoints = true) {
      STR++;
      pointCosts(STR);
      displayStats();
    }
  }



}

function minusSTR() {
  if (STR >= 2) {
    if (enoughpoints = true) {
      STR--;
      pointCosts(STR);
      displayStats();
    }
  }

}

function plusAGI() {
  if (AGI <= 9) {
    if (enoughpoints = true) {
      AGI++;
      pointCosts(AGI);
      displayStats();
    }
  }

}

function minusAGI() {
  if (AGI >= 2) {
    if (enoughpoints = true) {
      AGI--;
      pointCosts(AGI);
      displayStats();
    }
  }

}

function plusMAG() {
  if (MAG <= 9) {
    if (enoughpoints = true) {
      MAG++;
      pointCosts(MAG);
      displayStats();
    }
  }

}

function minusMAG() {
  if (MAG >= 2) {
    if (enoughpoints = true) {
      MAG--;
      pointCosts(MAG);
      displayStats();
    }
  }

}

function plusMND() {
  if (MND <= 9) {
    if (enoughpoints = true) {
      MND++;
      pointCosts(MND);
      displayStats();
    }
  }

}

function minusMND() {
  if (MND >= 2) {
    if (enoughpoints = true) {
      MND--;
      pointCosts(MND);
      displayStats();
    }
  }

}

function plusCHA() {
  if (CHA <= 9) {
    if (enoughpoints = true) {
      CHA++;
      pointCosts(CHA);
      displayStats();
    }

  }

}

function minusCHA() {
  if (CHA >= 2) {
    if (enoughpoints = true) {
      CHA--;

      pointCosts(CHA);
      displayStats();
    }

  }

}

function pointCosts(args) {

  switch (args) {
    case 1:
      points = points + 3;

      displayStats();
      break;
    case 2:
      points = points + 2;

      displayStats();
      break;
    case 3:
      points = points + 1;

      displayStats();
      break;
    case 4:
      points = points + 1;

      displayStats();
      break;
    case 5:
      points = points - 1;

      displayStats();
      break;
    case 6:
      points = points - 3;

      displayStats();
      break;
    case 7:
      points = points - 5;

      displayStats();
      break;
    case 8:
      points = points - 8;

      displayStats();
      break;
    case 9:
      points = points - 11;

      displayStats();
      break;
    case 10:
      points = points - 15;

      displayStats();
      break;
  }

};

function pointCostsMinues(args) {

  switch (args) {
    case 1:
      points = points + 3;

      displayStats();
      break;
    case 2:
      points = points + 2;

      displayStats();
      break;
    case 3:
      points = points + 1;

      displayStats();
      break;
    case 4:
      points = points + 1;

      displayStats();
      break;
    case 5:
      points = points + 1;

      displayStats();
      break;
    case 6:
      points = points + 3;

      displayStats();
      break;
    case 7:
      points = points + 5;

      displayStats();
      break;
    case 8:
      points = points + 8;

      displayStats();
      break;
    case 9:
      points = points + 11;

      displayStats();
      break;
    case 10:
      points = points + 15;

      displayStats();
      break;
  }

};
/*
function createButtons(){

  //TEXT
  var ENDp = document.createElement("P");;
  var ENDt = document.createTextNode("Endurance: " + END);
  ENDp.appendChild(ENDt);
  ENDp.id = 'htmlEND';
  document.body.appendChild(ENDp);
  //BUTTON PLUS
  var ENDbp = document.createElement("BUTTON");
  var ENDbtp = document.createTextNode("+");
  ENDbp.appendChild(ENDbtp);
  document.body.appendChild(ENDbp);
  ENDbp.onclick = function(){
    if (END <= 9) { if (enoughpoints = true) {
      END = END + 1;
      pointCosts(END);
      displayStats();
    };
  };
  var ENDbm = document.createElement("BUTTON");
  var ENDbtm = document.createTextNode("-");
  ENDbm.appendChild(ENDbtm);
  document.body.appendChild(ENDbm);
  ENDbm.onclick = function(){
  pointCostsMinues(END);
    if (END >= 2) { if (enoughpoints = true) {
      END = END - 1;



            displayStats();

    };
  };


};



*/
function displayStats() {
  document.getElementById("endurance").value = END;
  document.getElementById("strength").value = STR;
  document.getElementById("agilility").value = AGI;
  document.getElementById("magic").value = MAG;
  document.getElementById("mind").value = MND;
  document.getElementById("charisma").value = CHA;
  document.getElementById("points").innerHTML = "Bonus Points " + points;
  console.log("Displayed Stats!");
}
displayStats();
