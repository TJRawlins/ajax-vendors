// Initialize JQuery
$(() => {
        console.log('Ready!');
        let data = document.URL.split("?")[1];
        let id = Number(data.split("=")[1]);
        get_vendor(id);

        // JQuery click event for remove()
        $("#remove").on("click", () => {
            remove();
        })
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

const display_vendor = (v) => {
    let tbody = $("#tbody");
    tbody.empty();
    let tr = $("<tr></tr>");
    tr.append( $(`<td>${v.id}</td>`) );
    tr.append( $(`<td>${v.code}</td>`) );
    tr.append( $(`<td>${v.name}</td>`) );
    tr.append( $(`<td>${v.address}</td>`) );
    tr.append( $(`<td>${v.city}</td>`) );
    tr.append( $(`<td>${v.state}</td>`) );
    tr.append( $(`<td>${v.zip}</td>`) );
    tr.append( $(`<td>${v.phone}</td>`) );
    tr.append( $(`<td>${v.email}</td>`) );
    tbody.append(tr);
}

// USING JQUERY FOR THIS ONE - SEE TOP
const remove = () => {
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("DELETE", `http://localhost:5555/api/vendors/${vendor.id}`, true);
    http.onload = () => {
        console.log(http.response);
    }
    http.send();
    document.location = "get-vendors.html";
}

$("#remove").toggleClass("hide")
$("#remove-initial").on("click", () => {
    $("#remove").toggleClass("hide")
    $("#remove-initial").toggleClass("hide")
})