import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css'
  
};



//what i 've added

exports.config = {
  bundles:[
    {components: ['my-app']},
    {components: ['view-all','page-all-articles','add-articles','edit-article'] }
  
         ],
  collections: [
    {
      name: '@stencil/router' }
    
  ]
};

exports.devserver = {
  root:'www',
  watchGlob:'**/**'
}