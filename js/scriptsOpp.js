//These are kaibas deck cards
var SDK_001 = {id:"SDK-001"};
var SDK_002 = {id:"SDK-002"};
var SDK_003 = {id:"SDK-003"};
var SDK_004 = {id:"SDK-004"};
var SDK_005 = {id:"SDK-005"};
var SDK_006 = {id:"SDK-006"};
var SDK_007 = {id:"SDK-007"};
var SDK_008 = {id:"SDK-008"};
var SDK_009 = {id:"SDK-009"};
var SDK_010 = {id:"SDK-010"};
var SDK_011 = {id:"SDK-011"};
var SDK_012 = {id:"SDK-012"};
var SDK_013 = {id:"SDK-013"};
var SDK_014 = {id:"SDK-014"};
var SDK_015 = {id:"SDK-015"};
var SDK_016 = {id:"SDK-016"};
var SDK_017 = {id:"SDK-017"};
var SDK_018 = {id:"SDK-018"};
var SDK_019 = {id:"SDK-019"};
var SDK_020 = {id:"SDK-020"};
var SDK_021 = {id:"SDK-021"};
var SDK_022 = {id:"SDK-022"};
var SDK_023 = {id:"SDK-023"};
var SDK_024 = {id:"SDK-024"};
var SDK_025 = {id:"SDK-025"};
var SDK_026 = {id:"SDK-026"};
var SDK_027 = {id:"SDK-027"};
var SDK_028 = {id:"SDK-028"};
var SDK_029 = {id:"SDK-029"};
var SDK_030 = {id:"SDK-030"};
var SDK_031 = {id:"SDK-031"};
var SDK_032 = {id:"SDK-032"};
var SDK_033 = {id:"SDK-033"};
var SDK_034 = {id:"SDK-034"};
var SDK_035 = {id:"SDK-035"};
var SDK_036 = {id:"SDK-036"};
var SDK_037 = {id:"SDK-037"};
var SDK_038 = {id:"SDK-038"};
var SDK_039 = {id:"SDK-039"};
var SDK_040 = {id:"SDK-040"};
var SDK_041 = {id:"SDK-041"};
var SDK_042 = {id:"SDK-042"};
var SDK_043 = {id:"SDK-043"};
var SDK_044 = {id:"SDK-044"};
var SDK_045 = {id:"SDK-045"};
var SDK_046 = {id:"SDK-046"};
var SDK_047 = {id:"SDK-047"};
var SDK_048 = {id:"SDK-048"};
var SDK_049 = {id:"SDK-049"};
var SDK_050 = {id:"SDK-050"};





var oppDeck = [];// created opponent empty deck []
var oppHand = [];// created opponent empty hand []
var oppMonsters = []; // created opponent monster zone []
var oppTraps= []; //created array for opponent trap zone[]
var oppGraveyard = []; //created opponent graveyard
var oppCurrentHandSize=0;



//this is for kaibas deck, add all his cards to his deck
for (i=1;i<=50;i++){
  // console.log(i);
  if(i<10){
    myConcat2 = this["SDK_00"+i];
    // console.log(myConcat2);
    oppDeck.push(myConcat2);
  }
  else if(i>=10){
    myConcat2 = this["SDK_0"+i];
    oppDeck.push(myConcat2);
  }
};
console.log(oppDeck);

var opponentHandZone= document.querySelectorAll(".opponentHandZone"); //grab all opponent hand zones
console.log("opp hand zone are");
console.log(opponentHandZone);
var opponentMonsterZone = document.querySelectorAll(".opponentMonsterZone");//grab all opponents monsters zones
//this function adds cards to opphand
document.getElementById("opponentDeckZone").addEventListener("click", opponentDrawCard);
function opponentDrawCard(e){
  if(5<(oppHand.length)){
    alert("Oppenent hand is full");
  }else{
    e.preventDefault();
    oppHand.push(oppDeck.shift()); //remove from opp deck and add to oppHandarray
    console.log("oppHand is");
    console.log(oppHand);
    console.log("oppDeck is");
    console.log(oppDeck);
    opponentUpdateBoardHand();
  //  updateBoardMonsters();    //we need this function
  }
}




