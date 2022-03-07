const SearchMovie = (props) => {
    return (
        <label>
            <label className="title">Title</label>
            <input
                value={props.value}
                onChange={(e)=>props.setSearchValue(e.target.value)}
                placeholder='Type to search...'
            />
        </label>
    )
}

export default SearchMovie