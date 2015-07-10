home.controller('tickerCtrl', ['$scope', 'nflStats',function($scope, nflStats) {
    var sIndex = 0;
    var pIndex = 0;
    var sportArray = ["NFL", "MLB", "NBA", "PGA"];
    var positionMatrix = [["ALL", "QB", "RB", "WR", "TE", "K", "DEF"],
                          ["ALL", "P", "C", "1B", "2B", "3B", "LF", "CF", "RF"],
                          ["ALL", "PG", "SG", "PF", "SF", "C"],
                          ["ALL"]];
    
    var leaders = nflStats.getLeaderStats();
    
    $scope.sport = sportArray[pIndex];
    $scope.position = positionMatrix[sIndex] [pIndex];
    
    $scope.statfeed = "";
    
    function setFeed(){
        var feed =  "WEEK 1 FANTASY LEADERS: ";
        for(var i = 0; i < leaders.length; i++) {
            var player = leaders[i];
            if($scope.position == "ALL" || $scope.position == player.position) {
                feed += player.name.toUpperCase() + " " + player.ftsyPts + " PTS, ";
                var threshold = player.ftsyPts * 0.15;
                if ((player.passYds / 25) > threshold) {
                    feed += player.passYds + " PASS YDS, ";
                }
                if ((player.rushYds / 10) > threshold) {
                    feed += player.rushYds + " RUSH YDS, ";
                }
                if ((player.recvYds / 10) > threshold) {
                    feed += player.recvYds + " RECV YDS, ";
                }
                if (player.passTds > 0) {
                    feed += player.passTds + " PASS TDS, ";
                }
                if (player.rushTds > 0) {
                    feed += player.rushTds + " RUSH TDS, ";
                }
                if (player.recvTds > 0) {
                    feed += player.recvTds + " RECV TDS, ";
                }
                if (player.ints > 0) {
                    feed += player.ints + " INTS, ";
                }
                if (player.sacks > 0) {
                    feed += player.sacks + " SACKS, ";
                }
                if (player.funbles > 0) {
                    feed += player.fumbles + " FUMBLES, ";
                }
                if (player.safties > 0) {
                    feed += player.safeties + " SAFETIES, ";
                }
                if (player.rtrnTds > 0) {
                    feed += player.rtrnTds + " RETURN TDS, ";
                }
                if (player.fieldGl && player.fieldGl.length > 0) {
                    feed += player.fieldGl.length + " FIELD GOALS ";
                }
            }
        }
        $scope.statfeed = feed;
    };
    
    setFeed();
    
    $scope.sportUp = function(){
        sIndex = ++sIndex % sportArray.length;
        pIndex = 0;
        $scope.sport = sportArray[sIndex];
        $scope.position = positionMatrix[sIndex][pIndex];
        setFeed();
    };

    $scope.sportDown = function(){
        sIndex = (sportArray.length + --sIndex) % sportArray.length;
        pIndex = 0;
        $scope.sport = sportArray[sIndex];
        $scope.position = positionMatrix[sIndex][pIndex];
        setFeed();
    };
    
    $scope.positionUp = function(){
        pIndex = ++pIndex % positionMatrix[sIndex].length;
        $scope.position = positionMatrix[sIndex][pIndex];
        setFeed();
    };

    $scope.positionDown = function(){
        pIndex = (positionMatrix[sIndex].length + --pIndex) % positionMatrix[sIndex].length;
        $scope.position = positionMatrix[sIndex][pIndex];
        setFeed();
    };
    
    
}]);