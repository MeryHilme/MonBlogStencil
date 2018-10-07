
import { Component ,State} from '@stencil/core';

@Component({
    tag:'view-all',
   //styleUrl: 'all-articles.css',

})

export class ViewAll{
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
   <font color="yellow" >{art._id}</font>
    <font color="green" >{art.article}</font>

    <font color="blue" > <h5>{art.autor}</h5></font> 
  <hr></hr>
  </h2>
   
    )
        );
    }


}
