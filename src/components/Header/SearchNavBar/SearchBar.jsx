// El valor de 'value' se va a autocompletar con lo que el usuario escriba
// NO ME DEJA ESCRIBIR EL INPUT DE SEARCH

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