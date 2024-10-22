const Button = ({ children, ...props }: React.ComponentPropsWithoutRef<"button">) => (
  <button {...props} className="px-10 py-2 w-full mt-2 border-2 font-semibold text-blue-600 border-blue-600 rounded-md hover:text-white hover:bg-blue-600 transition-all">{children}</button>
);

export default Button;
