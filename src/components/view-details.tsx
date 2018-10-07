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
    render(){

if(this.arts){
    this.arts.map((article:any) => {

        return(
<h2>
   
    <stencil-router-link url="/details/:_id">
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

