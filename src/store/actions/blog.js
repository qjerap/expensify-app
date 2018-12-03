import uuid from 'uuid'

// ADD BLOG
export const addBlogAC = (
    {
        title = '',
        body = '',
        createdAt = 0,
} = {}
    ) => ({
    type: 'ADD_BLOG',
    blog: {
        id: uuid(),
        title,
        body,
        createdAt
    }
})

// EDIT BLOG

export const editBlogAC = (id, updates) => ({
    type: 'EDIT_BLOG',
    id,
    updates
})

// REMOVE BLOG 

export const removeBlogAC = (id) => ({
    type: 'REMOVE_BLOG',
    id
});
