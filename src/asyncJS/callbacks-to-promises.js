const db = {
  getData: (cb) => {
    setTimeout(() => cb(null, {}), 1000);
  },
  processData: (data, cb) => {
    data.processed = "OK";
    setTimeout(() => cb(null, data), 2000);
  },
  saveData: (data, cb) => {
    setTimeout(() => cb(null, data), 3000);
  },
};

// db.getData((err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   data.a = "test";
//   data.b = 1111;

//   db.processData(data, (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     db.saveData((err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log("finished");
//     });
//   });
// });

// convert code up there to better code.

const saveData = (data) =>
  new Promise((res, rej) => {
    db.saveData(data, (err, data) => {
      if (err) {
        console.log(err);
        rej();
      }
      console.log("finished", data);
      res();
    });
  });

const processData = async (data) => {
  return new Promise((res, rej) => {
    db.processData(data, (err, data) => {
      if (err) {
        console.log(err);
        rej();
      }
      console.log("processed.", data);
      res(data);
    });
  });
};

const getData = () =>
  new Promise((res, rej) => {
    db.getData((err, data) => {
      if (err) {
        console.log(err);
        rej();
      }
      console.log("got data");
      res({ a: "test", b: 1111 });
    });
  });

(async () => {
  const data = await getData();
  const processed = await processData(data);
  await saveData(processed);
})();
