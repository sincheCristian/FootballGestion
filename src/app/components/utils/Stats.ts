export const calculateTeamStats = (matches: any[]) => {
  const total = matches.length || 1;

  const goalsFor = matches.reduce((a, m) => a + m.goalsFor, 0);
  const goalsAgainst = matches.reduce((a, m) => a + m.goalsAgainst, 0);

  const cleanSheets = matches.filter(m => m.goalsAgainst === 0).length;
  const wins = matches.filter(m => m.goalsFor > m.goalsAgainst).length;

  return {
    totalMatches: matches.length,
    winRate: Math.round((wins / total) * 100),
    goalsPerMatch: (goalsFor / total).toFixed(1),
    concededPerMatch: (goalsAgainst / total).toFixed(1),
    possession: Math.round(
      matches.reduce((a, m) => a + m.possession, 0) / total
    ),
    shotsOnTarget: (
      matches.reduce((a, m) => a + m.shotsOnTarget, 0) / total
    ).toFixed(1),
    passAccuracy: Math.round(
      matches.reduce((a, m) => a + m.passesAccuracy, 0) / total
    ),
    cleanSheets
  };
};
