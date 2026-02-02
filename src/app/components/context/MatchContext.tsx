import React, { createContext, useContext } from "react";
import { matches } from "../data/Matches";

const MatchContext = createContext<any>(null);

const formatMatch = (match: any) => {
  const status =
    match.goalsFor > match.goalsAgainst
      ? "Victoire"
      : match.goalsFor < match.goalsAgainst
      ? "Défaite"
      : "Nul";

  return {
    ...match,
    result: `${match.goalsFor} - ${match.goalsAgainst}`,
    status,
    type: "Contre-ville"
  };
};

export const MatchProvider = ({ children }: { children: React.ReactNode }) => {
  const formattedMatches = matches.map(formatMatch);

  return (
    <MatchContext.Provider value={{ matches: formattedMatches }}>
      {children}
    </MatchContext.Provider>
  );
};

export const useMatchData = () => useContext(MatchContext);
