export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7ea35ff1e17b5b6441abbb',
                  title: 'Sanity Studio',
                  name: 'RequestLineFront-studio',
                  apiId: 'c3b7dd95-8aa4-4fd5-a946-11aca3d14682'
                },
                {
                  buildHookId: '5d7ea366f1e17bba2a41aba3',
                  title: 'Blog Website',
                  name: 'RequestLineFront',
                  apiId: '366a695e-bc7c-485f-99f4-15c13e08c02a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bshyman/RequestLineFront',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://RequestLineFront.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
