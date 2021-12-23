function HeaderItem({ title, Icon }) {
  return (
    <div
      className="flex flex-col items-center 
    cursor-pointer group
    w-12 sm:w-20 hover:text-white"
    >
      <Icon className="h-8 mb-1 hover:animate-bounce" />
      <p
        className="tracking-widest 
      group-hover:opacity-100 opacity-0"
      >
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
