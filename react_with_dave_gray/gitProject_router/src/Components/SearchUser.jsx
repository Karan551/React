import React, { useState } from 'react';

const SearchUser = () => {
    const [attempts, setAttempts] = useState(3);
    const [Loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [username, setUsername] = useState("");

    return (
        <div>SearchUser</div>
    );
};

export default SearchUser;