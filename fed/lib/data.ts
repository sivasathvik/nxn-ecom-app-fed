type Post ={
userName: string;
email: string;
password: string;
confirmpassword: string;

}
let posts: Post[] =[];
export const getPosts = () => posts;
export const addPost = (post : Post) => {
posts.push(post);
}
export const deletePost = (userName : string) => {
    posts=posts.filter((post) => post.userName !== userName)
}

export const UpdatePost = (UserName : string,email: string, password: string, confirmpassword: string) => {
    const post = posts.find((post) => post.userName  === UserName);

    if(post) {
       post.userName=UserName;
       post.email=email;
    } else {
        throw new Error ("No  user can be found");
    }
};

export const getByUserName = (userName : string) => {
    return posts.find((post) => post.userName ===userName)
}


