import PropTypes from "prop-types";
import { Label, Input } from "./Filter.styled.jsx";

export const Filter = ({ handleSearch }) => {
    return ( 
        <Label>
            Find contact by name:
            <Input
                type="text"
                name="filter"
                onChange={handleSearch}
            />
        </Label>
    );
};

Filter.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};