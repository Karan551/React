import React, { useState } from "react";
import Table from "./Table";

// TODO: fix some error test case

function Main() {
    const [amount, setAmount] = useState("");
    
    const [isError, setIsError] = useState(false);

    // const [checkInvalidAmount, setCheckInvalidAmount] = useState(false);

    const availableBalance = 17042.67;

    function checkError(value) {
  
            console.log("this is error in touched");
            if (value) {
                setIsError(false)
                if (value > availableBalance) {
                    setIsError("Amount cannot exceed their available balance.");
                }
                else if (value <= 0.01) {
                    setIsError("amount cannot be less than 0.01");
                }

            } else  {
                console.log("This is empty value:: after touched");
                setIsError("Amount can't be empty.");

            }
        // }else{
        //     // setIsError("")
        //     console.log("this is------ error out touched");
        // }
    }

    const handleAmountChange = (e) => {
        let value = e.target.value;

        setAmount(value);
        checkError(value);
        console.log("this is amount value::", value);
    };

    const handleBlur = () => {
        setTouched(true);
        // checkError(amount);
    };
console.log("This is error::",isError);
    console.log("This is amount value::", amount);
    return (
        <div className="layout-column align-items-center mx-auto">
            <h1>CryptoRank Exchange</h1>
            <section>
                <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
                    <label>
                        I want to exchange $
                        <input className="w-50 px-8 py-4 rounded-xl outline-none  border border-black focus:border-indigo-600 focus:border-2 mx-3 " data-testid="amount-input"
                            required type="number" placeholder="USD"
                            min={0}
                            value={amount}
                            // onBlur={handleBlur}
                            onChange={handleAmountChange}
                        /> of my $
                        <span>{availableBalance}</span>:
                    </label>
                    {
                        isError && <p data-testid="error" className="form-hint error-text mt-3 pl-0 ml-0">
                            {isError}

                        </p>
                    }

                    {/* The errors can be Amount cannot be empty /be less than $0.01/exceed the available balance */}
                </div>
            </section>
            <Table
                amount={amount}
                availableBalance={availableBalance}
                isError={isError} />
        </div>
    );
}

export default Main;
