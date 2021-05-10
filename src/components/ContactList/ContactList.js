import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import s from './ContactList.module.css';

const ContactList = ({ visibleContacts, onDeleteContact }) => {
  // console.log(filterContactsBgetFName);
  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li className={s.item} key={id}>
            <span className={s.text}> {name} : </span>
            <span className={s.text}> {number} </span>
            <button className={s.btn} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const getFilterContactsByName = (allContacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  visibleContacts: getFilterContactsByName(items, filter),
});

const mapDispatchToProps = dispatch => {
  return { onDeleteContact: id => dispatch(deleteContact(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// ================================= 4 hw =======================================
// ================================= 4 hw =======================================
// ================================= 4 hw =======================================

// import React from 'react';
// import s from './ContactList.module.css';

// // import s from '../ContactList/ContactList.module.css';

// const ContactList = ({ contacts, onDeleteContact }) => {
//   // console.log(contacts);

//   return (
//     <>
//       <ul className={s.list}>
//         {contacts.map(({ id, name, number }) => (
//           <li className={s.item} key={id}>
//             <span className={s.text}> {name} : </span>
//             <span className={s.text}> {number} </span>

//             <button className={s.btn} onClick={() => onDeleteContact(id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ContactList;
