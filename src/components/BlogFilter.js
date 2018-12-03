import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByTitle } from '../store/actions/filter'

const BlogFilter = (props) => {


    return (
        <div>
            <form>


                <input 
                    type="search" 
                    placeholder="Search a blog" name="search"
                    value={props.filter.text}
                    onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value))
                    }}
                
                />

                <select
                    value={props.filter.sortBy}
                    onChange={(e) => {
                        if(e.target.value === 'date') {
                            props.dispatch(sortByDate());
                        } else if (e.target.value === 'title') {
                            props.dispatch(sortByTitle());
                        }
                    }}
                >
                    <option value="date">By Date</option>
                    <option value="title">By Title</option>
                </select>
            </form>
        </div>        
    );


    };

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
        filter: state.filters
    }  
}

export default connect(mapStateToProps)(BlogFilter);