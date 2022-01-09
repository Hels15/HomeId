import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function HeaderBottom(props) {
    return (
        <div className="header-bottom" role="presentation" onClick={handleClick}>
            <div className="content-base">
                <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="#ABABAB" href="/">
                    Home
                </Link>
                <Typography color="text.primary">Listing</Typography>
            </Breadcrumbs>
            <br/>
            <div className="filter-text">Listing With Left Filter</div>
            </div>

        </div>
    );
}

export default HeaderBottom;