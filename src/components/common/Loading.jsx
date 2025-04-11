import { motion } from 'motion/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getTechsPay from '@/api/techtubeDetail/getTechsPay';
import { useEffect } from 'react';

function Loading() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const paymentKey = searchParams.get('paymentKey');
  const orderId = searchParams.get('orderId');
  const amount = searchParams.get('amount');
  console.log('amount', typeof amount);

  console.log('paymentKey', paymentKey, 'orderId', orderId, 'amount', amount);
  // useEffect(() => {
  //   if (orderId && paymentKey && amount) {
  //     async function tosspayconfirm() {
  //       try {
  //         const data = await getTechsPay(orderId, paymentKey, amount);
  //         console.log('결제 승인 성공:', data);
  //         // navigate('/payment');
  //       } catch (err) {
  //         console.error('결제 승인 실패', err);
  //         // navigate('/payfail');
  //       }
  //     }
  //     tosspayconfirm();
  //   }
  // }, [orderId, paymentKey, amount, navigate]);

  // useEffect(() => {
  //   const updatePost = async () => {
  //     try {
  //       await getTechsPay({
  //         orderId: orderId.trim(),
  //         paymentKey: paymentKey.trim(),
  //         amount: Number(amount),
  //       });

  //       // 수정 성공 시 커뮤니티 페이지로 이동
  //       // navigate('/community');
  //     } catch (error) {
  //       console.error('게시글 수정 실패:', error);
  //     }
  //   };

  //   updatePost();
  // }, []);

  const dotVariants = {
    jump: {
      y: -30,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className=" h-[100vh] w-full flex justify-center">
      <motion.div
        animate="jump"
        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
        className="container"
      >
        <motion.div className="dot" variants={dotVariants} />
        <motion.div className="dot" variants={dotVariants} />
        <motion.div className="dot" variants={dotVariants} />
        <StyleSheet />
      </motion.div>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }

            .dot {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #00be7b;
                will-change: transform;
            }
            `}
    </style>
  );
}

export default Loading;
