import { Component, Prop, State} from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'delete-article',
  //styleUrl: 'delete-article.css';
})
export class DeleteArticle{
    @Prop() article : any[];
    @Prop() match : MatchResults;
    @State() data : any = [];

    deleteArticle() {
        return fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost/" + this.match.params._id, {
         
        method: 'DELETE'
          
        }) .then(response => response.json())
        .then( post => this.data = post)
    }
    render() {
      return (

        <div>
<stencil-route-link url="/index" onClick={() => this.deleteArticle()} ></stencil-route-link>
        </div>
      )
    }
}
