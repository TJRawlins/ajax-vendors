// JQuery
const post_vendor = (vendor) => {
    $.ajax({
        method: "POST",
        url: "http://localhost:5555/api/vendors/",
        data: JSON.stringify(vendor),
        contentType: "application/json"
    }).done((res) => {
        console.log(res)
        display_vendor(res)
        document.location = "get-vendors.html";
    })
    .fail((err) => {
        console.error(err);
    });
}

const getDataFromHtml = () => {
    let vendor = {};
    vendor.id = 0;
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
    post_vendor(vendor);
}

const loaded = () => {
}

const display_vendor = (vendor) => {
    document.getElementById("pid").innerText = vendor.id;
    document.getElementById("pcode").value = vendor.code;
    document.getElementById("pname").value = vendor.name; 
    document.getElementById("paddress").value = vendor.address;
    document.getElementById("pcity").value = vendor.city;
    document.getElementById("pstate").value = vendor.state;
    document.getElementById("pzip").value = vendor.zip;
    document.getElementById("pphone").value = vendor.phone;
    document.getElementById("pemail").value = vendor.email;
}