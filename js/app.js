/*global Vue*/
/*global $*/

var app;

$.getJSON("resumeData.json", (fileData) => {
    var header; 
    var body = [];
    $.each(fileData, (index, item) => {
        if (item.title === "Personal") {
            header = item.items;
        }
        else {
            body.push(item);
        }
    });
    
    app = new Vue({
        el: "#app",
        data: {
            header, 
            body
        }
    });
    $(document).foundation();
});


/*

function expFormatter(id, items){
    $.each(items, (index, item) => {
        var temp;
        var date;
        if(item.dateRange.isOngoing){
            date = `<p>${item.dateRange.start.month} ${item.dateRange.start.year} - Present`;
        }
        else{
            date = `<p>${item.dateRange.start.month} ${item.dateRange.start.year} - ${item.dateRange.end.month} ${item.dateRange.end.year}`;
        }

        
        temp = `<div class="card">
                    <div class="card-divider">
                        <h5>${item.jobTitle} &mdash; ${item.title}</h5>
                    </div>
                    <div class="card-section">
                        <h6>${date}<br />
                        ${item.location.city} ${item.location.state}</h6>
                        <p>${item.description}</p>
                    </div>
                </div>`;
        $(id).append(temp);
    });
}

function eduFormatter(id, items){
    $.each(items, (index, item) => {
        var temp;
        var date;
        if(item.dateRange.isOngoing){
            date = `${item.dateRange.start.month} ${item.dateRange.start.year} - Present`;
        }
        else{
            date = `${item.dateRange.start.month} ${item.dateRange.start.year} - ${item.dateRange.end.month} ${item.dateRange.end.year}`;
        }
        
        temp = `<div class="card">
                    <div class="card-divider">
                        <h5>${item.title}</h5>
                    </div>
                    <div class="card-section">
                        <h6>${date}<br />
                        ${item.location.city} ${item.location.state}</h6>
                    </div>
                </div>`;
        $(id).append(temp);
    });
}

function projFormatter(id, items){
    $.each(items, (index, item) => {
        var temp;
        temp = `<div class="card">
                    <div class="card-divider">
                        <h5>${item.title}</h5>
                    </div>
                    <div class="card-section">
                        <h6>${item.overview}</h6>
                        <p>${item.description}</p>
                    </div>
                </div>`;
        $(id).append(temp);
    });
}

function skillFormatter(id, items){
    $.each(items, (index, item) => {
        temp = `<p>${item.description}</p>`;
        $(id).append(temp);
    });
}

function langFormatter(id, items){
    $.each(items, (index, item) => {
        temp = `<div class="card">
                    <div class="card-divider">
                        <h5>${item.title}</h5>
                    </div>`;
        if(item.description && item.description != "")
        {
            temp += `<div class="card-section">
                        <p>${item.description}</p>
                    </div>
                </div>`;
        }
                    
        $(id).append(temp);
    });
}

function techFormatter(id, items){
    
    $.each(items, (index, item) => {
        temp = `<li>${item}</li>`;
        $(id).append(temp);
    });
}
$(document).ready( () => {

/*    $.getJSON("resumeData.json", (fileData) => {
        $.each(fileData, (index, data) => {
            if(data.title != "Personal"){
                var accordItem =    `<li class='accordion-item' data-accordion-item>
                                        <a href='#panel${data.title}' class='accordion-title'><h4>${data.title}</h4></a>
                                        <div id='panel${data.title}' class='accordion-content' data-tab-content>
                                            <p class='accordionContent' id='${data.title}Content'></p>
                                        </div></li>`;
                        
                $("#accordionUL").append(accordItem);
            }
            var id = `#${data.title}Content`;
            
            if(data.title !="Personal"){
                app.myData.Body[data.title] = data.items;
            }
            else{
                app.myData.Header[data.title] = data.items;
            }

           
            
            /*switch(data.title){
                case "Personal": 
                    myData.push({"Personal": data.items});
                    
                    
                    
                   /* $("#header").append(`<div><h2>${item.title}</h2></div>`);
                    
                    $("#personalInfo").append(`<div>${item.address}</div>
                                                <div>${item.email}</div>
                                                <div>${item.phone}</div>`);
                                                
                    $("#objective").append(`<hr class="expanded row" /><div><p>${item.objective}</p></div>`);
                    
                    return;
                case "Experience":
                    myData.push({"Personal": data.items});
                    //expFormatter(id, data.items);
                    break;
                case "Education":
                    myData.push({"Personal": data.items});
                    //eduFormatter(id, data.items);
                    break;
                case "Projects":
                    myData.push({"Personal": data.items});
                    //projFormatter(id, data.items);
                    break;
                case "Skills":
                    myData.push({"Personal": data.items});
                    //skillFormatter(id, data.items);
                    break;
                case "Languages":
                    //langFormatter(id, data.items);
                    break;
                case "Technologies":
                    //techFormatter(id, data.items);
                    break;
                default:
                    break;
            }
        });
        

        
        $(document).foundation();
    });
});*/