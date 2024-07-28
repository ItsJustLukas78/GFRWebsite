import fs from 'fs'
import path from 'path'
import { TeamMeta } from "@/lib/definitions"

const rootDirectory = path.join(process.cwd(), 'src', 'data', 'teams')

export const getTeamBySlug = async (slug: string): Promise<{ content: TeamMeta } | null> => {
  const filePath = path.join(rootDirectory, `${slug}.JSON`)

  try {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const content = JSON.parse(fileContent) as TeamMeta

    return { content }
  } catch (e) {
    return null
  }
}

export const getAllTeamMeta = async (): Promise<TeamMeta[]> => {
  const files = fs.readdirSync(rootDirectory)

  let teams: TeamMeta[] = []

  for (const file of files) {
    const data = await getTeamBySlug(file)
    if (data) {
      teams.push(data.content)
    }
  }

  return teams
}
