import React, {useState} from 'react'
import "./BasicForm.css";

export const BasicForm = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const[allEntry,setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {name: name,password:password}

        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry)
    }

    return (
        <div>
            <form action= "" onSubmit={submitForm}>
                <div>
                    <label htmlFor='name'>UserId</label>
                    <input type="text" name="name" id="name" autoComplete="off" value={name} onChange={(e) =>setName(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e) =>setPassword(e.target.value)}></input>
                </div>

                <button type='submit' className="btn_login">Login</button>
            </form>

            <div>
                {
                    allEntry.map((curElem)=>{
                        return(
                            <div>
                                <table className='Table'>
                                <tr>
                                    <th>Name</th>
                                    <th>Password</th>
                                </tr>
                                <tr>
                                    <td>{curElem.name}</td>
                                    <td>{curElem.password}</td>
                                </tr>
                                </table>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}