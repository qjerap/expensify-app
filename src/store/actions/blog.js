import uuid from 'uuid'
import db from '../../firebase/firebase'

// ADD BLOG
export const addBlogAC = (blog) => ({
    type: 'ADD_BLOG',
    blog
    });

export const firebaseAddBlogAC = (blogData = {}) => {
    return (dispatch, getState) => {

        const uid = getState().auth.uid
        const {
            title = '',
            body = '',
            createdAt = 0,  
        } = blogData;

        const blog = { title, body, createdAt}

        db.ref(`users/${uid}/blogs`).push(blog)
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return db.ref(`users/${uid}/blogs/${id}`).update(updates)
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return db.ref(`users/${uid}/blogs/${id}`).remove()
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
    return (dispatch, getState) => {

        const uid = getState().auth.uid
        db.ref(`users/${uid}/blogs`).once('value')
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
