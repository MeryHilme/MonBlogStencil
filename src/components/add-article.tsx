import { Component, State} from '@stencil/core';

@Component({
    tag:'add-article',
   //styleUrl: 'all-articles.css',

})

export class AddArticle{
 @State() title: string;
 @State() article: string;
 @State() autor: string;

 @State ()  data : any = [];

  AddArticleToAPI(my_param){

    my_param.preventDefault();
     const  title = this.title;
     const    article = this.article;
    const autor = this.autor;

      let MyAttr = {
          title,
          article,
          autor
      };

      fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost' ,{
            
            method: 'POST',
           
            headers: {
                "content-Type": "application/json"
                     },
            body: JSON.stringify(MyAttr)
      })
        
      .then(response => response.json())
      .then( post => this.data = post)
    }
 
  render(){
      return(
          <div>
              <form>
Title of the article:<br></br><br></br>
<input type="text" name="title" placeholder="Progressive Web App.." onChange={(my_param : any) => (this.title = my_param.target.value)}></input>
<br></br><br></br>Type article here:<br></br><br></br>
<textarea  minlength="10" maxlength="1000" name="article"
 placeholder="Progressive Web Apps are installable and live on the user's
 home screen, without the need for an app store.... " onChange={(my_param:any) => {this.article = my_param.target.value}}>
</textarea>
<br></br><br></br>Author:<br></br><br></br>
<input type="autor" name="author" placeholder="autor" onChange={(my_param:any) => (this.autor = my_param.target.value)}></input><br></br><br></br>
<button type="submit" onClick={this.AddArticleToAPI.bind(this)}>Add your article</button>        
&nbsp; &nbsp; &nbsp;
<button type="reset" value="reset">Clear all entries!</button> 
     </form>    
          </div>
      )
  }
}

