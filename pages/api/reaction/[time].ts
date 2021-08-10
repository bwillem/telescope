import type { NextApiHandler } from 'next'
import data from '../../../data/data.json'

export interface ReactionSnapshot {
  "Time (s)": number,
  "C": number,
  "A": number,
  "B": number,
  "D": number,
  "cat": number,
}

/**
 * find the closest numerical match in an array of objects
 * and return that item
 * 
 * ex:
 * let y = [{ x: 1 }, { x:4 }, { x: 6 }]
 * getClosest({ attr: 'x', set: y, goal: 2 })
 * // returns { x: 1 }
 *
 */
const getClosest = <T extends { [key: string]: any }>({ attr, set, goal }: { attr: string, set: Array<T>, goal: number }): T =>
  set.reduce((prev, curr) =>
    Math.abs(curr[attr] - goal) < Math.abs(prev[attr] - goal) ? curr : prev
  )

const handler: NextApiHandler<ReactionSnapshot> = async (req, res) => {
  const time = Math.round(parseInt(req.query.time as string) / 1000)
  const snapshot = getClosest<ReactionSnapshot>({ attr: 'Time (s)', set: data.data, goal: time })
  res.status(200).json(snapshot)
}

export default handler
