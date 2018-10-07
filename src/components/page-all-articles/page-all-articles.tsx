
import { Component ,State} from '@stencil/core';
import {isNull } from 'util';



@Component({
    tag:'page-all-articles',
   styleUrl: 'all-articles.css',

})

export class PageAllArticles{
    @State ()  data : any = [];
  
    load() {
fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost ')
.then(response => response.json())
   .then( post => this.data = post)
    }
 
componentWillLoad () {
    this.load();
    
    }
render(){
        return(
    this.data.map( (art) => 
   
<h2><font color="red">{art.title} <br/></font> 
<font color="grey">{art._id} <br/></font> 
<h2>{isNull(art.article) ? art.article : art.article.substring(0,140)}
</h2>
<font color="blue" > <h5>{art.autor}</h5></font> 
<stencil-route-link url={"/details/"+art._id}>
<button>
    More...
</button>
</stencil-route-link>
  <hr></hr>
  </h2>
   
    )
        );
    }
}

