/**
 *@param {object} props
 * @param {React.ReactNode} props.children
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} props
 * @returns
 */

const Buttons = ({ children, ...props }) => {
  return (
    <>
      <button
        {...props}
        className="cursor-pointer text-left hover:bg-gray-100 p-3 rounded transition-colors"
      >
        {children}
      </button>
    </>
  );
};

export default Buttons;
