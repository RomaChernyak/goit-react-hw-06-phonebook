import PropTypes from "prop-types";
import css from "./Filter.module.css";

export const Filter = ({ handleSearch }) => {
    return ( 
        <label className={css.phonebook__label}>
            Find contact by name:
            <input
                className={css.phonebook__input}
                type="text"
                name="filter"
                onChange={handleSearch}
            />
        </label>
    );
};

Filter.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};