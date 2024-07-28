// @ts-nocheck
import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '@/mdx-components'
import {PageMeta} from "@/lib/definitions";


const rootDirectory = path.join(process.cwd(), 'src', 'data', 'posts')

export const getPostBySlug = async (slug): Promise<{ meta: PageMeta, content: any } | null> => {
  const realSlug = slug.replace(/\.mdx$/, '')

  try {
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

    const { frontmatter, content } = await compileMDX({
      source: fileContent,
      components: useMDXComponents(),
      options: { parseFrontmatter: true }
    })

    return { meta: { ...frontmatter, slug: realSlug }, content }
  } catch (e) {
    return null
  }
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)

  let posts = []

  for (const file of files) {
    const data = await getPostBySlug(file)
    if (data) {
      posts.push(data.meta)
    }
  }

  return posts
}