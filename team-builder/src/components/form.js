import React, {useState, useEffect} from 'react'


export default function Form(props) {
  const [form, setForm] = useState({name: "", email: "", role: ""});

  useEffect(() => {
    if (props.cardToEdit) {
      setForm(props.cardToEdit);
    }
  }, [props.cardToEdit]) 
  
  function setValue(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <div className="form-container">
      <form onSubmit={(e)=>{
        e.preventDefault();
        props.submit(form);
      }}>
        <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={setValue}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={setValue}
          />
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={form.role}
            onChange={setValue}
          />
          <label htmlFor="submit"/>
          <button name="submit" type="submit">Submit</button>
      </form>
    </div>
  )
}