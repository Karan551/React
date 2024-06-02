import accordData from "../data";
import { useState } from "react";
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [multiSelection, setMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    const handleSingleClick = (currentId) => {

        setSelected(currentId === selected ? null : currentId);

    };


    const handleMultiClick = (currentId) => {
        let cpyMultiple = [...multiple];
        let findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(currentId);
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1);
        }
        setMultiple(cpyMultiple);
        console.log("This is copy multiple :", cpyMultiple);

        console.log(currentId);
        console.log(selected, multiple);
    };


    return (
        <>
            <section className="flex justify-center items-center  flex-col w-2/3 mx-auto">
                <button className="w-1/3 inline-block my-2 px-2 py-4 font-bold text-xl border-2 border-blue-400 text-black bg-white rounded-lg transition-all hover:scale-105 hover:border-white hover:text-white hover:bg-[#333]"

                    onClick={() => { setMultiSelection(!multiSelection); }}

                >Enable Multiple Selection</button>

                {
                    accordData && accordData.length > 0 ?
                        (
                            accordData.map((eachDataItem) => (
                                <div className="wrapper  px-4 py-2  my-1 rounded-md border-2  border-blue-400 w-full bg-white text-black" key={eachDataItem.id}>
                                    <div className="flex space-x-4 font-semibold justify-between hover:cursor-pointer"

                                        onClick={() => {
                                            multiSelection ? handleMultiClick(eachDataItem.id) :
                                                handleSingleClick(eachDataItem.id);
                                        }}
                                    >


                                        <div className="heading text-xl font-semibold font-sans">
                                            <h3 >{eachDataItem.question}</h3>
                                        </div>
                                        <button className="bg-orange-400 text-xl px-4 rounded-xl text-white hover:bg-orange-700"
                                        >
                                            +
                                        </button>
                                    </div>
                                    {
                                        multiSelection ?
                                            multiple.indexOf(eachDataItem.id) !== -1 &&
                                            (<div className="content text-lg font-serif">{eachDataItem.answer}
                                            </div>)
                                       
                                    : selected === eachDataItem.id && (<div className="content text-lg font-serif">{eachDataItem.answer}
                                    </div>)
                                    }



                                    {/* {
                                        selected === eachDataItem.id ? <div className="content text-lg font-serif">{eachDataItem.answer}
                                        </div> : null
                                    } */}





                                </div>
                            ))
                        ) : <div>No Data Found.</div>
                }
            </section>
        </>
    );

}
