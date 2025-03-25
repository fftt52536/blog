import React from "react";
import classNames from "classnames";
import styles from "./account.css";

/** 显示用户信息。 */
const Account = (props)=>{
    return (
        <div className={classNames(styles.account, styles.clearfix)}>
            <img className={styles.avatar} draggable={false} alt={props.name} src={props.avatar} />
            <span className={styles.name} >{props.name}</span>
        </div>
    );
}

export default Account;
