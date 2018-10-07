import { Component, Prop, State} from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
    tag:'view-details',
  // styleUrl: 'all-articles.css',

})


export class ViewDetails{
    @Prop() match: MatchResults;
   // @Prop() match2: MatchResults;
 @State() title: string;
 @State() article: string;
 @State() autor: string;
 @Prop() arts : any = [];
 @State() articles : any[];
 

 load(){
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost').then(rsp =>
   { return rsp.json();
    
    })
 .then(data => {
     this.articles = data;
   //  console.log(this.articles)
 })

 
}

 render(){

if(this.arts){
    this.arts.map((article:any) => {

        return(
<h2>
   
    <stencil-router-link>
        {article._id}
        < br></br>
        {article.title}
        < br></br>
        {article.autor}
        < br></br>
  
        </stencil-router-link>

</h2>
        
        )
    }
    
    )
    
    }
}
}

