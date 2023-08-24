avatar_url
:
"https://avatars.githubusercontent.com/u/1?v=4"
events_url
:
"https://api.github.com/users/mojombo/events{/privacy}"
followers_url
:
"https://api.github.com/users/mojombo/followers"
following_url
:
"https://api.github.com/users/mojombo/following{/other_user}"
gists_url
:
"https://api.github.com/users/mojombo/gists{/gist_id}"
gravatar_id
:
""
html_url
:
"https://github.com/mojombo"
id
:
1
login
:
"mojombo"
node_id
:
"MDQ6VXNlcjE="
organizations_url
:
"https://api.github.com/users/mojombo/orgs"
received_events_url
:
"https://api.github.com/users/mojombo/received_events"
repos_url
:
"https://api.github.com/users/mojombo/repos"
site_admin
:
false
starred_url
:
"https://api.github.com/users/mojombo/starred{/owner}{/repo}"
subscriptions_url
:
"https://api.github.com/users/mojombo/subscriptions"
type
:
"User"
url
:
"https://api.github.com/users/mojombo";


`
<div class="repository-card">
                  <div class="repository-card-top">
                    <img src="./images/repository.svg" alt="an img">
                    <p>vs code</p>
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
                <div class="repository-card">
                  <div class="repository-card-top">
                    <img src="./images/repository.svg" alt="an img">
                    <p>vs code</p>
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
                <div class="repository-card">
                  <div class="repository-card-top">
                    <img src="./images/repository.svg" alt="an img">
                    <p>vs code</p>
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
                </div>`;







posts.map( ( el ) => {
  infoMainRow.innerHTML += `
      <div class="repository-card">
        <div class="repository-card-top">
          <img src="./images/repository.svg" alt="an img">
          <p>${el.login}</p>
          <span>Public</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, aperiam.</p>
        <div class="repository-card-bottom">
          <img src="https://api.github.com/users/mojombo/received_events" alt="an img">
          <p>Typescript</p>
          <img src="images/r3.svg" alt="an img">
          <p>10</p>
          <img src="images/r1.svg" alt="an img">
          <p>7</p>
        </div>
      </div>
      `
} )