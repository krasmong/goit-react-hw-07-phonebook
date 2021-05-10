import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

// ====================================================================================
// =================================================================================
// ================================= 4 hw =======================================
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import ContactForm from './components/ContactForm/ContactForm';
// import Filter from './components/Filter/Filter';
// import ContactList from './components/ContactList/ContactList';

// import { v4 as uuidv4 } from 'uuid';

// import './App.css';

// class App extends Component {
//   static defaultProps = {
//     contacts: [],
//     name: '',
//     number: '',
//   };

//   static propTypes = {
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string,
//         number: PropTypes.string,
//       }),
//     ),
//   };

//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     // console.log('App componentDidMount');

//     const getContacts = localStorage.getItem('contacts');
//     // console.log(getContacts);

//     const parsedContacts = JSON.parse(getContacts);
//     // console.log(parsedContacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('App componentDidUpdate');

//     if (this.state.contacts !== prevState.contacts) {
//       console.log('Обновилось поле contacts, записываю contacts в хранилище ');

//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmitHandler = data => {
//     const myContacts = {
//       id: uuidv4(),
//       name: data.name,
//       number: data.number,
//     };

//     // Запрещаем пользователю возможность добавлять контакты,
//     // имена которых уже есть в телефонной книге

//     const getContacts = this.state.contacts.map(contact =>
//       contact.name.toLocaleLowerCase(),
//     );

//     const isGetContactAlredy = getContacts.includes(
//       data.name.toLocaleLowerCase(),
//     );

//     if (isGetContactAlredy) {
//       alert(`${data.name} is already in contacts!`);
//     } else {
//       this.setState(prevState => {
//         return {
//           contacts: [myContacts, ...prevState.contacts],
//         };
//       });
//     }
//   };

//   // Функционал кнопки удаления контакта

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   // берем фтльтр и на базе стейта
//   // составляем и рисуем новую коллекцию
//   getFiltredContacts = () => {
//     const { contacts } = this.state;

//     const normalizedFilter = this.state.filter.toLowerCase();

//     // возвращаем только те контакты, свойство "name", которых
//     // включает в себя текущее значение фильтра
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const filtredContacts = this.getFiltredContacts();
//     const totalContactsCount = contacts.length;

//     return (
//       <>
//         <h1 className="title">Phonebook</h1>
//         <ContactForm OnSaveContacts={this.formSubmitHandler} />
//         <h2 className="title">Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />

//         {/* <div>
//           <p>All contacts: {totalContactsCount}</p>
//         </div> */}

//         <ContactList
//           contacts={filtredContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </>
//     );
//   }
// }

// export default App;
