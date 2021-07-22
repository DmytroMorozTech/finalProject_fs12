import React from 'react'
import StyleMain from "./StyleMain";
import {MainRight} from "./MainRight";
import {MainLeft} from "./MainLeft";
import {Feed} from "./Feed/Feed";

function Main() {
    const classes = StyleMain();

    return (
        <div classes={classes.container}>
            <Section>
                <MainLeft/>
                <Feed/>
                <MainRight/>
            </Section>
        </div>
    )
}

export default Main;