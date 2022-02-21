export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62139b48fff730180f300328',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cg2ow8tu',
                  apiId: 'b83ae601-754b-4055-829e-436d6949412a'
                },
                {
                  buildHookId: '62139b484484ec165b01d74f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yv19efoo',
                  apiId: '1f9391f7-89e3-4594-bf69-d596d953280e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PavanGangireddy/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yv19efoo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
