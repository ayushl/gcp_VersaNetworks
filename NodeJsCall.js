
const https = require('https');

const callExternalApiUsingHttp = (callback) => {
    https.get('https://versa-fss-dot-msb-ui-1.uc.r.appspot.com/versa-fss/v1/fss-stats', (resp) => {
    let data = '';
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

const callClientApi = (callback) => {
    https.get("https://versa-rns-dot-msb-ui-1.uc.r.appspot.com/versa-rns/v1/client-conn-list", (resp) => {
    let data = '';
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

const callActiveApi = (callback) => {
    https.get("https://versa-rns-dot-msb-ui-1.uc.r.appspot.com/versa-rns/v1/get-active-files", (resp) => {
    let data = '';
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

const callRnsApi = (callback) => {
    https.get("https://versa-rns-dot-msb-ui-1.uc.r.appspot.com/versa-rns/v1/rns-stats", (resp) => {
    let data = '';
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

const callStatisticsApi = (callback) => {
    https.get("https://versa-auths-dot-msb-ui-1.uc.r.appspot.com/versa_auths/v1/statistics", (resp) => {
    let data = '';
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

const callFrsStatisticsApi = (callback) => {
    https.get("https://versa-frs-dot-msb-ui-1.uc.r.appspot.com/versa_frs/v1/statistics", (resp) => {
    let data = '';
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}


module.exports.callApiFrsStatistics = callFrsStatisticsApi ;
module.exports.callApiStatistics = callStatisticsApi ;
module.exports.callApiRns = callRnsApi;
module.exports.callApiClient = callClientApi;
module.exports.callApiActive = callActiveApi;
module.exports.callApi = callExternalApiUsingHttp;