import { RiArrowLeftLine } from "@remixicon/react";
import { priceFormatter } from "@/utils/price";

type PaymentPanelProps = {
  totalPayment: number;
};

function PaymentPanel({ totalPayment }: PaymentPanelProps) {
  return (
    <div className="md:col-span-1 bg-gray-100 p-4 rounded-lg md:self-start">
      <h5 className="text-2xl">جزئیات پرداخت</h5>

      <div className="my-6 flex justify-between">
        <span className="font-bold">مجموع</span>
        <span>{priceFormatter(totalPayment)} تومان</span>
      </div>

      <div className="my-6 flex justify-between">
        <span className="font-bold">تخفیف</span>
        <span>۰ تومان</span>
      </div>

      <div className="mt-8 mb-4">
        <button className="w-full flex gap-2 justify-center items-center bg-pink-800 text-white py-2 rounded-lg cursor-pointer">
          سفارش
          <RiArrowLeftLine size={16} />
        </button>
      </div>
    </div>
  );
}

export default PaymentPanel;
