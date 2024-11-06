const PrimaryButton = () => {
  return (
    <a href="#_" className="
      w-32 h-12
      relative inline-flex 
      items-center justify-center
      px-6 py-2 overflow-hidden
      text-primary-600 font-medium text-md 
      transition duration-300 ease-out border-2 
      border-primary-500 rounded-full 
      shadow-md group
    ">
      <span className="
      absolute inset-0 flex
      items-center justify-center
      w-full h-full 
      text-white duration-300 
      -translate-x-full 
      bg-primary-500 
      group-hover:translate-x-0 ease">
        <svg 
          className="w-6 h-6" 
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
            <path 
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3">
            </path>
        </svg>
      </span>
      <span className="
        absolute flex 
        items-center justify-center 
        w-full h-full 
        text-primary-500 
        transition-all duration-300 
        transform group-hover:translate-x-full ease
      ">
        Button Text
      </span>
      <span className="relative invisible">Button Text</span>
 </a>
  )
}

export default PrimaryButton