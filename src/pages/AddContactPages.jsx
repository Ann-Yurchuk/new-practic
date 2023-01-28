import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers } from 'redux/usersSlice';

export const AddContactPages = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else {
      setAge(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: name,
      age: age,
      id: nanoid(),
    };
    dispatch(addUsers(newUser));
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" onChange={handleChange} value={name} />
      </label>
      <label>
        Age
        <input name="age" type="number" onChange={handleChange} value={age} />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};
