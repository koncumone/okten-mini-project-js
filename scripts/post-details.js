const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');
const userId = urlParams.get('id');


fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(user => displayPostInfo(user))
    .catch(error => console.error(error));


const postDetails   = document.getElementById('detail-post');
const postComments  = document.getElementById('comments-post');

     
function displayPostInfo(user) {

    user.forEach(post => {

        if (postId == post.id) {
            const {id, title, body} = post

            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
          
            const idPost        = createElementWithContent('p', `Post ID: ${id}`);
            const idUser        = createElementWithContent('p', `User ID: ${userId}`);
            const titlePost     = createElementWithContent('p', `Title: ${title}`);
            const bodyPost      = createElementWithContent('p', `Body: ${body}`);
          
            postDiv.append(idPost, idUser, titlePost, bodyPost);
            postDetails.appendChild(postDiv);

        }        
    });
}

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(user => displayPostComments(user))
    .catch(error => console.error(error));



function displayPostComments(post) {

    post.forEach(comment => {
        console.log(comment);

        const {body, email, id, name, postId} = comment;

        const commentDiv = document.createElement('div')
        commentDiv.classList.add('commentDiv')

        const idComment = createElementWithContent('p', `Comment ID: ${id}`)
        const bodyComment = createElementWithContent('p', `Body: ${body}`)
        const emailComment = createElementWithContent('p', `Email ID: ${email}`)
        const nameComment = createElementWithContent('p', `Name ID: ${name}`)
        const postIdComment = createElementWithContent('p', `Post ID: ${postId}`)
        

        commentDiv.append(idComment, bodyComment, emailComment, nameComment, postIdComment)
        postComments.appendChild(commentDiv)
    });

}


function createElementWithContent(tag, content) {
    const element = document.createElement(tag);
    element.textContent = content;

    return element;
}
