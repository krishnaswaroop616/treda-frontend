import React from 'react';

function NotFound(){
    return(
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>404 Not Found</h1>
                <p>Sorry, the page you are looking for doesnt exist.</p>
                <a className='p-2 btn btn-success fs-5' style={{width:"20%", margin:"0 auto"}} href='/' >Go Home</a>
            </div>
        </div>
    );
}

export default NotFound;