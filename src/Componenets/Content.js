import React from 'react';

function Content(props) {
    return (
        <div className="home-container content-base">

            <div className="find-your-home">
                <div className="text find-your-home-text">Find your Home</div>
                <div className="item">
                     <div className="text"><input placeholder="Enter keyword..." type="text"/>
                     <i className="fas fa-angle-down icon"></i></div>
                </div>

                <div className="item">
                    <div className="text"><input placeholder="Location" type="text"/>
                     <i className="fas fa-angle-down icon"></i></div>
                </div>
                <div className="item">
                    <div className="text"><input placeholder="All Types" type="text"/>
                    <i className="fas fa-angle-down icon"></i></div>
                </div>
                <div className="item">
                    <div className="text"><input placeholder="All Status" type="text"/>
                     <i className="fas fa-angle-down icon"></i></div>
                </div>


                <div className="item">
                     <div className="beds-and-baths-text">
                         <div className="text"><input placeholder="Beds" type="text"/><i className="fas fa-angle-down icon"></i></div>
                          <div className="text"><input placeholder="Baths" type="text"/><i className="fas fa-angle-down icon"></i></div>
                     </div>
                </div>


            </div>
            <div className="properties">
                test
            </div>
        </div>
    );
}

export default Content;