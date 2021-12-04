export const ErrorScreen = ({ errorMessage, children }) => {
  return (
    <div className="max-w-xs text-center">
      <h1 className="mb-8">{errorMessage}</h1>
      {children}
    </div>
  )
}