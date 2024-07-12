import { useState, useEffect, useCallback } from 'react'

export const useGameStatus = (rowCleared) => {
  const [score, setScore] = useState(0)
  const [rows, setRows] = useState(0)
  const [level, setLevel] = useState(0)

  const linePoints = [40, 100, 300, 1200]

  const calcScore = useCallback(() => {
    if (rowCleared > 0) {
      setScore((prev) => prev + linePoints[rowCleared - 1] + (level + 1))
      setRows((prev) => prev + rowCleared)
    }
  }, [level, linePoints, rowCleared])

  useEffect(() => {
    calcScore()
  }, [calcScore, rowCleared, score])

  return [score, setScore, rows, setRows, level, setLevel]
}
