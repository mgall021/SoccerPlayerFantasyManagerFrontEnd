# Soccer Player Manager Frontend Project built with Angular

## Description 
The frontend portion of my Soccer Manager project is tailored for soccer enthusiasts seeking a seamless experience in creating and managing their fantasy soccer teams. Built using Angular, TypeScript, and Bootstrap, this user-friendly interface offers personalized user profiles, simplifying the user journey. Soccer player categorization, based on attributes such as name, country, and position, facilitates effortless player discovery.

With this frontend, users have the freedom to curate their ideal soccer dream teams, with the ability to add, update, and remove players at their discretion. The integration with our robust monolithic backend ensures data security and effective management through CRUD operations and an in-memory database. This frontend creates a user-centric platform, enhancing the soccer fan experience and delivering a tailored environment for soccer enthusiasts

# User Stories
As a user, I want to be able to see a list of my fantasy teams.

As a user, I want to create a new fantasy team.

As a user, I want to be able to add players to my team.

As a user, I want to be able to remove players from my team.

As a user, I want to be able to update my player list. 

As a user, I want to see my fantasy team's weekly rating and player ratings.

## Entity Relationship Diagram (ERD)
***
[Soccer Fantasy Team Manager ERD.pdf](https://github.com/mgall021/SoccerFantasyTeamAPI/files/13188852/Soccer.Fantasy.Team.Manager.ERD.pdf)

## API Endpoints
***
<details>
  <summary> <b>User Endpoints</b></summary>

| HTTP Methods | Endpoint URL                         | Functionality           | Access    | 
|--------------|--------------------------------------|-------------------------|-----------|
| POST         | `/auth/users/register/`              | Register a new user     | public    |
| POST         | `/auth/users/login/`                 | Login a registered user | public    |
| PUT          | `/auth/users/{userId}`                       | Update a User           | private   |
| GET          | `/auth/users/{userId}`                       | Get a User by Id        | private   |
| DELETE       | `/auth/users/{userId}/`               | Delete a User           | private   |

</details>
<details>
  <summary> <b>SocerPlayer Endpoints</b></summary>

| HTTP Methods | Endpoint URL                         | Functionality      | Access  | 
|--------------|--------------------------------------|--------------------|---------|
| GET          | `/api/soccerplayers`              | Get all players     | private |
| GET          | `/api/soccerplayers/name/{name}`                 | Get a player by name   | private |
| GET          | `/api/soccerplayers/{id}`                       | Get players by Id | private |
| GET          | `/api/soccerplayers/country/{country}`                       | Get players by country name | private |
| GET          | `/api/soccerplayers/position/{position}`                       | Get players by their position | private |
| GET          | `/api/soccerplayers/team/{team}`                       | Get players by their team | private |

</details>
<details>
  <summary> <b>Fantasy Team Endpoints</b></summary>

| HTTP Methods | Endpoint URL                         | Functionality           | Access    | 
|--------------|--------------------------------------|-------------------------|-----------|
| GET         | `/api/fantasyTeam/{userId`              | Return a list for given user   | public    |
| POST         | `/api/fantasyTeam`                 | create a new fabtasy Team object| public    |
| PUT          | `/api/fantasyTeam/{teamid}/addPlayer/{playerid}`                       | adds a player to team          | private   |
| PUT          | `/api/fantasyTeam/{teamid}/addPlayer/{playerid}`                       | removes a player from the team       | private   |
| DELETE       | `/api/fantasyTeam/{teamId}`               | Delete a fantasy Team           | private   |

</details>

## Project Management

In managing the frontend of this project, I adopted a structured approach by utilizing different branches, each serving a specific purpose. This allowed for a clear separation of tasks and functionalities, enhancing collaboration and organization throughout the development process. Additionally, I meticulously planned and created sketches to visualize and define the frontend's design and layout, ensuring that it aligns with the project's objectives and user experience goals. Microsoft OneNote served as my primary planner, facilitating efficient organization and documentation of project-related details.

## Challenges

My most significant challenge during this project was the seamless propagation of JWT tokens and user IDs throughout the entire application. Ensuring consistent and secure access across various parts of the program required meticulous attention to detail and thorough integration, but overcoming this obstacle contributed significantly to the project's success.

### Acknowledgments

I'd like to express my heartfelt gratitude to everyone who contributed to the success of this project. Special thanks to my company, Interapt, for providing the support and resources necessary for this endeavor.

I also want to extend my appreciation to my dedicated instructors, Leo, Dhrubo, and Suresh, whose guidance and expertise were instrumental throughout this journey. Additionally, a big shoutout to Kerry for her unwavering support and presence week after week.

Your collective efforts and encouragement have been invaluable, and I couldn't have accomplished this without you all. Thank you for being a part of this project's success.










