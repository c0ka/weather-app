export const Search = ({
  placeHolder,
  value,
  onFocus,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      className="h-10 text-lg text-gray-800 text-right px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
      type="text"
      placeholder={placeHolder}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}