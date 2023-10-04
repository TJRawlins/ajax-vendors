$(() => {
    console.log('Ready!');
    let data = document.URL.split("?")[1];
    let id = Number(data.split("=")[1]);
    get_vendor(id);
});

let vendor = null;

const get_vendor = (id) => {
    $.getJSON(`http://localhost:5555/api/vendors/${id}`)
        .done((res) => {
            vendor = res;
            console.log(res)
            display_vendor(res)
        })
        .fail((err) => {
            console.error(err);
        });
}

// JQUERY
const put_vendor = (vendor) => {
    $.ajax({
        method: "PUT",
        url: `http://localhost:5555/api/vendors/${vendor.id}`,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    }).done((res) => {
        console.log(res)
        document.location = "get-vendors.html";
    })
    .fail((err) => {
        console.error(err);
    });
}

const getDataFromHtml = () => {
    let vendor = {};
    vendor.id = +document.getElementById("pid").value;
    vendor.code = document.getElementById("pcode").value;
    vendor.name = document.getElementById("pname").value;
    vendor.address = document.getElementById("paddress").value;
    vendor.city = document.getElementById("pcity").value;
    vendor.state = document.getElementById("pstate").value;
    vendor.zip = document.getElementById("pzip").value;
    vendor.phone = document.getElementById("pphone").value;
    vendor.email = document.getElementById("pemail").value;
    return vendor; 
}

const save = () => {
    let vendor = getDataFromHtml();
    put_vendor(vendor);
}

const display_vendor = (vendor) => {
    document.getElementById("pid").value = vendor.id;
    document.getElementById("pcode").value = vendor.code;
    document.getElementById("pname").value = vendor.name; 
    document.getElementById("paddress").value = vendor.address;
    document.getElementById("pcity").value = vendor.city;
    document.getElementById("pstate").value = vendor.state;
    document.getElementById("pzip").value = vendor.zip;
    document.getElementById("pphone").value = vendor.phone;
    document.getElementById("pemail").value = vendor.email;
}