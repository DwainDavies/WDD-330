const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
});

fetch(myRequest)
    .then(response => response.blob())
    .then(myBlob => {
        myImage.src = URL.createObjectURL(myBlob);
    });

const anotherRequest = new Request(myRequest, myInit);