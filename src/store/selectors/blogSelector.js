

    export default (blogs, { text, sortBy }) => {

        return blogs.filter((blog) => {
            const textMatch = blog.title.toLowerCase().includes(text.toLowerCase())

            return textMatch
        }).sort((a, b) => {
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1;
            } 
            if (sortBy === 'title') {
                return a.title < b.title ? -1 : 1;
            }
        });

    }

