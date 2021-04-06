import './App.css';
import axios from 'axios';


function App() {
  const transactionData = {
    "transaction_details": {
      "order_id": "KOI-2",
      "gross_amount": 10000
    },
    "credit_card": {
      "secure": true
    },
    "item_details": [{
      "id": "ITEM1",
      "price": 30000,
      "quantity": 1,
      "name": "KOI Arbain Nawawi",
      "brand": "KOI",
      "category": "Kuliah",
      "merchant_name": "KOI"
    }],
    "customer_details": {
      "first_name": "Fakhry",
      "last_name": "Zuhair",
      "email": "fakhryzuhair@gmail.com",
      "phone": "+6282108210821",
      "billing_address": {
        "first_name": "Fakhry",
        "last_name": "Zuhair",
        "email": "fakhryzuhair@gmail.com",
        "phone": "+6282108210821",
        "address": "Banjarsari",
        "city": "Surakarta",
        "postal_code": "10101",
        "country_code": "IDN"
      },
      "shipping_address": {
        "first_name": "Fakhry",
        "last_name": "Zuhair",
        "email": "fakhryzuhair@gmail.com",
        "phone": "+6282108210821",
        "address": "Banjarsari",
        "city": "Surakarta",
        "postal_code": "10101",
        "country_code": "IDN"
      }
    }
  }
  async function ajaxGetToken(transactionData, callback) {
    const response = await axios.post('http://localhost:5000/payment', transactionData)
    const snapToken = response.data.transactionToken
    if (snapToken) {
      callback(null, snapToken);
    } else {
      callback(new Error('Failed to fetch snap token'), null);
    }
  }
  function PayNow() {
    window.snap.show();
    ajaxGetToken(transactionData, function (error, snapToken) {
      if (error) {
        window.snap.hide();
      } else {
        window.snap.pay(snapToken, {
          onSuccess: function (result) { console.log('success'); console.log(result); },
          onPending: function (result) { console.log('pending'); console.log(result); },
          onError: function (result) { console.log('error'); console.log(result); },
          onClose: function () { console.log('customer closed the popup without finishing the payment'); }
        });
      }
    });
  }
  function CheckMine() {
    window.snap.pay('29d296c1-956a-47d3-90d9-c30caa860427', {
      onSuccess: function (result) { console.log('success'); console.log(result); },
      onPending: function (result) { console.log('pending'); console.log(result); },
      onError: function (result) { console.log('error'); console.log(result); },
      onClose: function () { console.log('customer closed the popup without finishing the payment'); }
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={e => CheckMine()}>Check My Payment</button>
        <button onClick={e => PayNow()}>Pay Now</button>
      </header>
    </div>
  );
}

export default App;