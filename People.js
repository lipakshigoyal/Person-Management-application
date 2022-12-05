document.querySelector('#click').addEventListener('click', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest()
    const value = document.querySelector('#se').value
    const url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            var response = JSON.parse(xhr.responseText)
            var id=`<span>${response[value-1].id}</span>`
            var name=`<span>${response[value-1].name}</span>`
            var username=`<span>${response[value-1].username}</span>`
            var email=`<span>${response[value-1].email}</span>`
            var address=`<span>${response[value-1].address.suite} ${response[value-1].address.street} ${response[value-1].address.city}</span>`
            var zipcode=`<span>${response[value-1].address.zipcode}</span>`
            var phone=`<span>${response[value-1].phone}</span>`
            var website=`<span>${response[value-1].website}</span>`
            var company=`<span>${response[value-1].company.name}</span>`
            var catchP=`<span>${response[value-1].company.catchPhrase}</span>`
            var bs=`<span>${response[value-1].company.bs}</span>`

            document.querySelector('#id').innerHTML = id;
            document.querySelector('#name').innerHTML = name;
            document.querySelector('#username').innerHTML = username;
            document.querySelector('#email').innerHTML = email;
            document.querySelector('#address').innerHTML = address;
            document.querySelector('#zipcode').innerHTML = zipcode;
            document.querySelector('#phone').innerHTML = phone;
            document.querySelector('#website').innerHTML = website;
            document.querySelector('#company').innerHTML = company;
            document.querySelector('#catchP').innerHTML = catchP;
           document.querySelector('#bs').innerHTML = bs;
        }
    }

    xhr.send()
})

document.querySelector('#add1').addEventListener('click',()=>{
  const value = document.querySelector('#w').value
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = `<input type="checkbox">`;
    cell2.innerHTML = value;
  });