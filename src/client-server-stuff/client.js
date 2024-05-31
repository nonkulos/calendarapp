const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/formSubmit", {method: "POST"})
        .then(function(res){
            if(res.ok){
                console.log("successfully posted data");
                return;
            }
            throw new Error("failed to post data");
        })
        .catch(function(res){
            console.log("failed to post data");
        })
};

export default handleFormSubmit;