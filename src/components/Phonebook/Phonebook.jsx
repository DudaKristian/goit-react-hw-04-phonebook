import React from "react";
import shortId from "shortid";
import PropTypes from 'prop-types';

class Phonebook extends React.Component {

    state = {
    name: '',
    number: '',
    }


    nameInputId = shortId.generate();
    numberInputId = shortId.generate();

    onInputChange = e => {

    const { name, value } = e.target;

    this.setState({ [name]: value })  
    }
    
    formReset = () => {
    
    this.setState(
      {
        name: '',
        number: '',
      }
    )
    };
    
    onSubmitHandle = e => {

    e.preventDefault();
        
    const contact = {
    name: this.state.name,
    number: this.state.number,
    id: shortId.generate(),
    }
    this.props.addContact(contact)

    this.formReset()

    };

    render() {
        return (
            <div>
            
                <form onSubmit={this.onSubmitHandle}>
                <label htmlFor={this.nameInputId}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.onInputChange}
                        id={this.nameInputId}
                    />
                </label>
                <br />
                <label htmlFor={this.numberInputId}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        id={this.numberInputId}
                        onChange={this.onInputChange}
                    />
                </label>
                <br />
                <button type="submit">Add contact</button>
            </form>
            </div>
        )       
    }
}

Phonebook.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default Phonebook


