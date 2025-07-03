import { useState } from "react";
import InputBox from "./components/InputBox";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    const rate = currencyInfo[toCurrency];
    if (!rate) return;
    setConvertedAmount((amount * rate).toFixed(2));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black/70">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609051646805-d733c8b6ef42?auto=format&fit=crop&w=1470&q=80')",
        }}
      ></div>

      {/* Converter UI */}
      <div className="relative z-10 w-full max-w-md bg-black bg-opacity-90 p-6 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold text-orange-500 mb-6 text-center">
          Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From Input */}
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={setAmount}
            onCurrencyChange={setFromCurrency}
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            disabledAmount={false}
          />

          {/* Swap */}
          <div className="text-center my-4">
            <button
              type="button"
              onClick={swap}
              className="text-xl px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
            >
              🔁 Swap
            </button>
          </div>

          {/* To Input */}
          <InputBox
            label="To"
            amount={convertedAmount}
            onCurrencyChange={setToCurrency}
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            disabledAmount={true}
          />

          {/* Convert Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-orange-500 text-black font-semibold py-2 rounded hover:bg-orange-600"
            >
              Convert {fromCurrency.toUpperCase()} → {toCurrency.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
