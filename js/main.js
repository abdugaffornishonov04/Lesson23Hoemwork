let mainRow = document.querySelector( ".hero-main-row" );
let formInput = document.querySelector( ".header-form input" );

let pages;

async function getPosts() {
  try {
    let res = await fetch( "https://api.github.com/users" );
    if ( res.ok === false ) {
      console.log( "Error", res.statusText );
    }
    let posts = await res.json();

    pages = Math.ceil(posts.length / 10)
    console.log(pages);

    console.log( posts );
    posts.map((el) => {
      mainRow.innerHTML += `
      <a href="info.html?id=${el.id}">
      <div class="hero-card">
        <div class="hero-card-img">
          <img src="${el.avatar_url}" alt="an img">
        </div>
        <div class="hero-card-body">
          <p class="hero-card-login">ID: <span>${el.id}</span></p>
          <p class="hero-card-login">Login: <span>${el.login}</span></p>
          <p class="hero-card-node">Node: <span>"${el.node_id}"</span></p>
          <p class="hero-card-type">Type: <span>${el.type}</span></p>
        </div>
      </div>
      </a>
      `;
    } );
    
    //search
    formInput.addEventListener("keyup", () => {
     let search = formInput.value;
      let searchFilter = posts.filter( el => el.login.includes( search ) || el.id == search);
     console.log(searchFilter);
      mainRow.innerHTML = "";
     searchFilter.map((el) => {
       mainRow.innerHTML += `
      <a href="info.html?id=${el.id}">
      <div class="hero-card">
        <div class="hero-card-img">
          <img src="${el.avatar_url}" alt="an img">
        </div>
        <div class="hero-card-body">
          <p class="hero-card-login">ID: <span>${el.id}</span></p>
          <p class="hero-card-login">Login: <span>${el.login}</span></p>
          <p class="hero-card-node">Node: <span>"${el.node_id}"</span></p>
          <p class="hero-card-type">Type: <span>${el.type}</span></p>
        </div>
      </div>
      </a>
      `;
     })
    })
    
  } catch ( err ) {
    console.log( "Error:", err );
  }

}


getPosts();