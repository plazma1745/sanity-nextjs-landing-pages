export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fb379c765199a662158e87e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9wj5irsb',
                  apiId: '911da3a7-c0fb-4351-b337-7970068f2401'
                },
                {
                  buildHookId: '5fb379c7b3f31549a10ef0d5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y9fzsifx',
                  apiId: '6dde7450-dcf6-4f8f-95d2-d09147ac9406'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/plazma1745/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y9fzsifx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
