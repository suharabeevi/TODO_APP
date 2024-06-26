
import React from 'react';

// Initialization for ES Users



function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white w-full">
      <header>
        <div className="bg-black w-full h-5 font-normal text-end text-white">
          English
          </div>


          <nav className="relative h-24 flex w-full flex-wrap items-center justify-between shadow-dark-mild dark:bg-neutral-700">
          <img
            src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711122599/64480603-8980-4278-bb9a-5b2ffdb5925e_1711116791789477156_hlyhro.png"
            alt=""
            className='h-20 border-r-2 border-white-800'
          />
            <input
              type="search"
              className="  flex items-center absolute m-72 w-96 rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-1 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300"

              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
             <div class="relative" data-twe-dropdown-ref>
  <button
    class="ml-96 rounded 	 bg-red-600 p-3 text-xsfont-medium uppercase leading-normal w-40 text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-red-400 hover:shadow-red-400 focus:bg-red-600 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-red-500 active:shadow-red-500 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button"
    id="dropdownMenuButton1"
    data-twe-dropdown-toggle-ref
    aria-expanded="false"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    Login 
    
  
  </button>
  
</div>
              
            {/* <button class="bg-red-500 hover:bg-red-400 hover:text-white text-black font-bold pl-8 pr-8 p-2 rounded">Login</button> */}
            <div className="inline-block ml-32 space-x-6 p-5">
             </div>
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
       
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 inline"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
           */}
        </nav>

        {/* <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" /> */}
        
      </header>
    </div>
  );
}

export default Header;
