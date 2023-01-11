import styles from './Register.module.css';

import { useState, useEffect } from 'react';


const Register = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        {/*
        const user = {
            displayName,
            email,
            password,
            confirmPassword
        }

        if(password != confirmPassword){
            setError("Se liga aí! essas senhas estão diferentes ;)");

            return
        }

        const res = await createUser(user);

        console.log(res)
        */}
    }

    {/*
    useEffect(() => {
        if(authError){
            setError(authError)
            //alert(authError + " auth error ")
        }
    }, [authError])
    */}

  return (
    <div className={styles.Register}>
        <h1>Cadastre-se</h1>
        <p>Preencha o formulário</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input 
                    type="text" 
                    name='displayName' 
                    required 
                    placeholder='Nome do usuário'
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    
                    />
            </label>
            <label>
                <span>Email:</span>
                <input 
                    type="email" 
                    name='email' 
                    required 
                    placeholder='Email do usuário' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                    />
            </label>
            <label>
                <span>Senha:</span>
                <input 
                    type="password" 
                    name='password' 
                    required 
                    placeholder='Insira sua senha' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
            </label>
            <label>
                <span>Confirme a senha:</span>
                <input 
                    type="password" 
                    name='confirmPassword' 
                    required 
                    placeholder='Confirme sua senha' 
                    value={confirmPassword}
                    onChange={(e) => SetConfirmPassword(e.target.value)}
                    />
            </label>

            <button className='btn'>Cadastrar</button>
            {/*
                Quando Loading é passado, o botão é inativado
            {!loading && <button className='btn'>Cadastrar</button>}
            {loading && <button className='btn' disabled>Aguarde...</button>}
            */}
 
            {error && <p className='error'>{error}</p>}    
        </form>
        
    </div>
  )
}

export default Register