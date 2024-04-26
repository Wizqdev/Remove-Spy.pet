# SpyBotPreventer Discord Bot

SpyBotPreventer is a Discord bot designed to automatically ban any spy.pet bot accounts listed on the internet from joining your server.

## Features
- Automatically bans spy.pet bot accounts.
- Easy setup with environment variables.

## Setup
1. **Clone the Repository:**
```bash
git clone https://github.com/Wizqdev/Remove-Spy.pet.git
```
2. **Install Dependencies:**
```bash
cd Remove-Spy.pet
npm install
```
3. **Fill in Environment Variables:**
- Open the `.env` file.
- Fill in the required fields:
  ```
  BotToken="YOUR_DISCORD_BOT_TOKEN"
  BotID="YOUR_DISCORD_BOT_ID"
  GuildID="YOUR_DISCORD_SERVER_GUILD_ID"
  ```
  Replace `"YOUR_DISCORD_BOT_TOKEN"`, `"YOUR_DISCORD_BOT_ID"`, and `"YOUR_DISCORD_SERVER_GUILD_ID"` with your actual bot token, bot ID, and Discord server guild ID respectively.
4. **Save the Changes to the `.env` File.**


## Usage
- **Start the Bot:**
```bash
node index.js
```

## Important Note
- **Guild ID Required:** Please ensure that you provide the correct Guild ID in the `.env` file. Without the Guild ID, the bot won't function properly.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).