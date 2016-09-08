function getUrlParams(url) {
    var params = {};
    var loca = (!url) ? location.href : url;
    loca.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
    return params;
}