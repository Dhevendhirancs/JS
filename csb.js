var teamScore=0, wickets=0, score1=0, score2=0, currentBall = 0.0, wicketTaken=0;
            var currentBallText="Overs", wicketTakenText="wickets";
            var striker, nonStriker,p=0;
            var players=[1,2,3,4,5,6,7,8,9,10,11];
            var i=0,j=1,c=1,overs=0.0;
            var player1="player1",player2="player2";
            var india=["Rohit", "Dhawan", "Kohli", "Dhoni", "Raina", "Pandya", "Ashwin", "Jadeja", "Bhumra",
                            "Bhuvi", "Umesh"];
            //var australia=[""]
            var australia=["Finch", "Smith", "Warner", "Head", "Alex", "Mitchell", "Maxwell", "Jack", 
                            "Kane", "Billy", "Tye"];
            var indiaScore=[0,0,0,0,0,0,0,0,0,0,0];
            var australiaScore=[0,0,0,0,0,0,0,0,0,0,0];
            var teamScoreIndia=0, teamScoreAustralia=0,indiaWickets,australiaWickets;
            var battingTeam=india;
            var battingTeamName="India";
            var battingTeamScore=indiaScore;
            var innings=1;
            function scoreBoard(){
                for(var i=0;i<11;i++){
                    console.log(india[i]);
                    console.log(playerScore[i]);
                }
            }
            function getUpdate(input){
                    switch(input){
                        case 1:
                            one();
                            break;
                        case 2:
                            two();
                            break;
                        case 3:
                            three();
                            break;
                        case 4:
                            four();
                            break;
                        case 6:
                            six();
                            break;
                        case "wicket":
                            wicket();
                            break;
                        case "wide":
                            wide();
                            break;
                        defualt:
                            console.log("Please Enter correct score");
                    }
            }
            function scoreCard(){
                for(var i=0;i<11;i++){
                    console.log(india[i]);
                    console.log(playerScore[i]);
                }
            }
            function startMatch(){
                striker=battingTeam[i];
                //player1=striker;
                nonStriker=battingTeam[j];
                //player2=nonStriker;
                scoreBoard();
                playersList();
            }
            function one(){
                teamScore+=1;
                if(striker===battingTeam[i]){
                    battingTeamScore[i]+=1;
                }else{
                    battingTeamScore[j]+=1;
                }
                strikeChange();
                if(oversCalculation()===1){
                    scoreBoard();
                    playersList();
                }
            }
            function two(){
                teamScore+=2;
                if(striker===battingTeam[i]){
                    battingTeamScore[i]+=2;
                }else{
                    battingTeamScore[j]+=2;
                }
                if(oversCalculation()===1){
                    scoreBoard();
                    playersList();
                }
            }
            function three(){
                teamScore+=3;
                if(striker===battingTeam[i]){
                    battingTeamScore[i]+=3;
                }else{
                    battingTeamScore[j]+=3;
                }
                strikeChange();
                if(oversCalculation()===1){
                    scoreBoard();
                    playersList();
                }
            }
            function four(){
                teamScore+=4;
                if(striker===battingTeam[i]){
                    battingTeamScore[i]+=4;
                }else{
                    battingTeamScore[j]+=4;
                }
                if(oversCalculation()===1){
                    scoreBoard();
                    playersList();
                }
            }
            function six(){
                teamScore+=6;
                if(striker===battingTeam[i]){
                    battingTeamScore[i]+=6;
                }else{
                    battingTeamScore[j]+=6;
                }
                if(oversCalculation()===1){
                    scoreBoard();
                    playersList();
                }
            }
            function wide(){
                teamScore+=1;
                scoreBoard();
                playersList();
            }
            function wicket(){
                if(striker===battingTeam[i]){
                    if(i<j){
                        i=j+1;
                        striker=battingTeam[i];
                    }else{
                        i=i+1;
                        striker=battingTeam[i];
                    }
                }else{
                    if(j<i){
                        j=i+1;
                        striker=battingTeam[j];
                    }else{
                        j=j+1;
                        striker=battingTeam[j];
                    }
                }
                wicketTaken++;
                if(oversCalculation()===1){
                    scoreBoard();
                }
                playersList();
            }
            function strikeChange(){
                var temp;
                temp=striker;
                striker=nonStriker;
                nonStriker=temp;
            }
            function oversCalculation(){
                if(c<6){
                    if(c%6==0){
                        currentBall=parseInt(currentBall+0.5);
                        overs=currentBall.toFixed(1);
                        c++;
                        strikeChange();
                    }else{
                        currentBall=currentBall+0.1;
                        //currentBall=currentBall.toFixed(1);
                        overs = currentBall.toFixed(1);
                        c++;
                    }
                    return 1;
                }else{
                    if(innings==1){
                        india=battingTeam;
                        indiaScore=battingTeamScore;
                        battingTeam=australia;
                        battingTeamScore=australiaScore;
                        innings++;
                        battingTeamName="Australia";
                        i=0;j=1;
                        teamScoreIndia=teamScore;
                        indiaWicket=wickets;
                        wicketTaken=0;
                        teamScore=0;
                        currentBall=0.0;
                        c=1;
                        overs=0.0;
                        console.log(teamScoreIndia);
                        startMatch();
                        return 1; 
                    }else{
                        australia=battingTeam;
                        australiaScore=battingTeamScore;
                        teamScoreAustralia=teamScore;
                        australiaWickets=wickets;
                        console.log(teamScoreAustralia);
                        endMatch();
                        return 0;
                    }                                                              
                }   
            }
            function playersList(){
                for(p=0;p<11;p++){
                    console.log(battingTeam[p]+" - "+battingTeamScore[p]);
                }
            }
            function scoreBoard(){
                console.log("INNINGS : "+ innings);
                console.log(battingTeamName);
                console.log("**SCORE**")
                console.log(teamScore);
                
                console.log("**WICKETS**");
                console.log(wicketTaken);
                
                console.log("**PLAYER 1**");
                if(striker===india[i]){
                    console.log("striker");
                }
                console.log(battingTeam[i]);
                console.log(battingTeamScore[i]);
                
                console.log("**PLAYER 2**");
                if(striker===india[j]){
                    console.log("striker");
                }
                console.log(battingTeam[j]);
                console.log(battingTeamScore[j]);
                
                console.log("**OVElRS**")
                console.log(overs);
            }
            function endMatch(){
                console.log("************************************************************");
                console.log("Match Ended");
                console.log("************************************************************");
                console.log("India : "+teamScoreIndia);
                console.log("Australia : "+teamScoreAustralia);
                if(teamScoreIndia>teamScoreAustralia){
                    console.log("India won the match");
                }else if(teamScoreIndia===teamScoreAustralia){
                    console.log("Match Tied")
                }
                else{
                    console.log("Australia won the match");
                }
                console.log("Match ended");
                console.log("*************************************************************");
            }