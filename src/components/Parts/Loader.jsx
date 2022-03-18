import React from 'react'

const Loader = () => {
    return (


        <div className="fixed top-0 bottom-0 z-30 h-full left-0 right-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            {/* <div className="bg-white h-[600px]  my-20 w-[600px] rounded-[20px] p-2"> */}
            <div class="loader"></div>
            {/* </div> */}
        </div>
    )
}

export default Loader