import React, { Component } from 'react';
import styles from './SuperButton.module.css';

export default class SuperButton extends Component {
    render() {
        return (<div className={styles.alignment}>
            <button className={styles.button}>Sendar</button>
        </div>)
    }
}