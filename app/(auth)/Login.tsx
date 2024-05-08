'use client';
import { useState } from 'react';
import { ID, account } from '../appwrite';
import { Input, Space } from 'antd';

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (loggedInUser) console.log('loggedInUser:', loggedInUser);

  const login = async (email: string, password: string) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      console.log(session);
      setLoggedInUser(await account.get());
    } catch (error) {
      console.log({ error });
    }
  };

  const register = async () => {
    try {
      await account.create(ID.unique(), email, password, name);
      login(email, password);
    } catch (error) {
      console.log({ error });
    }
  };

  const logout = async () => {
    await account.deleteSession('current');
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div>
        <p>Logged in as {loggedInUser.name}</p>
        <button type='button' onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>Not logged in</p>
      <form>
        <Space>
          <Input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='button' onClick={() => login(email, password)}>
            Login
          </button>
          <button type='button' onClick={register}>
            Register
          </button>
        </Space>
      </form>
    </div>
  );
};

export default LoginPage;
