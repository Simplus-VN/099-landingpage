export async function wait(second: number) {
  return new Promise<void>((accept) => {
    setTimeout(() => {
      accept();
    }, second * 1000);
  });
}

export function currencyConverter(amount: number, withSymBol = true) {
  if (amount && !isNaN(amount)) {
    return (
      amount.toLocaleString("vi-VN", {
        minimumFractionDigits: 0,
      }) + (withSymBol ? "" : "")
    );
  }
  return amount ? `${amount}` : "0";
}
