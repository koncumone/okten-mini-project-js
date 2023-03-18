const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => displayUserInfo(user))
    .catch(error => console.error(error));

    
const userDetails = document.getElementById('user-details');

function displayUserInfo(user) {

    const {id, name, username, email, address, phone, website, company} = user;

    const buttonDiv     = document.createElement('div')
    buttonDiv.classList.add('button-class')

    const idItem        = createElementWithContent('li', `id: ${id}`);
    const nameItem      = createElementWithContent('li', `Name: ${name}`);
    const usernameItem  = createElementWithContent('li', `Username: ${username}`);
    const emailItem     = createElementWithContent('li', `Email: ${email}`);
    const adressItems   = createElementWithContent('li', 'Address:');
    const phoneItem     = createElementWithContent('li', `Phone: ${phone}`);
    const websiteItem   = createElementWithContent('li', `Website: ${website}`);
    const companyItem   = createElementWithContent('li', `Company:`);

    const buttonPosts   = createElementWithContent('button', 'post of current user');
    const buttonBack    = createElementWithContent('button', 'back');
    buttonPosts.classList.add('button-info')
    buttonBack.classList.add('button-info')

    const addressInfo   = createAddressList(address);
    const companyInfo   = createCompanyList(company);
    
    buttonBack.onclick = function() {
        window.location.href = `index.html`;     
        
    }
    
    buttonPosts.onclick = function() {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => displayPosts(posts))
        .catch(error => console.error(error));
    }
    
    buttonDiv.appendChild(buttonBack)
    buttonDiv.appendChild(buttonPosts)

    userDetails.append(
        idItem, 
        nameItem, 
        usernameItem, 
        emailItem, 
        adressItems, 
        addressInfo, 
        phoneItem, 
        websiteItem,
        companyItem,
        companyInfo,
        buttonDiv
    );
}

function createElementWithContent(tag, content) {
    const element = document.createElement(tag);
    element.textContent = content;

    return element;
}

function createCompanyList(company) {
    const companyInfo = document.createElement('ul'); 

    const nameLi = createElementWithContent('li', `Name: ${company.name}`);
    companyInfo.appendChild(nameLi);

    const bsLi = createElementWithContent('li', `Bs: ${company.bs}`);
    companyInfo.appendChild(bsLi);

    const catchPhraseLi = createElementWithContent('li', `CatchPhrase: ${company.catchPhrase}`);
    companyInfo.appendChild(catchPhraseLi);

    return companyInfo

}

function createAddressList(address) {
    const addressInfo = document.createElement('ul');
    
    const cityLi = createElementWithContent('li', `City: ${address.city}`);
    addressInfo.appendChild(cityLi);

    const geoLi = createElementWithContent('li', `Geo: lat: ${address.geo.lat} | ing: ${address.geo.lng}`);
    addressInfo.appendChild(geoLi);
    
    const streetLi = createElementWithContent('li', `Street: ${address.street}`);
    addressInfo.appendChild(streetLi);
    
    const suiteLi = createElementWithContent('li', `Suite: ${address.suite}`);
    addressInfo.appendChild(suiteLi);
    
    const zipcodeLi = createElementWithContent('li', `Zipcode: ${address.zipcode}`);
    addressInfo.appendChild(zipcodeLi);

    return addressInfo;
}


function fetchPosts(userId) {

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => displayPosts(posts))
        .catch(error => console.error(error));
}
  
function displayPosts(posts) {
    const postSection = document.getElementById('post-section');
    const postShow    = document.querySelector('.post-section');
    postShow.classList.add('show-post-section');
  
    const postDiv = document.createElement('div');
    postDiv.classList.add('all-posts');
    
    const list = document.createElement('ul');
    list.classList.add('post-list');
    
    posts.forEach(post => {
      const listItem = document.createElement('li');
      listItem.classList.add('post-item');
      
      const linkItem = document.createElement('a');
      linkItem.classList.add('post-link');
      linkItem.href = `post-details.html?postId=${post.id}&id=${post.userId}`;
      linkItem.textContent = post.title;
      
      listItem.appendChild(linkItem);
      list.appendChild(listItem);
    });
  
    postDiv.appendChild(list);
    postSection.appendChild(postDiv);
  }
  