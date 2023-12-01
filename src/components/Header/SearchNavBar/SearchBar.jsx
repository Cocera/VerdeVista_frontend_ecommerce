import './SearchBar.scss';

const SearchBar = () => {
    return (
        <>
            <form className='searchBarNav'>
                <input type="search" autoComplete="false" placeholder="I am looking for..." />
                <button>
                    <div className='material-symbols-outlined'>search</div>
                </button>
            </form>
        </>
    );
};

export default SearchBar;