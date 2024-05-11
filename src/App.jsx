import backgroundImage from "./img/pass.jpg";


import { useState } from "react";
export default function App() {
  const [user, setUser] = useState()
  const [username, setPass] = useState()
  const useName = () => {
    if (username === "Behruz") {
      alert("To`g`ri ma`lumot");
    } else if (username === "") {
      alert("Ma'lumotni kiritmadingiz 🫥🫥🫥");
    }
    else {
      alert("Xato ma`lumot");
    }
  }

  const usePass = () => {
    if (user === "12345678") {
      alert("Parol to'g'ri");
    } else if (user === "" ) {
      alert("Parolni kiritmadingiz 🫥🫥🫥");
    }
    else {
      alert("Parolni Xato kiritdingiz");
    }
  }

  return (
    <>
      <div className="info" style={{ backgroundImage: `url(${backgroundImage})` }}>

        <br />

        <input onChange={(e) => setPass(e.target.value)} type="text" className="FullName"
          placeholder="Input your Full name" />
        {username === "Behruz" ? <p className="togri_malumot" style={{ color: "green" }}>To`g`ri ma`lumot kiritdingiz!</p> : <></>}
        {username === "behruz" ? <p className="xato_malumot" style={{ color: "red" }}>Iltimos katta harfda
          yozing!</p> : <></>}

        <button className="Name_btn" onClick={() => useName()}>Name Verification</button> <br />

        <input onChange={(e) => setUser(e.target.value)} type="text" className="password"
          placeholder="Input your Password" />
        {user === "12345678" ? <p className="togri_parol" style={{ color: "green" }}>To'g'ri parol kiritdingiz</p>
          : <></>}

        <button className="pass_btn" onClick={() => usePass()}>Password Verification</button>

      </div>
    </>
  )
}