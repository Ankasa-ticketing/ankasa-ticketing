import vector2 from '../assets/logo/vector 02.svg'
import arrow from '../assets/logo/arrow.svg'
import { useState } from 'react'

const SearchResult = () => {
    const [showDetail, setShowDetails] = useState(false)
    const [showTransit, setShowTransit] = useState(false)

    function setDetail() {
        setShowDetails(!showDetail)
    }

    function transit() {
        setShowTransit(!showTransit)
    }

    return (
        <>
            <div className="bg-blue-500 bg-[url('/src/assets/logo/blueplane.svg')] bg-no-repeat h-44 rounded-b-lg">
                <div className="flex w-full justify-between pt-[55px] px-10 pb-10 font-[Poppins]">
                    <div>
                        <img
                            className="absolute left-[140px]"
                            src={vector2}
                            alt=""
                        />
                        <div className="flex gap-10 ml-[170px]">
                            <h6 className="text-white">INA</h6>
                            <img src={arrow} alt="" />
                            <h6 className="text-white">JPN</h6>
                        </div>
                    </div>

                    <div className="flex gap-5 items-center mr-32">
                        <div>
                            <h5 className="text-white">Change search</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full pl-10 pr-10 gap-10 items-center bg-[#F5F6FA] px-6 font-[Poppins] pt-10">
                <div className="flex">
                    <div className="flex gap-32 items-center">
                        <h4>Filter</h4>
                        <p className="m-0">Reset</p>
                    </div>
                </div>
                <div className="w-full justify-between flex items-center">
                    <div>
                        <div className="flex items-center gap-2">
                            <h4>Select Ticket</h4>
                            <p className="m-0">(6 flight found)</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <h6 className="m-0">Sort by</h6>
                            <img src="/src/assets/logo/arrowtop.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex bg-[#F5F6FA]">
                <div className="flex flex-auto w-8 bg-[#F5F6FA] h-[1250px]">
                    <div className="rounded-2xl bg-white w-[400px] ml-24  m-[30px] shadow">
                        <div className="flex justify-between w-full pr-5 pl-5 pt-4">
                            <div className="font-bold text-[16px]">Transit</div>
                            <button onClick={transit}>
                                <img
                                    className="w-3"
                                    src="/src/assets/images/btnback.svg"
                                    alt=""
                                />
                            </button>
                        </div>
                        {showTransit ? (
                            <>
                                <div className="w-full flex justify-between pr-5 pl-5 mt-10">
                                    <p>Direct</p>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className="w-full flex justify-between  pr-5 pl-5">
                                    <p>Direct</p>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className="w-full flex justify-between  pr-5 pl-5">
                                    <p>Direct</p>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <hr className="ml-10 mr-10" />
                            </>
                        ) : (
                            <div></div>
                        )}
                        <div className="flex justify-between w-full pr-5 pl-5 pt-4">
                            <div className="font-bold text-[16px]">Transit</div>

                            <img
                                className="w-3"
                                src="/src/assets/images/btnback.svg"
                                alt=""
                            />
                        </div>
                        <div className="w-full flex justify-between pr-5 pl-5 mt-10">
                            <p>Direct</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="w-full flex justify-between  pr-5 pl-5">
                            <p>Direct</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="w-full flex justify-between  pr-5 pl-5">
                            <p>Direct</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <hr className="ml-10 mr-10" />
                    </div>
                </div>
                <div className="flex flex-auto w-96 pt-[30px] flex-col gap-10 bg-[#F5F6FA]">
                    <div className="max-w-[878px] bg-white shadow-xl h-auto rounded-[15px] flex flex-col gap-[35px] pl-10 pr-10">
                        <div className="flex items-center pt-3">
                            <img
                                src="/src/assets/images/garuda-indonesia.svg"
                                className="w-32"
                                alt=""
                            />
                            <p>Garuda Indonesia</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-3">
                                <div>
                                    IDN
                                    <div>12:33</div>
                                </div>
                                <div>
                                    <img
                                        src="/src/assets/images/plane-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    JPN
                                    <div>15:21</div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>3 hours 11 minutes</div>
                                    <div className="text-center">1 transit</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-3">
                                    <img
                                        src="/src/assets/images/bag.svg"
                                        alt=""
                                    />
                                    <img
                                        src="/src/assets/images/food.svg"
                                        alt=""
                                    />
                                    <img
                                        src="/src/assets/images/wifi.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div>$214,00/pax</div>
                                <div>
                                    <button className="bg-blue-400 w-[130px] h-[45px] text-white font-bold shadow-xl rounded-lg">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <p className="m-0">View Details</p>
                                <button onClick={setDetail}>
                                    <img
                                        src="/src/assets/images/btnback.svg"
                                        className="w-5"
                                    />
                                </button>
                            </div>
                            {showDetail ? (
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </p>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                    <div className="max-w-[878px] bg-white shadow-xl h-auto rounded-[15px] flex flex-col gap-[35px] pl-10 pr-10">
                        <div className="flex items-center">
                            <img
                                src="/src/assets/images/garuda-indonesia.svg"
                                className="w-32"
                                alt=""
                            />
                            <p>Garuda Indonesia</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-3">
                                <div>
                                    IDN
                                    <div>12:33</div>
                                </div>
                                <div>
                                    <img
                                        src="/src/assets/images/plane-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    JPN
                                    <div>15:21</div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>3 hours 11 minutes</div>
                                    <div className="text-center">1 transit</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-3">
                                    <img
                                        src="/src/assets/images/bag.svg"
                                        alt=""
                                    />
                                    <img
                                        src="/src/assets/images/food.svg"
                                        alt=""
                                    />
                                    <img
                                        src="/src/assets/images/wifi.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div>$214,00/pax</div>
                                <div>
                                    <button className="bg-blue-400 w-[130px] h-[45px] text-white font-bold shadow-xl rounded-lg">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <p className="m-0">View Details</p>
                                <button onClick={setDetail}>
                                    <img
                                        src="/src/assets/images/btnback.svg"
                                        className="w-5"
                                    />
                                </button>
                            </div>
                            {showDetail ? (
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </p>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                    <div className="max-w-[878px] bg-white shadow-xl h-auto rounded-[15px] flex flex-col gap-[35px] pl-10 pr-10">
                        <div className="flex items-center">
                            <img
                                src="/src/assets/images/garuda-indonesia.svg"
                                className="w-32"
                                alt=""
                            />
                            <p>Garuda Indonesia</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-3">
                                <div>
                                    IDN
                                    <div>12:33</div>
                                </div>
                                <div>
                                    <img
                                        src="/src/assets/images/plane-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    JPN
                                    <div>15:21</div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>3 hours 11 minutes</div>
                                    <div className="text-center">1 transit</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-3">
                                    <img
                                        src="/src/assets/images/bag.svg"
                                        alt=""
                                    />
                                    <img
                                        src="/src/assets/images/food.svg"
                                        alt=""
                                    />
                                    <img
                                        src="/src/assets/images/wifi.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div>$214,00/pax</div>
                                <div>
                                    <button className="bg-blue-400 w-[130px] h-[45px] text-white font-bold shadow-xl rounded-lg">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <p className="m-0">View Details</p>
                                <button onClick={setDetail}>
                                    <img
                                        src="/src/assets/images/btnback.svg"
                                        className="w-5"
                                    />
                                </button>
                            </div>
                            {showDetail ? (
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </p>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                    <div className="max-w-[878px] bg-white shadow-xl h-auto rounded-[15px] flex flex-col gap-[35px] pl-10 pr-10">
                        <div className="flex items-center">
                            <img
                                src="/src/assets/images/garuda-indonesia.svg"
                                className="w-32"
                                alt=""
                            />
                            <p>Garuda Indonesia</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-3">
                                <div>
                                    IDN
                                    <div>12:33</div>
                                </div>
                                <div>
                                    <img
                                        src="/src/assets/images/plane-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    JPN
                                    <div>15:21</div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>3 hours 11 minutes</div>
                                    <div className="text-center">1 transit</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-3">
                                    <img
                                        src="/src/assets/images/bag.svg"
                                        alt=""
                                    />
                                    <img
                                        src="/src/assets/images/food.svg"
                                        alt=""
                                    />
                                    <img
                                        src="/src/assets/images/wifi.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div>$214,00/pax</div>
                                <div>
                                    <button className="bg-blue-400 w-[130px] h-[45px] text-white font-bold shadow-xl rounded-lg">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <p className="m-0">View Details</p>
                                <button onClick={setDetail}>
                                    <img
                                        src="/src/assets/images/btnback.svg"
                                        className="w-5"
                                    />
                                </button>
                            </div>
                            {showDetail ? (
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </p>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                    <div className="max-w-[878px] bg-white shadow-xl h-auto rounded-[15px] flex flex-col gap-[35px] pl-10 pr-10">
                        <div className="flex items-center">
                            <img
                                src="/src/assets/images/garuda-indonesia.svg"
                                className="w-32"
                                alt=""
                            />
                            <p>Garuda Indonesia</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-3">
                                <div>
                                    IDN
                                    <div>12:33</div>
                                </div>
                                <div>
                                    <img
                                        src="/src/assets/images/plane-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    JPN
                                    <div>15:21</div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>3 hours 11 minutes</div>
                                    <div className="text-center">1 transit</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-3">
                                    <img
                                        src="/src/assets/images/bag.svg"
                                        alt=""
                                    />
                                    <img
                                        src="/src/assets/images/food.svg"
                                        alt=""
                                    />
                                    <img
                                        src="/src/assets/images/wifi.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div>$214,00/pax</div>
                                <div>
                                    <button className="bg-blue-400 w-[130px] h-[45px] text-white font-bold shadow-xl rounded-lg">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <p className="m-0">View Details</p>
                                <button onClick={setDetail}>
                                    <img
                                        src="/src/assets/images/btnback.svg"
                                        className="w-5"
                                    />
                                </button>
                            </div>
                            {showDetail ? (
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </p>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                    <div className="max-w-[878px] bg-white shadow-xl h-auto rounded-[15px] flex flex-col gap-[35px] pl-10 pr-10">
                        <div className="flex items-center">
                            <img
                                src="/src/assets/images/garuda-indonesia.svg"
                                className="w-32"
                                alt=""
                            />
                            <p>Garuda Indonesia</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-3">
                                <div>
                                    IDN
                                    <div>12:33</div>
                                </div>
                                <div>
                                    <img
                                        src="/src/assets/images/plane-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    JPN
                                    <div>15:21</div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>3 hours 11 minutes</div>
                                    <div className="text-center">1 transit</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-3">
                                    <img
                                        src="/src/assets/images/bag.svg"
                                        alt=""
                                    />
                                    <img
                                        src="/src/assets/images/food.svg"
                                        alt=""
                                    />
                                    <img
                                        src="/src/assets/images/wifi.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div>$214,00/pax</div>
                                <div>
                                    <button className="bg-blue-400 w-[130px] h-[45px] text-white font-bold shadow-xl rounded-lg">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <p className="m-0">View Details</p>
                                <button onClick={setDetail}>
                                    <img
                                        src="/src/assets/images/btnback.svg"
                                        className="w-5"
                                    />
                                </button>
                            </div>
                            {showDetail ? (
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </p>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResult