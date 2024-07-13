import { useState, useEffect, useCallback, useMemo } from 'react'
import { useSoundBgm } from '../hooks/useSoundBgm'

export const useGameStatus = (rowCleared) => {
  const [score, setScore] = useState(0)
  const [rows, setRows] = useState(0)
  const [level, setLevel] = useState(0)

  const [, punchBgm] = useSoundBgm()
  const linePoints = useMemo(() => [40, 100, 300, 1200], [])

  const calcScore = useCallback(() => {
    if (rowCleared > 0) {
      setScore((prev) => prev + linePoints[rowCleared - 1] + (level + 1))
      setRows((prev) => prev + rowCleared)
      punchBgm()
    }
  }, [level, linePoints, rowCleared, punchBgm])

  useEffect(() => {
    calcScore()
  }, [calcScore, rowCleared, score])

  return [score, setScore, rows, setRows, level, setLevel]
}
