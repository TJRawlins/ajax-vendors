$(() => {
    get_vendors()
})

const get_vendors = () => {
    $.getJSON("http://localhost:5555/api/vendors")
        .done((res) => {
            console.log(res)
            display(res)
        })
        .fail((err) => {
            console.error(err);
        });
}

const display = (vendors) => {
    let tbody = $("#tbody");
    tbody.empty();
    for(let v of vendors) {
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
        let a1 = $(`<a href='get-vendor.html?id=${v.id}'>Detail</a>`);
        let a2 = $(`<a href='put-vendor.html?id=${v.id}'>Edit</a>`);
        let sep = $("<span> | </span>")
        let tda = $("<td></td>");
        tda.append(a1);
        tda.append(sep)
        tda.append(a2);
        tr.append(tda)
        tbody.append(tr);
    }    
}