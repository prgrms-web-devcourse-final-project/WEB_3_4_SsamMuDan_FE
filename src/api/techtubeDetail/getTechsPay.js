import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getTechsPay = async (orderId, paymentKey, amount) => {
  console.log('orderId|', orderId, 'paymentKey|', paymentKey, 'amount|', amount);
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.tosspayconfirm, {
      params: {
        orderId: orderId.trim(),
        paymentKey: paymentKey.trim(),
        amount: Number(amount),
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching 토스페이:', error);
    throw error;
  }
};

export default getTechsPay;
