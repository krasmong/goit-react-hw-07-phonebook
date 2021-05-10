import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';
import s from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    contact: { name: '', number: '' },
  };

  static propTypes = {
    onSaveContacts: PropTypes.func,
  };

  handleChange = e => {
    console.log(e.target.name);
    this.setState(prevState => {
      const { name, value } = e.target;
      return {
        contact: { ...prevState.contact, [name]: value },
      };
    });
  };

  isContactExists = name => {
    name = name.toLowerCase();
    return this.props.state.contacts.items.find(
      e => e.name.toLowerCase() === name,
    );
  };

  reset = () => this.setState({ contact: { name: '', number: '' } });

  handleSubmit = e => {
    e.preventDefault();
    const { onSaveContacts } = this.props;
    const { contact } = this.state;
    this.isContactExists(contact.name)
      ? alert(`Contact ${contact.name} already exists.`)
      : onSaveContacts(contact);
    this.reset();
  };

  render() {
    const { contact } = this.state;
    const { handleChange } = this;
    return (
      <div className={s.container}>
        <form onSubmit={this.handleSubmit}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={contact.name}
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            Number
            <input
              className={s.input}
              type="text"
              name="number"
              value={contact.number}
              onChange={handleChange}
            />
          </label>

          <button className={s.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => {
  return { onSaveContacts: contact => dispatch(addContact(contact)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// ================================= 4 hw =======================================

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import s from '../ContactForm/ContactForm.module.css';

// export default class ContactForm extends Component {
//   static defaultProps = {
//     name: '',
//     number: '',
//   };

//   static propTypes = {
//     contacts: PropTypes.array,
//     name: PropTypes.string,
//     number: PropTypes.string,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.OnSaveContacts(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <div className={s.container}>
//         <form onSubmit={this.handleSubmit}>
//           <label className={s.label}>
//             Name
//             <input
//               className={s.input}
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label className={s.label}>
//             Number
//             <input
//               className={s.input}
//               type="text"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button className={s.btn} type="submit">
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
