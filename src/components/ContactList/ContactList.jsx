import PropTypes from 'prop-types';

const ContactList = ({filter, onDelete}) => {
    return (
        <ul>{filter.map(contact => (
            <li key={contact.id}>
            {contact.name}
            {contact.number}
                <button
                    type="button" id={contact.id}
                    onClick={() => onDelete(contact.id)}
                >
                    Delete
                </button>    
            </li>))}
        </ul>
    )
}

ContactList.propTypes = {
    filter: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        }
    )),
    onDelete: PropTypes.func.isRequired
}

export default ContactList
