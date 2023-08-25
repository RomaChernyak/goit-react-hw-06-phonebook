import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { Form, Label, Input, Button } from "./ContactForm.styled";

export const ContactForm = ({ addContact }) => {
    const [name, getName] = useState('');
    const [number, getNumber] = useState('');

    const handleForm = evt => {
        const newContact = {
            id: nanoid(),
            name,
            number,
        };

        evt.preventDefault();

        addContact(newContact);

        evt.target.reset();
    };

    const handleChange = ({ currentTarget: { name, value } }) => {
        switch (name) {
            case 'name':
                return getName(value);
            case 'number':
                return getNumber(value);
            default:
                return;
        }
    };

    return ( 
        <Form
            name="phonebook_form"
            autoComplete="on"
            onSubmit={handleForm}
        >
            <Label>
                Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                />
            </Label>

            <Label>
                Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                />
            </Label>

            <Button
                type="submit"
            >
                Add contact
            </Button>
        </Form>
    );
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};