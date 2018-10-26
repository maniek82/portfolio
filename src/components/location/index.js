import React from 'react';

const Location = () => {
    return (  
        <div className="location_wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39714.484184557856!2d-0.08403945087785435!3d51.528712047652036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cd8f184ff5f%3A0x35ecb646583c90ba!2sPlaza+London+Hotel!5e0!3m2!1sen!2s!4v1540558531801" width="100%" 
        height="550px" 
        frameBorder="0" 
        allowFullScreen></iframe>
        <div className="location_tag">
            <div>Location</div>
        </div>

        </div>
    );
}
 
export default Location;