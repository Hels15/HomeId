import React, {useContext} from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function HeaderBottom(props) {
    const data = props.data

    return (
        <div className="header-bottom" role="presentation" onClick={handleClick}>
            <div className="content-base">
                <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="#ABABAB" href="/">
                    {data.under_line_text}

                </Link>
                <Typography color="text.primary">{data.primary_text}</Typography>
            </Breadcrumbs>
            <br/>
            <div className="filter-text"></div>
            </div>

        </div>
    );
}

export default HeaderBottom;