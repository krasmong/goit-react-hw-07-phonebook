import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    {/* Find contacts by name: */}
    <input
      className={s.input}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Find contacts by name"
    />
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// ================================= 4 hw =======================================
// ================================= 4 hw =======================================
// ================================= 4 hw =======================================

// import React from 'react';
// import s from './Filter.module.css';

// const Filter = ({ value, onChange }) => (
//   <label>
//     {/* Find contacts by name: */}
//     <input
//       className={s.input}
//       type="text"
//       value={value}
//       onChange={onChange}
//       placeholder="Find contacts by name"
//     />
//   </label>
// );

// export default Filter;
