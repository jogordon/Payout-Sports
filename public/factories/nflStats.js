
angularApp.factory('nflStats', [function() {
   return {
        getLeaderStats: function() {
            var leaders = []
            leaders.push({name: 'Drew Brees', position: 'QB', team: 'NO', ftsyPts: 30, passYds: 325, passTds: 3});
            leaders.push({name: 'DeMarco Murray', position: 'RB', team: 'PHL', ftsyPts: 27, rushYds: 145, rushTds: 3});
            leaders.push({name: 'Calvin Johnson', position: 'WR', team: 'DET', ftsyPts: 26, recvYds: 130, recvTds: 2});
            leaders.push({name: 'Ravens', position: 'DEF', team: 'BAL', ftsyPts: 23, sacks: 6, rtrnTds: 1, TO: 2});
            return leaders;
        }
   }
}]);