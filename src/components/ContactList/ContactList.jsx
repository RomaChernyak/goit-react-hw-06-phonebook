import PropTypes from "prop-types";
import { ItemList, Item, Contact, Button } from "./ContactList.styled.jsx";

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ItemList>
            {contacts.length !== 0
                ?
                (contacts.map(({ name, id, number }) => (
                    <Item key={id}>
                        <Contact>
                            <span>{name}</span>
                            <span>{number}</span>
                        </Contact>
                        
                        <Button
                            type="button"
                            onClick={() => deleteContact(id)}
                        >
                            Delete
                        </Button>
                    </Item>
                )))
                :
                (<Item>
                    <p className="phonebook__info">Unfortunately, but you do not have any contacts.</p>
                </Item>)
            }
        </ItemList>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(
        PropTypes.string.isRequired
    )).isRequired,
    deleteContact: PropTypes.func.isRequired,
};