// Assuming the file is named player-response.interface.ts or similar

export interface Player {
    id: number;
    name: string;
    position: string;
    team: string;
    country: string;
    rating: number;
  }
  
  export interface PlayerResponse {
    data: Player[];
    message: string;
  }
  
  export interface TeamResponse {
    id: number;
    name: string;
    soccerPlayers: Player[];
  }
  