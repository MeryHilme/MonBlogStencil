import { Component } from '@stencil/core';


@Component({
  tag: 'edit-article',
  styleUrl: 'edit-article.css',
  shadow: true
})
export class EditArticle {

  render() {
    return (
<app>
      <div>
          <h1>Edit your article or cancel</h1>
          <stencil-route-link url='/index'>
          <button >Edit</button>
          <button>Cancel</button>
          </stencil-route-link>
      </div>
        </app>
    );
  }
}