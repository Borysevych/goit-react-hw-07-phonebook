import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/selectors';

import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
    
  const handleDelete = idToDelete => {
    dispatch(deleteContact(idToDelete));
  };

  return isLoading ? (
    <p>List is Loading! Please wait.</p>
  ) : filteredContacts.length > 0 ? (
    <>
      <ul>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              {name}: {phone}
              <button type="submit" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <p>No contacts.</p>
  );
};

export default ContactList;