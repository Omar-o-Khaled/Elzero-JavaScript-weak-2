let Page_title="Elzero",title_description="Elzero Web School",date_card="25/10";

let content=`
    <div class="card"> 
        <h3>Hello ${Page_title}</h3>
        <p>${title_description}</p>
        <span>${date_card}</span>
        <hr>
    </div>`;

document.write(content.repeat(4));
