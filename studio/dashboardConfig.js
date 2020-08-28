export default {
  widgets: [
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
                  buildHookId: '5f48cb09e40cfa5b6a401c69',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9owcxvgn',
                  apiId: '7d9cb9d4-de03-40e1-88a1-87c583365182'
                },
                {
                  buildHookId: '5f48cb091672465a363c59f5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bwa4zzor',
                  apiId: '16695c7e-a480-4c1d-b97d-10f85fb53b3f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattiasmak/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bwa4zzor.netlify.app', category: 'apps'}
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
