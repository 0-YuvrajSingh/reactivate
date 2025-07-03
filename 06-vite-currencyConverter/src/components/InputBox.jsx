function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  disabledAmount = false,
}) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-orange-400">
        {label}
      </label>

      <input
        type="number"
        className="w-full p-2 mb-2 bg-black border border-orange-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        value={amount}
        disabled={disabledAmount}
        onChange={(e) => onAmountChange(Number(e.target.value))}
      />

      <select
        className="w-full p-2 bg-black border border-orange-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option} className="text-black">
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputBox;
