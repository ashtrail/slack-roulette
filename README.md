# Slack Roulette

A simple REST api designed as a slack app to simulate russian roulette games.

For the moment it's not publicly available, if for some reason you want to add it to your workspace you need to :
* add a slack bot
* clone and host the app somewhere (you could also host it locally with ngrok)
* map the hosted url on a slash command of the bot (such as `/roulette`)

There is one state per channel (all states are stored in RAM for the moment)
