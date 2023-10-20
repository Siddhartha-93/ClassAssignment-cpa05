


function pro (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = {
            name: pizza,
            age: 30,
          };
          const error = false; // Set to true to simulate an error
    
          if (!error) {
            resolve(data); // Resolve with the data
          } else {
            reject('Error: Unable to fetch data'); // Reject with an error message
          }
        }, 2000); // Simulate a 2-second delay
      })
    //   .then((result) => {
    //           console.log('Data:', result);
    //         })
    //         .catch((error) => {
    //           console.error('Error:', error);
    //         });
    }

      // Using the Promise
       pro()
    .then((result) => {
      console.log('Data:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
//   console.log(pro())