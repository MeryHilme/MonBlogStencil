import { Component, Prop, State} from '@stencil/core';
import { MatchResults } from '@stencil/router';



@Component({
    tag:'view-details',
  // styleUrl: 'all-articles.css',

})


export class ViewDetails{
    @Prop() match: MatchResults;
    @State() art: any;
 @State() data : any = [];
  

 load() {

        
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost',
    )
      

    .then((response: any) => {
        return response.json()
      }).then(( data) => {
        this.data = data;
      });

  }


render(){
        return(

  
       
 <table>
                <tr>
                  <td class="title">{this.art.title}</td>
                  <td></td>
                </tr> 
                <tr>
                  <td>{this.art.article}</td>
                  <td></td>
                </tr> 
                <tr>
    <td> {this.art.autor} 
      </td>
               
                </tr>
       
               </table>
          )}
        
 

  ComponentWillLoad() {
    let id_art = this.match.params._id;
    return fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost/` +id_art)
      .then(response => response.json())
      .then(data => {
        this.art = data;
      //console.log(data);
      
    });
}
  }
