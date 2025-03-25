import React from "react";
import bindAll from "lodash.bindall";
import styles from "./nav.css";
import classNames from "classnames";
import logo from "./logo.svg";

class Nav extends React.Component {
    constructor(props){
        super(props);
        bindAll(this, [
            "handleClickArticles",
            "handleClickFiles",
            "handleClickContact"
        ]);
    }
    handleClickLogo(){
        window.location.href = "/";
    }
    handleClickArticles(){
        window.location.href = "articles.html";
    }
    handleClickFiles(){
        window.location.href = "files.html";
    }
    handleClickContact(){
        window.location.href = "contact.html";
    }
    render() {
        return (
            <div className={classNames(styles.nav, this.props.className)}>
                <img src={logo} onClick={this.handleClickLogo} className={styles.logo} draggable={false}/>
                <div className={styles.item} onClick={this.handleClickArticles}>
                    {"文章"}
                </div>
                <div className={styles.item} onClick={this.handleClickFiles}>
                    {"存档"}
                </div>
                <div className={styles.item} onClick={this.handleClickContact}>
                    {"联系"}
                </div>
            </div>
        );
    }
}

export default Nav;
