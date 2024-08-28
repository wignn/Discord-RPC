Discord RPC
This is a custom Discord Rich Presence (RPC) integration. Follow the instructions below to set it up and run the project.

Requirements
Node.js installed on your machine.
Administrator privileges for the command prompt.
Setup

1. Clone the Repository
Clone this repository to your local machine:

```
git clone https://github.com/wignn/Discord-RPC.git
cd Discord-RPC
```
2. Install Dependencies
Install the necessary dependencies by running:

npm install
3. Configure Environment Variables
Open the .env file in the root directory and set your Discord application's CLIENT_ID:

makefile
Copy code
CLIENT_ID=your_discord_client_id
4. Configure config.json
In the src folder, you will find a config.json file. Update this file with your desired configuration, such as state, details, and other RPC settings.

Example configuration:

json
```
{
  "state": "Playing some cool game",
  "details": "Level 5 - Dungeon",
  "largeImageKey": "game_icon",
  "largeImageText": "Game Name",
  "smallImageKey": "player_icon",
  "smallImageText": "Player Name",
  "partySize": 1,
  "partyMax": 5
}
```

5. Run as Administrator
It's important to run the following commands using an Administrator Command Prompt:

Open Command Prompt as Administrator.
Navigate to your project directory.

6. Start the Application
To start the Discord RPC application, run:

```
node src/index.js
```
or instal node demon
