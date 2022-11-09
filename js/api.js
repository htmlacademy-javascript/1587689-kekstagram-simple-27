const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    });
};

const sendData = (formData, onSuccess, fail) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        fail();
      }
    })
    .catch(() => {
      fail();
    });
};

export { getData, sendData };
