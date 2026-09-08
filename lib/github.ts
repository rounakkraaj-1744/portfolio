export interface GithubContribution {
  date: string
  count: number
  level: number
}

export interface GithubContributions {
  username: string
  year: number
  total: number
  contributions: GithubContribution[]
  repositories: number
}

const USERNAME = "rounakkraaj-1744"

export async function getGithubContributions(): Promise<GithubContributions> {
  const year = new Date().getUTCFullYear()
  try {
    const [contributionsResponse, profileResponse] = await Promise.all([
      fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=${year}`, { next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${USERNAME}`, { next: { revalidate: 3600 }, headers: { Accept: "application/vnd.github+json" } }),
    ])
    if (!contributionsResponse.ok) throw new Error(`GitHub contributions returned ${contributionsResponse.status}`)
    const data = await contributionsResponse.json() as { total?: Record<string, number>; contributions?: GithubContribution[] }
    const profile = profileResponse.ok ? await profileResponse.json() as { public_repos?: number } : {}
    const contributions = data.contributions ?? []
    return { username: USERNAME, year, total: data.total?.[String(year)] ?? contributions.reduce((sum, day) => sum + day.count, 0), repositories: profile.public_repos ?? 0, contributions }
  } catch {
    return { username: USERNAME, year, total: 0, repositories: 0, contributions: [] }
  }
}
