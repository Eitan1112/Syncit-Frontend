import React from "react";
import styles from './index.module.css'
import Header from '../components/header'
import Form from '../components/form'

const App = () => (
  <div className={styles.App} id="app">
    <Header />
    <Form />
  </div>
)

export default App;
