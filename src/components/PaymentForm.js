import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
// import Keyboard from "react-simple-keyboard";
// import "react-simple-keyboard/build/css/index.css";


const PaymentForm = () => {
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState('');
  // const [inputName, setInputName] = useState(""); // برای مدیریت فیلد فعال
  // const [keyboardVisible, setKeyboardVisible] = useState(false); // مدیریت نمایش کیبورد
  // const [keyboardInput, setKeyboardInput] = useState(""); // برای ورودی از کیبورد

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paymentData = {
      userName: username,
      amount: parseInt(amount),
    };



    try {
      const response = await fetch('http://localhost:8096/user/recharge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        const result = await response.text();
        console.log('Success:', result);
        alert(result);  // نمایش نتیجه در پنجره هشدار
      } else {
        console.error('Error submitting payment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
      // مدیریت کلیک روی فیلدهای ورودی

      // const handleKeyboardChange = (input) => {
      //   setKeyboardInput(input); // مقدار کیبورد مجازی را به‌روزرسانی می‌کند
      //   if (inputName === "username") {
      //     setUsername(input); // مقدار فیلد username را تنظیم می‌کند
      //   } else if (inputName === "amount") {
      //     setAmount(input); // مقدار فیلد amount را تنظیم می‌کند
      //   }
      // };
      // const handleFieldClick = (field) => {
      //   setInputName(field); // فیلد فعال را مشخص می‌کند
      //   setKeyboardInput(field === "username" ? username : amount); // مقدار فیلد را تنظیم می‌کند
      //   setKeyboardVisible(true); // نمایش کیبورد مجازی
      // };
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(https://s8.uupload.ir/files/varune_wallpaper_6_copy.1_1dxi.jpg)', // لینک به تصویر
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: 'rgba(44, 44, 44, 1)' }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{color:'rgba(255, 255, 255, 1)'}}>
            شارژ حساب
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="شماره اکانت"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // onClick={() => handleFieldClick("username")}
              required
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // رنگ حاشیه پیش‌فرض (مشکی)
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // رنگ حاشیه هنگام هاور
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgba(176, 69, 13, 1)', // رنگ حاشیه هنگام فوکوس (نارنجی)
                  },
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'white', // رنگ Placeholder (پیش‌نویس)
                  opacity: 1, // برای اطمینان از دیده شدن کامل Placeholder
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // رنگ لیبل (تکست پیش‌نویس)
                },
                '& .MuiInputBase-input': {
                  color: 'white', // رنگ تکست ورودی
                },
              }}
            />
            <TextField
              fullWidth
              label="مبلغ شارژ"
              variant="outlined"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              // onClick={() => handleFieldClick("amount")}
              required
              sx={{ mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // رنگ حاشیه پیش‌فرض (مشکی)
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // رنگ حاشیه هنگام هاور
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgba(176, 69, 13, 1)', // رنگ حاشیه هنگام فوکوس (نارنجی)
                  },
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'white', // رنگ Placeholder (پیش‌نویس)
                  opacity: 1, // برای اطمینان از دیده شدن کامل Placeholder
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // رنگ لیبل (تکست پیش‌نویس)
                },
                '& .MuiInputBase-input': {
                  color: 'white', // رنگ تکست ورودی
                },
               }}
            />
            <Button type="submit" variant="contained" color="primary"  fullWidth sx={{backgroundColor : 'rgba(176, 69, 13, 1)'}}>
              تایید 
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default PaymentForm;







// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box } from '@mui/material';

// const PaymentForm = () => {
//   const [username, setUsername] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const paymentData = {
//       userName: username,
//       amount: parseInt(amount),
//     };

//     try {
//       const response = await fetch('http://localhost:8096/user/recharge', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(paymentData),
//       });

//       if (response.ok) {
//         const result = await response.text();
//         console.log('Success:', result);
//         alert(result);  // نمایش نتیجه
//       } else {
//         console.error('Error submitting payment');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <Box
//     sx={{
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundImage: 'url(https://example.com/your-background-image.jpg)', // لینک به تصویر
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     }}
//     >
//     <Container maxWidth="sm">
//     <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 ,marginTop:30}}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         شارژ حساب
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           label="شماره اکانت"
//           variant="outlined"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           fullWidth
//           label="مقدار شارژ"
//           variant="outlined"
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           required
//           sx={{ mb: 2 }}
//         />
//         <Button type="submit" variant="contained" color="primary" fullWidth>
//           تایید 
//         </Button>
//       </form>
//     </Box>
// //     <Container maxWidth="sm">
// //       <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 ,marginTop:30}}>
// //         <Typography variant="h4" component="h1" gutterBottom>
// //           شارژ حساب
// //         </Typography>
// //         <form onSubmit={handleSubmit}>
// //           <TextField
// //             fullWidth
// //             label="شماره اکانت"
// //             variant="outlined"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //             sx={{ mb: 2 }}
// //           />
// //           <TextField
// //             fullWidth
// //             label="مقدار شارژ"
// //             variant="outlined"
// //             type="number"
// //             value={amount}
// //             onChange={(e) => setAmount(e.target.value)}
// //             required
// //             sx={{ mb: 2 }}
// //           />
// //           <Button type="submit" variant="contained" color="primary" fullWidth>
// //             تایید 
// //           </Button>
// //         </form>
// //       </Box>
// //     </Container>
// //   );
// // };

// export default PaymentForm;



// // import React, { useState } from 'react';

// // const PaymentForm = () => {
// //   const [username, setUsername] = useState('');
// //   const [amount, setAmount] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const paymentData = {
// //       userName: username,
// //       amount: parseInt(amount),
// //     };

// //     try {
// //       const response = await fetch('http://localhost:8096/user/recharge', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(paymentData),
// //       });

// //       if (response.ok) {
// //         const result = await response.text();
// //         console.log('Success:', result);
// //         alert(result);  // نمایش نتیجه در پنجره هشدار
// //       } else {
// //         console.error('Error submitting payment');
// //       }
// //     } catch (error) {
// //       console.error('Error:', error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div>
// //         <label>Username:</label>
// //         <input
// //           type="text"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label>Amount:</label>
// //         <input
// //           type="number"
// //           value={amount}
// //           onChange={(e) => setAmount(e.target.value)}
// //           required
// //         />
// //       </div>
// //       <button type="submit">Submit Payment</button>
// //     </form>
// //   );
// // };

// // export default PaymentForm;