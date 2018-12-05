import uuid from 'uuid'
import db from '../../firebase/firebase'

// ADD BLOG
export const addBlogAC = (blog) => ({
    type: 'ADD_BLOG',
    blog
    });

export const firebaseAddBlogAC = (blogData = {}) => {
    return (dispatch) => {

        const {
            title = '',
            body = '',
            createdAt = 0,  
        } = blogData;

        const blog = { title, body, createdAt}

        db.ref('blogs').push(blog)
        .then((ref) => {
            dispatch(addBlogAC({id: ref.key, ...blog}))
        })
    }
}


// EDIT BLOG

export const editBlogAC = (id, updates) => ({
    type: 'EDIT_BLOG',
    id,
    updates
})

export const firebaseEditBlogAC = (id, updates) => {
    return (dispatch) => {
        return db.ref(`blogs/${id}`).update(updates)
            .then(() => {
            dispatch(editBlogAC(id, updates))
        })
    }
}

// REMOVE BLOG 

export const removeBlogAC = (id) => ({
    type: 'REMOVE_BLOG',
    id
});

export const firebaseRemoveBlogAC = (id) => {
    return (dispatch) => {
        return db.ref(`blogs/${id}`).remove()
            .then(() => {
                dispatch(removeBlogAC(id))
            })
    }
}

// FETCH BLOGS from FIREBASE

export const fetchData = (blogs) => ({
    type: 'FETCH_DATA',
    blogs
})

export const firebaseFetchData = () => {
    return (dispatch) => {
        
        db.ref('blogs').once('value')
            .then((snapshot) => {
                const blogs = [];
                snapshot.forEach((child) => {
                    blogs.push({
                        id: child.key,
                        ...child.val()
                    });
                });
                dispatch(fetchData(blogs))
            });
    };
};
