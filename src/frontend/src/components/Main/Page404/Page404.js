import React from 'react';
import Style from './style';

function Page404 () {
    const classes = Style();

    return (
        <h1 className={classes.text}>
            Oooops! Something went wrong! Sorry, partner, you are on wrong page!
        </h1>
    )
}

export default Page404;