import {useState} from "react";

function App() {

    const [form, setForm] = useState({
        username:"",
        password:"",
        email:"",
        subscribe:false
    });

    const [show, setShow]= useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(form);
    }

    const changeValue =e=>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>username:</label>
                <input name="username" type="text" onChange={changeValue}/>
                <label>password:</label>
                <input name="password" type={show?"test":"password"} onChange={changeValue}/>
                <label>email:</label>
                <input name="email" type={"text"} onChange={changeValue}/>
                <button onClick={()=>setShow(!show)}>Show</button>
                <input type={"submit"}/>
            </form>
        </>
    )
}

export default App
