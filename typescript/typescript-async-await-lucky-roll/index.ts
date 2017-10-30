const players = ["Tom", "Dick", "Harry"]

const nextPlayer = (players:string[], player:number):number => {
  if (player === players.length - 1) {
    return 0
  }
  return player + 1
}

const blastSync = (): boolean => {
  return Math.floor(Math.random() * 6) == 0
}

const blastCallback = (callback: Function):void => {
  setTimeout(() => callback(blastSync()), 100)
}

const blastPromise = () => {
  return new Promise<boolean>((resolve: Function, reject: Function) => {
    setTimeout(
      () => resolve(blastSync()),
      200
    )
  })
}

const luckyRollCallback = (next?: Function):void => {
  const luckyRoll =  (players:string[], player:number):void => {
    setTimeout(() => {
      if (blastSync()) {
        console.log("blast!", players[player], "is dead.")
        next()
      } else {
        console.log("miss,", players[player], "survives")
        luckyRoll(players, nextPlayer(players, player))
      }
    }, 500)
  }
  luckyRoll(players, 0)
}

const sleepPromise = () => new Promise<boolean>((resolve:Function) => {
  setTimeout(() => resolve(blastSync()), 500)
})

const luckyRollPromise = () => {
  const iterator = (players:string[], player:number):Promise<void> => sleepPromise()
    .then(blast => {
      if (blast) {
        console.log("blast!", players[player], "is dead.")
        return Promise.resolve()
      } else {
        console.log("miss,", players[player], "survives")
        return iterator(players, nextPlayer(players, player))
      }
    })
  return iterator(players, 0)
}

const luckyRollAsyncAwait = async () => {
  let player = 0
  while (true) {
    const blast = await sleepPromise()
    if (blast) {
      console.log("blast!", players[player], "is dead.")
      return
    } else {
      console.log("miss,", players[player], "survives")
      player = nextPlayer(players, player)
    }
  }
}

const runAll = async () => {
  await luckyRollAsyncAwait()
  console.log("luckyRollAsyncAwait is done")
  await luckyRollPromise()
  console.log("luckyRollPromise is done")
  luckyRollCallback(() => console.log("luckyRollCallback is done"))
}

// luckyRollCallback()
// luckyRollPromise()
// luckyRollAsyncAwait()
runAll()