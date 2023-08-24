let infoMainRow = document.querySelector( ".info-hero-main-right-row" );
let infoMain = document.querySelector( ".info-hero-main" );

const urlParams = new URLSearchParams( window.location.search );
const userId = urlParams.get( 'id' );
let uId = +userId;
console.log( uId );

async function getPosts() {
  try {
    let res = await fetch( "https://api.github.com/users" );
    if ( res.ok === false ) {
      console.log( "Error", res.statusText );
    }
    let posts = await res.json();
    let infoFilter = posts.filter( ( el ) => el.id === uId );

    infoFilter.map( ( el ) => {
      infoMain.innerHTML += `
        <div class="info-hero-main-left">
          <img class="info-avatar-img" src="${el.avatar_url}" alt="an img">
          <p>User: ${el.login}</p>
          <button>Edit</button>
          <div class="followers-and-following">
            <span>
              <img src="images/followers.svg" alt="an img">
              <span>${el.id}</span>
              Followers
            </span>
            <span><span>${el.id}</span> Following</span>
          </div>
        </div>
      `
    } );

    let repositoryCards = document.createElement( "div" );

    infoFilter.map( ( el ) => {
      repositoryCards.innerHTML += `
        <div class="repository-card">
          <div class="repository-card-top">
            <img src="./images/repository.svg" alt="an img">
            <p>${el.login}</p>
            <span>Public</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, aperiam.</p>
          <div class="repository-card-bottom">
            <img src="images/r2.svg" alt="an img">
            <p>Typescript</p>
            <img src="images/r3.svg" alt="an img">
            <p>10</p>
            <img src="images/r1.svg" alt="an img">
            <p>7</p>
          </div>
        </div>
      `
    } );
    infoMain.appendChild( repositoryCards );

  } catch ( err ) {
    console.log( "Error:", err );
  }

}

getPosts();




