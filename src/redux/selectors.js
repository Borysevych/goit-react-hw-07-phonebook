export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;


export const selectFilteredContacts = state => state.contacts.items
    .filter(contact => {
      const nameMatch = contact.name
        ? contact.name.toLowerCase().includes(state.filter.toLowerCase())
        : false;
      const phoneMatch = contact.phone
        ? contact.phone.toLowerCase().includes(state.filter.toLowerCase())
        : false;
      return nameMatch || phoneMatch;
    })
    .sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });