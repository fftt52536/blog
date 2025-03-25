import React from "react";
import bindAll from "lodash.bindall";
import styles from "./main.css";
import avatar from "./avatar.png";
import Account from "../account/account.jsx";

/** 主页要展示的内容（框架除外） */

class Home extends React.Component {
    render() {
        return (
            <>
                <h1 className={styles.title}>G9D博客 - FFTT52536的个人主页</h1>
                <Account avatar={avatar} name="fftt52536"/>
            </>
        );
    }
}

export default Home;
