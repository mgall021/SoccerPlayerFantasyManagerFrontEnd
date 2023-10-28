/**
 * Represents the details of a soccer player.
 */

export interface Player {
  id: number;
  name: string;
  position: string;
  team: string;
  country: string;
  rating: number;
}
/**
 * Represents the response structure for player related API calls.
 */
export interface PlayerResponse {
  data: Player[];
  message: string;
}
/**
 * Represents the details and structure of a soccer fantasy team.
 */
export interface TeamResponse {
  id: number;
  name: string;
  soccerPlayers: Player[]; // used for grabbibg the correct info each player
}
