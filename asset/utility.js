// 
// Retrieve json 
// 

const retrieve = async (url) => {
    let jsonArray = await fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Server response wasn't OK");
            }
        })
        .then((data) => {
            console.log(data);
            console.log(data.results);
            return data.results;
        })
        .catch((error) => console.log(error));

    return jsonArray;
};


const renderItem = (item, vString = '') => {
    let cont = 0;
    

    if (!item) return;


    if (item.constructor === [].constructor) {

        // for (let key = 0; key < item.length; key++) {
        //     vString += `<h1> ${key} </h1>`;
        //     if (item[key].constructor === [].constructor || item[key].constructor === {}.constructor) {
        //         vString = renderItem(item[key], vString);
        //     }
        // }
        for (const key of item) {
            vString += `<h1> ${cont} </h1>`;
            cont ++;
            if (key?.constructor === [].constructor || key?.constructor === {}.constructor) {
                vString = renderItem(key, vString);
            }
        }

    } else if (item.constructor === {}.constructor) {

        for (const key in item) {
            if (item[key]?.constructor === [].constructor || item[key]?.constructor === {}.constructor) {
                vString = renderItem(item[key], vString);
            }

            vString += `<li> ${key} : ${item[key]} </li>`;

        }

    };

    return vString;
}

export {
    retrieve,
    renderItem,
}