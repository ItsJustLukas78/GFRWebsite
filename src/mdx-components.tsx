import type { MDXComponents } from 'mdx/types'
import { Button } from '@/components/Button'
import Image, { ImageProps } from 'next/image'


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Button: () => <Button href="/"> </Button>,
    Break: (props) => <p className="my-6 text-center">—</p>,
    Image: (props) => (
      <div className="my-6 sm:my-8">
        <Image
          width={800}
          height={600}
          {...(props as ImageProps)}
        />
        {props.caption && <p className="mt-2 text-left text-sm text-neutral-400">{props.caption}</p>}
      </div>
    ),
    ...components,
  }
}