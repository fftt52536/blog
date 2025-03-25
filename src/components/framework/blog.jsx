import React from "react";
import bindAll from "lodash.bindall";
import styles from "./blog.css";
import Nav from "../nav/nav.jsx";

class Blog extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, []);
    }
    render() {
        return (
            <div className={styles.big}>
                <Nav className={styles.nav}/>
                <div className={styles.main}>{this.props.page}</div>
            </div>
        );
    }
}

export default Blog;
