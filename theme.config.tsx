import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Cloud Native Docs</span>,
  project: {
    link: 'https://github.com/darioristic/cn-docs',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/darioristic/cn-docs',
  footer: {
    text: 'Cloud Native Internal Documentation',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Cloud Native Docs'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Cloud Native Internal Documentation" />
    </>
  ),
  primaryHue: 210,
  primarySaturation: 100,
}

export default config
