import useSound from 'use-sound'
import pop from '../sound/pop.mp3'
import punch from '../sound/punch.mp3'
import gameOver from '../sound/gameOver.mp3'

export const useSoundBgm = () => {
  const [popBgm] = useSound(pop)
  const [punchBgm] = useSound(punch)
  const [gameOverBgm] = useSound(gameOver)

  return [popBgm, punchBgm, gameOverBgm]
}
