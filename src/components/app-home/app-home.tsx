import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
      
 <stencil-route-link url='/index'>
          <button>
          ALL ARTICLES
          </button>
        </stencil-route-link>
        
        <br/><br/>
       <div id='articles'></div>
      </div>
    );
  }
}
