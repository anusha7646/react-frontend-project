function SearchBar({ value, onChange }) {
  return (
    <form
      className="search-form"
      role="search"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="visually-hidden" htmlFor="portfolio-search">
        Search projects and services
      </label>
      <span className="search-icon" aria-hidden="true">⌕</span>
      <input
        id="portfolio-search"
        type="search"
        placeholder="Try “branding” or “product design”"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {value && (
        <button
          className="search-clear"
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          Clear <span aria-hidden="true">×</span>
        </button>
      )}
    </form>
  );
}

export default SearchBar;
