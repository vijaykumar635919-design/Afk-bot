const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'TOR-SERVER-IP', // ekhane tor Aternos IP dibi
    port: 25565,
    username: 'TorNam_Bot',
    version: '1.20.1'
  })

  bot.on('spawn', () => {
    console.log('Bot dhuke geche!')
    // Bot lafabe jate AFK na lage
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 5000)
  })

  bot.on('end', () => {
    console.log('Bot beriye geche, abar dhukchi...')
    setTimeout(createBot, 5000)
  })
}
createBot()