function opponentUpdateBoardHand(){
    var oppNewCardIndex= (oppHand.length)-1 ; //myHand is empty array// length returns how many, not index
    console.log(oppNewCardIndex);
    var i=0;
    for( i=0; i<=oppNewCardIndex; i++){
      console.log("opp update handloop entered"+i);
      var node = document.createElement("IMG");// created <img></img>
      var daImage= "img/"+ oppHand[i].id + ".jpg"; //created string "img/SDY-001"
      console.log(oppHand[i].id);
      console.log(daImage);
      node.setAttribute("src",daImage); //<img src="daImage">
      node.setAttribute("width","60"); //<img src="daImage" width="80"></img>
      var textnode = document.createTextNode(oppHand[i].name);  //name of card
      console.log(textnode);
      node.appendChild(textnode);//<p>Dark Magician</p>
      console.log(node);
      //matches[handSize].appendChild(node);
      opponentHandZone[i].replaceChild(node, opponentHandZone[i].childNodes[1]); //this adds <img src="SDY-000"></img>
      console.log(myHandZone);
    }
    console.log("forloopOppBoardMonsters counterfinsished at"+i);
      //this part clears the old images
    for (i; i<=5;i++){
      var node= document.createElement("IMG");

      opponentHandZone[i].replaceChild(node, opponentHandZone[i].childNodes[1]); //this adds <img src="SDY-000"></img>
    }
    console.log("update oppBoardHand exit");
      // boardUpdate();
};




//this function will remove opponent card from hand and into monster card zone
document.getElementById("opponentHandZone1").addEventListener("click", summonCard1);
function summonCard1(e){
  console.log("summon card funct activated");
  console.log(myMonsters.length);     //myMonsters is an array
  e.preventDefault();//we need this so the page does not refresh
  if(5<=myMonsters.length){
    alert("monsterZone card full")
  }else{
    //splice(index,howMany)
    var tempMoveFromHandToMonsterZone = myHand.splice(0,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
    myMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
    updateBoardMonsters();  }
  updateBoardHand();
} //hand was changed


  /////This is beta
  //this function will remove card from hand and into monster card zone
  document.getElementById("opponentHandZone1").addEventListener("click", summonCard1opponent);
  function summonCard1opponent(e){
    console.log("summon card funct activated");
    console.log(oppMonsters.length);     //opponentMonsters is an array
    e.preventDefault();//we need this so the page does not refresh
    if(5<=oppMonsters.length){
      alert("monsterZone card full")
    }else{
      //splice(index,howMany)
      var tempMoveFromHandToMonsterZone = oppHand.splice(0,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
      oppMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
      opponentUpdateBoardMonsters();   //this one doesnt exist yet, finish it line 470
    }
      opponentUpdateBoardHand();

    } //hand was changed


    //thsi function needs to be finsihed
    function opponentUpdateBoardMonsters(){
      alert("entererd opp updateBoardMonsters");
      console.log("oppHand is");
      console.log(oppHand);
      console.log("oppMonsters are");
      console.log(oppMonsters);
      for(i=0; i<oppMonsters.length; i++){
        var node= document.createElement("IMG");
        var image= "img/"+ oppMonsters[i].id +".jpg"; //created string "img/SDK-001.jpg"
        node.setAttribute("src", image );
        node.setAttribute("width", "60");
        console.log(node);
        opponentMonsterZone[i].replaceChild(node, opponnentMonsterZone[i].childNodes[1]);
      }
      for (i; i<=4;i++){
        var node= document.createElement("IMG");
        opponentMonsterZone[i].replaceChild(node,opponentMonsterZone[i].childNodes[1]);
      }

    };