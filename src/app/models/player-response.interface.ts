export interface PlayerResponse {
  data: Array<{
    id: number;
    name: string;
    position: string;
    team: string;
    country: string;
  }>;
  message: string;
}
