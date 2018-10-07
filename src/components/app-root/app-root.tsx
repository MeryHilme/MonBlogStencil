import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
<nav>
   
 <a href=""><stencil-route-link url='/index'>List
 </stencil-route-link>  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href=""><stencil-route-link url='/view-details'>Details
 </stencil-route-link>  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href=""><stencil-route-link url='/Add-article'>Add
 </stencil-route-link>  </a>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href=""><stencil-route-link url='/delete-article'>Delete
 </stencil-route-link>  </a>
</nav>
</header>

        <main>
          <stencil-router>

  <stencil-route-switch scrollTopOffset={0}>
<stencil-route url='/index' component='page-all-articles' exact={true} />
<stencil-route url='/view-details/:_id' component='view-details' />
<stencil-route url='/Add-article' component='add-article' />
<stencil-route url='/delete-article' component='delete-article' />

</stencil-route-switch>
          </stencil-router>
        </main>
        </div>
    );
  }
}

	
	
	




