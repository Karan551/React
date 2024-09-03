import React from 'react';
import Button from "./Button";

const Form = ({ reqType, setReqType }) => {
    return (
        <form>
            <Button
                reqType={reqType}
                btnText={'users'}
                setReqType={setReqType}

            />
            <Button
                btnText={'posts'}
                reqType={reqType}
                setReqType={setReqType}

            />
            <Button
                btnText={'comments'}
                reqType={reqType}
                setReqType={setReqType}
            />
        </form>
    );
};

export default Form;
